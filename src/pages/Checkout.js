import { useCart } from "context/cart.context";
import { Link, useNavigate } from "react-router-dom";
import CheckoutItem from "components/checkout-item";
import React, { useEffect } from "react";

const Checkout = () => {
  const { items, itemsTotalCount, grandTotal, isEmpty } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    if (isEmpty) {
      navigate("/");
    }
  }, [isEmpty]);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2">
          <span>
            <Link to="/"> Home </Link>/Checkout
          </span>

          {items ? (
            items.map((item) => <CheckoutItem key={item.id} item={item} />)
          ) : (
            <p>No items to show...</p>
          )}
        </div>
        <div className="col-2">
          <p>
            <u>Order Summary</u>
          </p>
          <div className="order-summary-container">
            <div className="order-subtotal">
              <div>SubTotal ({itemsTotalCount} items)</div>
              <div>${grandTotal}.00</div>
            </div>
            <div className="order-shipping">
              <div>Shipping Fee:</div> <div>10.00</div>
            </div>
            <div className="order-promo">
              <div>Promotion:</div> <div>-5.00</div>
            </div>
            <p className="order-grandTotal">
              <span>Total</span>{" "}
              <span>{/* <b>${item.itemTotal + 10 - 5}.00</b> */}</span>
            </p>
          </div>
          <button>PLACE ORDER NOW</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
