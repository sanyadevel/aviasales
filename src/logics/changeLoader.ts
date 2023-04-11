import { TicketsActionTypes } from '../types/ticketsTypes';

export const changeLoader = (param: boolean) => {
  return { type: TicketsActionTypes.CHANGE_LOADER_STATUS, payload: param };
};
