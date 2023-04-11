import React, { FC } from "react";

import Header from "./components/Header";
import FlightTransfers from "./components/FlightTransfers";
import FlightClasses from "./components/FlightClasses";
import MoreTicketsButton from "./components/MoreTicketsButton";
import Tickets from "./components/Tickets";
import { useTypedSelector } from "./hooks/useTypedSelector";
import appStyles from "./App.module.scss";

const App: FC = () => {
  const { filteredTicketsByClass, tickets } = useTypedSelector(
    (state) => state.ticketsData
  );

  return (
    <div
      className={
        filteredTicketsByClass.length
          ? appStyles.container
          : appStyles["container-noTickets"]
      }
    >
      <Header />
      <div className={appStyles.main}>
        <FlightTransfers />
        <div className={appStyles["main__content"]}>
          {tickets.length ? <FlightClasses /> : ""}
          <Tickets />
          {filteredTicketsByClass.length ? <MoreTicketsButton /> : ""}
        </div>
      </div>
    </div>
  );
};

export default App;
