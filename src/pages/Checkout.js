import { useCart } from "context/cart.context";
import { Link } from "react-router-dom";
import CheckoutItem from "components/checkout-item";
import React from "react";

const Checkout = () => {
  const { items } = useCart();
  console.log("checkout", items);
  return (
    <React.Fragment>
      <span>
        <Link to="/"> Home </Link>/Checkout
      </span>

      {items ? (
        items.map((item) => <CheckoutItem key={item.id} item={item} />)
      ) : (
        <p>No items to show...</p>
      )}
    </React.Fragment>
  );
};

export default Checkout;
