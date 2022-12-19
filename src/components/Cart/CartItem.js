import Button from "../UI/Button";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <span>{props.size}</span>
        <div>
          <span>{price}</span>
          <span>x {props.amount}</span>
        </div>
      </div>
      <div>
        <Button onClick={props.onRemove}>-</Button>
        <Button onClick={props.onAdd}>+</Button>
      </div>
    </li>
  );
};

export default CartItem;
