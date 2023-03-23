import { useContext } from "react";

import classes from "./Cart.module.scss";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Button from "../UI/Button";

const Cart = (props) => {
  // refer to CartContext
  const cartCtx = useContext(CartContext);

  // if cart is empty, use to indicate this to user
  const isCartEmpty = cartCtx.items.length < 1;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          size={item.size}
          img={item.img}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {isCartEmpty ? <p>Your Cart is Empty!!</p> : cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </Button>
        {hasItems && <Button className={classes.button}>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;
