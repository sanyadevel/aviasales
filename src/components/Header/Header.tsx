import React, { FC } from "react";

import logo from "../../assets/logo.svg";
import headerStyles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <>
      <a href="/" className={headerStyles.logoLink}>
        <img src={logo} alt="logo" className={headerStyles.logoImg} />
      </a>
    </>
  );
};

export default Header;
