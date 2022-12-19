import { useReducer } from "react";

import CartContext from "./cart-context";

// set default cart state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

/**
 * Cart reducer functiion
 * @param {action} ADD -
 * first check if item/size combo exists in cart, if so increase qty in cart
 * if not then return new updated cart array with item/size combo
 * item/size combo created by combining size with item id in template literal when first adding new item to cart
 * @param {action} REMOVE -
 */
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // update cart total with new addition to cart
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // find index in cart of item IF already exists
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // create variable for exisiting cart item based off above index (null if doesn't exist)
    const existingCartItem = state.items[existingCartItemIndex];

    // new updated cartItems array
    let updatedItems;

    // check IF existingCartItem && size combo exists, update cart item qty
    // ELSE add new item to cart
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    // return new state snapshot
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    // find index in cart of item IF already exists
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    // new updated cart total after item remove
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    // if existing item = 1, remove item from cart
    // ELSE decrease item qty by 1
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    
    // return new state snapshot
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  //
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
