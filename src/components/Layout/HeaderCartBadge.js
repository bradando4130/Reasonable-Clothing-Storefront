import { useContext, useState } from "react";

import classes from "./HeaderCartBadge.module.scss";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";

const HeaderCartBadge = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  // pull cart items.length from CartContext for display on button
  const numberOfCartItems = items.reduce((cur, acc) => {
    return cur + acc.amount;
  }, 0);

  return (
    <Button className={classes.badge} onClick={props.onClick}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <span>Cart</span>
      <span className={classes['cart-quantity']}>{numberOfCartItems}</span>
    </Button>
  );
};

export default HeaderCartBadge;
