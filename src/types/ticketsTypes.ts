export enum TicketsActionTypes {
  CHANGE_LOADER_STATUS = 'CHANGE_LOADER_STATUS',
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
  FILTER_TICKETS_BY_CATEGORY = 'FILTER_TICKETS_BY_CATEGORY',
  FILTER_TICKETS_BY_CLASS = 'FILTER_TICKETS_BY_CLASS',
  INCREASE_NUM_DISPLAYED_TICKETS = 'INCREASE_NUM_DISPLAYED_TICKETS',
}

export interface TicketsState {
  tickets: any[];
  isLoading: boolean;
  error: any;
  filteredTickets: any[];
  filteredTicketsByClass: any[];
  numDisplayedTickets: number;
}

interface CHANGE_LOADER_STATUS_ACTION {
  type: string;
  payload: boolean;
}

interface FETCH_TICKETS_SUCCESS_ACTION {
  type: string;
  payload: any[];
}

interface FETCH_TICKETS_ERROR_ACTION {
  type: string;
  payload?: string | null;
}

interface FILTER_TICKETS_BY_CATEGORY {
  type: string;
  payload: any[];
}
interface FILTER_TICKETS_BY_CLASS {
  type: string;
  payload: any;
}

interface INCREASE_NUM_DISPLAYED_TICKETS {
  type: string;
  payload: any;
}

export type TicketAction =
  | CHANGE_LOADER_STATUS_ACTION
  | FETCH_TICKETS_SUCCESS_ACTION
  | FETCH_TICKETS_ERROR_ACTION
  | FILTER_TICKETS_BY_CATEGORY
  | FILTER_TICKETS_BY_CLASS
  | INCREASE_NUM_DISPLAYED_TICKETS;
