import { combineReducers } from "redux";

import { ticketsReducer } from "./ticketsReducer";

export const rootReducer = combineReducers({
  ticketsData: ticketsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
