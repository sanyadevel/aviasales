import {
  TicketsState,
  TicketAction,
  TicketsActionTypes,
} from '../../types/ticketsTypes';

const initialState: TicketsState = {
  tickets: [],
  isLoading: false,
  error: null,
  filteredTickets: [],
  filteredTicketsByClass: [],
  numDisplayedTickets: 10,
};

export const ticketsReducer = (
  state = initialState,
  action: TicketAction,
): TicketsState => {
  switch (action.type) {
    case TicketsActionTypes.CHANGE_LOADER_STATUS:
      return { ...state, isLoading: action.payload };

    case TicketsActionTypes.FETCH_TICKETS_SUCCESS:
      const newTickets = Array.isArray(action.payload) ? action.payload : [];
      return {
        ...state,
        tickets: [...state.tickets, ...newTickets],
      };

    case TicketsActionTypes.FETCH_TICKETS_ERROR:
      return {
        ...state,
        error: action.payload,
        tickets: [],
        isLoading: false,
      };

    case TicketsActionTypes.FILTER_TICKETS_BY_CATEGORY:
      const newTicketsByCategory = Array.isArray(action.payload)
        ? action.payload
        : [];
      return {
        ...state,
        filteredTickets: Array.from(new Set([...newTicketsByCategory])),
      };

    case TicketsActionTypes.FILTER_TICKETS_BY_CLASS:
      const newTicketsByClass = Array.isArray(action.payload)
        ? action.payload
        : [];
      return {
        ...state,
        filteredTicketsByClass: Array.from(new Set([...newTicketsByClass])),
      };

    case TicketsActionTypes.INCREASE_NUM_DISPLAYED_TICKETS:
      return { ...state, numDisplayedTickets: state.numDisplayedTickets + 5 };

    default:
      return state;
  }
};
