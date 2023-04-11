import { Action } from "redux";

import { TicketsActionTypes } from "../../types/ticketsTypes";

export interface FilterTicketsByCategoryAction extends Action {
  type: TicketsActionTypes.FILTER_TICKETS_BY_CATEGORY;
  payload: string[];
}

export const filterTicketsByCategory = (
  checkedValues: string[]
): FilterTicketsByCategoryAction => {
  return {
    type: TicketsActionTypes.FILTER_TICKETS_BY_CATEGORY,
    payload: Array.from(new Set(checkedValues)),
  };
};
