import Button from "../UI/Button";

import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  const price = props.price.toFixed(2);

  return (
    <li className={classes.cartItem}>
      <img className={classes.image} src={props.img} alt={props.description} />
      <div className={classes.descriptors}>
        <h3>{props.name}</h3>
        <span>Size: {props.size}</span>
      </div>

      <div className={classes.quantifiables}>
        <span>${price}</span>
        <Button onClick={props.onRemove}>-</Button>
        <span className={classes.itemQuantity}>{props.amount}</span>
        <Button onClick={props.onAdd}>+</Button>
      </div>
      <span className={classes.price}>${(props.amount * price).toFixed(2)}</span>
    </li>
  );
};

export default CartItem;
