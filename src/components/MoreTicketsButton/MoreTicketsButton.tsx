import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Button, Space } from "antd";

import { TicketsActionTypes } from "../../types/ticketsTypes";

const MoreTicketsButton: FC = () => {
  const dispatch = useDispatch();
  const increaseNumDisplayedTickets = () => {
    dispatch({ type: TicketsActionTypes.INCREASE_NUM_DISPLAYED_TICKETS });
  };

  return (
    <Space direction="vertical">
      <Button
        type="primary"
        block
        style={{
          width: "502px",
          height: "50px",
          borderRadius: "5px",
          margin: "20px 0 50px 0",
          backgroundColor: "#2196F3",
        }}
        onClick={increaseNumDisplayedTickets}
      >
        Показать еще 5 билетов!
      </Button>
    </Space>
  );
};

export default MoreTicketsButton;
