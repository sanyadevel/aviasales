import { Dispatch } from "redux";
import axios, { AxiosResponse } from "axios";

import { TicketsActionTypes } from "../types/ticketsTypes";
import { changeLoader } from "./changeLoader";
import { searchIdAPI } from "../API/api";

interface FetchTicketsSuccessAction {
  type: TicketsActionTypes.FETCH_TICKETS_SUCCESS;
  payload: any[];
}

export const fetchTicketsSuccess = async (
  dispatch: Dispatch<any>
): Promise<FetchTicketsSuccessAction> => {
  let searchId: string | null;
  const searchResponse: AxiosResponse<string> = await axios.get(searchIdAPI);
  //@ts-ignore
  searchId = searchResponse.data.searchId;

  while (true) {
    try {
      dispatch(changeLoader(true));
      let ticketsResponse: AxiosResponse<any[]> = await axios.get(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      );
      dispatch({
        type: TicketsActionTypes.FETCH_TICKETS_SUCCESS,
        //@ts-ignore
        payload: [...ticketsResponse.data.tickets],
      });

      while (
        //@ts-ignore
        !ticketsResponse.data.stop &&
        //@ts-ignore
        ticketsResponse.data.status !== 200
      ) {
        dispatch(changeLoader(true));

        ticketsResponse = await axios.get(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
        );

        dispatch({
          type: TicketsActionTypes.FETCH_TICKETS_SUCCESS,
          //@ts-ignore
          payload: [...ticketsResponse.data.tickets],
        });
      }

      dispatch(changeLoader(false));
      //@ts-ignore
      return ticketsResponse.data.tickets; // обязательный параметр
    } catch (error) {
      //@ts-ignore
      if (error.response && error.response.status === 500 && searchId) {
        continue; // make another request
      }

      throw error;
    }
  }
};
