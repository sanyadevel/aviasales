import { Dispatch } from "redux";

import { TicketsActionTypes } from "../../types/ticketsTypes";

export const fetchTicketsError = (
  dispatch: Dispatch<any>,
  error: string
): void => {
  dispatch({ type: TicketsActionTypes.FETCH_TICKETS_ERROR, payload: error });
};
