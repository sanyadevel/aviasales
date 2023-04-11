import { TicketsActionTypes } from '../../types/ticketsTypes';

interface FilterTicketsByClassAction {
  type: string;
  payload: any[];
}

export const filterTicketsByClass = (
  ticket: any[],
): FilterTicketsByClassAction => {
  return {
    type: TicketsActionTypes.FILTER_TICKETS_BY_CLASS,
    payload: ticket,
  };
};
