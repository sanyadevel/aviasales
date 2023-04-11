import React, { FC } from "react";

import ticketsIsNotFoundImg from "../../assets/ticketsIsNotFoundImage.png";
import styles from "./TicketsIsNotFound.module.scss";

const TicketsIsNotFound: FC = () => {
  return (
    <div className={styles.container}>
      <img
        src={ticketsIsNotFoundImg}
        alt="ticketsIsNotFoundImg"
        className={styles.image}
      />
      <h2 className={styles.title}>Результатов не найдено</h2>
      <h3 className={styles.description}>
        Поищите по другим фильтрам или уберите примененные фильтры.
      </h3>
    </div>
  );
};

export default TicketsIsNotFound;
