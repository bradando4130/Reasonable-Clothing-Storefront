import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Card from "../../UI/Card";
import classes from "./StoreItem.module.scss";
import StoreItemForm from "./StoreItemForm";

const StoreItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  // refer to CartContext
  const cartCtx = useContext(CartContext);

  /**
   *
   * @param {*} size - size of clothing item from drop down in StoreItemForm
   * @param {*} id - unique id created from combining clothing item id with size for each item/size combo
   */
  const addToCartHandler = (size) => {
    cartCtx.addItem({
      id: `${props.id}_${size}`,
      name: props.name,
      amount: 1,
      size: size,
      price: props.price,
      img: props.image,
    });
  };

  return (
    <Card className={classes.storeItem}>
      <div>
        <img
          className={classes.image}
          src={props.image}
          alt={props.description}
        />
        <h3 className={classes.heading}>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p>{price}</p>
      </div>
      <StoreItemForm
        id={props.id}
        sizes={props.sizes}
        onAddToCart={addToCartHandler}
      />
    </Card>
  );
};

export default StoreItem;
