import { useRef } from "react";

import Select from "../../UI/Select";

import Button from "../../UI/Button";

import classes from "./StoreItemForm.module.scss";

const StoreItemForm = (props) => {
  const sizeInputRef = useRef();

  // obtain selected size from input
  const submitHandler = (event) => {
    event.preventDefault();
   
    // useRef for current size selected
    const enteredSize = sizeInputRef.current.value;

    //add item to cart with selected size
    props.onAddToCart(enteredSize);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Select
        label="Size"
        ref={sizeInputRef}
        input={{
          id: "size_" + props.id,
          sizes: [...props.sizes],
        }}
      />
      <Button type="submit" className={classes["button-add"]}>
        Add to Cart
      </Button>
    </form>
  );
};

export default StoreItemForm;
