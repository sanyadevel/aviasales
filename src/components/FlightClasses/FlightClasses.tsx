import React, { FC, useEffect } from "react";
import { Radio } from "antd";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TicketsActionTypes } from "../../types/ticketsTypes";
import { filterTicketsByClass } from "../../store/actionCreators/filterTicketsByClass";
import "../../App.module.scss";

type FlightClass = {
  flyClass: string;
  value: string;
  id: number;
};

export type flightSegments = {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: [];
};

export type FlightFilteredClass = {
  carrier: string;
  price: number;
  segments: flightSegments[];
};

const FlightClasses: FC = () => {
  const { tickets } = useTypedSelector((state) => state.ticketsData);
  const dispatch = useDispatch();
  const { filteredTickets } = useTypedSelector((state) => state.ticketsData);

  const flightClasses: FlightClass[] = [
    { flyClass: "Самый дешевый", value: "a", id: 1 },
    { flyClass: "Самый быстрый", value: "b", id: 2 },
    { flyClass: "Оптимальный", value: "c", id: 3 },
  ];

  const sortByIncrease = (arr: FlightFilteredClass[]): any[] =>
    arr.sort((a, b) => a.price - b.price);

  const sortTicketsByFlightClasses = (id: string): void => {
    switch (id) {
      case "1":
        dispatch(filterTicketsByClass(sortByIncrease(filteredTickets)));
        break;
      case "2":
        const f2 = filteredTickets.sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration)
        );
        dispatch(filterTicketsByClass(f2));
        break;

      default:
        const optimalTickets: FlightFilteredClass[] = [];
        optimalTickets.push(
          ...filteredTickets.filter((ticket) => ticket.price > 30000)
        );
        dispatch(
          filterTicketsByClass(
            optimalTickets.sort((a, b) => a.price - b.price).slice(0, 100)
          )
        );
        break;
    }
  };

  useEffect(() => {
    dispatch({
      type: TicketsActionTypes.FILTER_TICKETS_BY_CATEGORY,
      payload: sortByIncrease(tickets),
    });
  }, [tickets]);

  return (
    <Radio.Group
      defaultValue={flightClasses[0].value}
      buttonStyle="solid"
      size="large"
    >
      {flightClasses.map((flyClass: FlightClass) => (
        <Radio.Button
          value={flyClass.value}
          key={flyClass.id}
          id={flyClass.id.toString()}
          className="custom-radio"
          style={{
            width: "167px",
          }}
          onChange={() => sortTicketsByFlightClasses(flyClass.id.toString())}
        >
          {flyClass.flyClass}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default FlightClasses;
