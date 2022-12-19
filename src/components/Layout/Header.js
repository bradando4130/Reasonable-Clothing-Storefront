import React from "react";

import classes from "./Header.module.scss";

import HeaderCartBadge from "./HeaderCartBadge";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Reasonable Clothing</h1>
      <HeaderCartBadge onClick={props.onShowCart} />
    </header>
  );
};

export default Header;
