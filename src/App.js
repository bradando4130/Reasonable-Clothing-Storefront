import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import CartProvider from "./store/CartProvider";
import StoreFront from "./components/StoreFront/StoreFront";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <main>
        <StoreFront />
      </main>
    </CartProvider>
  );
}

export default App;
