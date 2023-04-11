import React, { FC } from "react";

import { getMinutesToHoursAndMinutes } from "../../logics/getMinutesToHoursAndMinutes";
import { getUtcTimestampToLocalTimezone } from "../../logics/getUtcTimestampToLocalTimezone";
import { addMinutesToTime } from "../../logics/addMinutesToTime";
import { FlightFilteredClass } from "../FlightClasses/FlightClasses";
import flightStyles from "./Ticket.module.scss";

const Ticket: FC<FlightFilteredClass> = ({ price, carrier, segments }) => {
  return (
    <div className={flightStyles.flight}>
      <header className={flightStyles["flight__header"]}>
        <h2 className={flightStyles["flight__header--price"]}>
          {`${price
            .toLocaleString("en-US", { minimumFractionDigits: 0 })
            .replace(",", " ")} ₽`}
        </h2>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="flyCompanyLogo" />
      </header>
      <table className={flightStyles["flight__table"]}>
        <thead>
          <tr className={flightStyles["flight__table--tHeadtBodyTr"]}>
            <th>
              {segments[0].origin} – {segments[0].destination}
            </th>
            <th>В пути</th>
            <th>
              {segments[0].stops.length > 1
                ? `${segments[0].stops.length} пересадки`
                : // @ts-ignore
                segments[0].stops.length === 1 && segments[0].stops.length < 10
                ? `${segments[0].stops.length} пересадка`
                : `${segments[0].stops.length} пересадок`}
            </th>
          </tr>
          <tr>
            <td>
              {`${getUtcTimestampToLocalTimezone(segments[0].date)} – 
              ${addMinutesToTime(
                getUtcTimestampToLocalTimezone(segments[0].date),
                segments[0].duration
              )}`}
            </td>
            <td>{getMinutesToHoursAndMinutes(segments[0].duration)}</td>
            {segments[0].stops.length > 0 && (
              <td>{segments[0].stops.join(", ")} </td>
            )}
          </tr>
        </thead>
        <tbody className={flightStyles["flight__table--tbody"]}>
          <tr className={flightStyles["flight__table--tHeadtBodyTr"]}>
            <th>
              {segments[1].origin} – {segments[1].destination}
            </th>
            <th>В пути</th>
            <th>
              {segments[1].stops.length > 1
                ? `${segments[1].stops.length} пересадки`
                : // @ts-ignore
                segments[1].stops.length === 1 && segments[1].stops.length < 10
                ? `${segments[1].stops.length} пересадка`
                : `${segments[1].stops.length} пересадок`}
            </th>
          </tr>
          <tr>
            <td>
              {`${getUtcTimestampToLocalTimezone(segments[1].date)} – 
              ${addMinutesToTime(
                getUtcTimestampToLocalTimezone(segments[1].date),
                segments[1].duration
              )}`}
            </td>
            <td>{getMinutesToHoursAndMinutes(segments[1].duration)}</td>
            {segments[1].stops.length > 0 && (
              <td>{segments[1].stops.join(", ")}</td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
