import React from "react";
import { CartWithBottomSummary } from "../E-Commerce/ShoppingCart/CartWithBottomSummary/App";
import { CartWithDivider } from "../E-Commerce/ShoppingCart/CartWithDivider/App";
import { CartWithDrawer } from "../E-Commerce/ShoppingCart/CartWithDrawer/App";

function Cart(props) {
  return (
    <>
      <CartWithBottomSummary />
      <CartWithDivider />
      <CartWithDrawer />
    </>
  );
}

export default Cart;
