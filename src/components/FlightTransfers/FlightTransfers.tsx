import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { filterTicketsByCategory } from "../../store/actionCreators/filterTicketsByCategory";
import styles from "./FlightTransfers.module.scss";

export type flightOptions = {
  label: string;
  id: number;
  isChecked: boolean;
};

type flightSegment = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

const FlightTransfers: FC = () => {
  const { tickets } = useTypedSelector((state) => state.ticketsData);
  const dispatch = useDispatch();
  const [checkedValues, setCheckedValues] = useState<any[]>([]);

  useEffect(() => {
    setCheckedValues([...tickets]);
  }, [tickets]);

  const [options, setOptions] = useState<flightOptions[]>([
    { label: "Все", id: 4, isChecked: true },
    { label: "Без пересадок", id: 0, isChecked: true },
    { label: "1 пересадка", id: 1, isChecked: true },
    { label: "2 пересадки", id: 2, isChecked: true },
    { label: "3 пересадки", id: 3, isChecked: true },
  ]);

  const getCheckedStatus = (checked: boolean, id: string): void => {
    // Update the isChecked property of the corresponding option
    setOptions((prevCheckboxes: flightOptions[]) =>
      options.map((option) =>
        option.id === Number(id) ? { ...option, isChecked: checked } : option
      )
    );

    if (!checked) {
      if (id === "4" && !checked) {
        setOptions(options.map((option) => ({ ...option, isChecked: false })));
      }
      // If a checkbox is unchecked, check if the "Все" option should also be unchecked
      if (id !== "4" && options[0].isChecked) {
        setOptions((prevCheckboxes: flightOptions[]) =>
          options.map((option) =>
            option.id === 4 || option.id === Number(id)
              ? { ...option, isChecked: false }
              : option
          )
        );
      }
    } else {
      // If a checkbox is checked, check if all other options are checked, if so, check the "Все" option as well
      if (id === "4" && checked) {
        // set all options to isChecked = true
        setOptions(options.map((option) => ({ ...option, isChecked: true })));
      }
    }
  };

  const sortByFlightTransfers = (id: string, option: flightOptions): void => {
    let filteredTickets: any[] = [];

    switch (id) {
      case "0":
        filteredTickets = tickets.filter(
          (ticket) => ticket.segments[0].stops.length === 0
        );
        break;

      case "1":
        filteredTickets = tickets.filter(
          (ticket) => ticket.segments[0].stops.length === 1
        );
        break;

      case "2":
        filteredTickets = tickets.filter(
          (ticket) => ticket.segments[0].stops.length === 2
        );
        break;

      case "3":
        filteredTickets = tickets.filter(
          (ticket) => ticket.segments[0].stops.length === 3
        );
        break;

      default:
        filteredTickets = [...tickets];
    }

    // If the checkbox is checked, add the filtered tickets to the state
    if (!option.isChecked) {
      setCheckedValues((prev) => [...prev, ...filteredTickets]);
    } else {
      // If the checkbox is unchecked, remove the filtered tickets from the state
      setCheckedValues((prev) =>
        prev.filter((ticket) => !filteredTickets.includes(ticket))
      );
    }
  };

  useEffect(() => {
    dispatch(filterTicketsByCategory(checkedValues)); // Update the state with the filtered tickets
  }, [checkedValues]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <div className={styles["form-group"]}>
        {options.map((option) => (
          <label
            className={styles["checkbox-label-title"]}
            key={option.id}
            id={option.id.toString()}
            onChange={() => sortByFlightTransfers(option.id.toString(), option)}
          >
            <input
              type="checkbox"
              name="flyTranfers"
              className={styles["real-checkbox"]}
              checked={option.isChecked}
              onChange={(e) => {
                getCheckedStatus(e.target.checked, option.id.toString());
              }}
            />
            <span className={styles["custom-checkbox"]}></span>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FlightTransfers;
