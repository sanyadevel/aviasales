import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import Ticket from "../Ticket";
import { fetchTicketsError } from "../../store/actionCreators/fetchTicketsError";
import { fetchTicketsSuccess } from "../../logics/fetchTicketsSuccess";
import Loader from "../Loader/Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FlightFilteredClass } from "../FlightClasses/FlightClasses";
import { TicketsActionTypes } from "../../types/ticketsTypes";
import TicketsIsNotFound from "../TicketsIsNotFound";
import styles from "./Tickets.module.scss";

const Tickets: FC = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    tickets,
    filteredTickets,
    filteredTicketsByClass,
    numDisplayedTickets,
  } = useTypedSelector((state) => state.ticketsData);

  const displayedTickets = filteredTicketsByClass.slice(0, numDisplayedTickets);

  useEffect(() => {
    try {
      fetchTicketsSuccess(dispatch);
    } catch (e) {
      fetchTicketsError(dispatch, `Refresh the page or try later ${e}`);
    }
  }, []);

  useEffect(() => {
    dispatch({
      type: TicketsActionTypes.FILTER_TICKETS_BY_CLASS,
      payload: filteredTickets,
    });
  }, [filteredTickets]);

  return (
    <div className={styles.flights}>
      {isLoading && <Loader />}
      {!filteredTicketsByClass.length ? <TicketsIsNotFound /> : ""}
      {tickets.length
        ? displayedTickets.map((ticket: FlightFilteredClass, idx: number) => {
            return (
              <Ticket
                key={idx}
                price={ticket.price}
                carrier={ticket.carrier}
                segments={ticket.segments}
              />
            );
          })
        : ""}
    </div>
  );
};

export default Tickets;
