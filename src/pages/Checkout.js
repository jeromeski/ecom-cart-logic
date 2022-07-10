import { useCart } from "context/cart.context";
import { Link, useNavigate } from "react-router-dom";
import CheckoutItem from "components/checkout-item";
import React, { useEffect } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const Checkout = () => {
  const {
    items,
    itemsTotalCount,
    grandTotal,
    isEmpty,
    totalShippingFee,
    clearCart
  } = useCart();
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => {
    setShowDialog(false);
    navigate("/");
    clearCart();
  };

  useEffect(() => {
    if (isEmpty) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [isEmpty]);
  return (
    <React.Fragment>
      <span>
        <Link to="/"> Home </Link>/Checkout
      </span>
      <div className="row">
        <div className="col-2">
          {items ? (
            items.map((item) => <CheckoutItem key={item.id} item={item} />)
          ) : (
            <p>No items to show...</p>
          )}
        </div>
        <div className="col-2">
          <div>
            <p>
              <u>Order Summary</u>
            </p>
            <div className="order-summary-container">
              <div className="order-subtotal">
                <span>SubTotal ({itemsTotalCount} items)</span>
                <span>${grandTotal}.00</span>
              </div>
              <div className="order-shipping">
                <span>Shipping Fee:</span>
                <span>&nbsp;&nbsp;{totalShippingFee}.00</span>
              </div>
              {/* <div className="order-promo">
                <div>Promotion:</div> <div>-5.00</div>
              </div> */}
              <p className="order-grandTotal">
                <span>Total</span>{" "}
                <span>
                  <b>${grandTotal + totalShippingFee}.00</b>
                </span>
              </p>
            </div>
            <button onClick={open}>PLACE ORDER NOW</button>
          </div>
        </div>
      </div>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <p>Thank you for purchasing!</p>
        <button onClick={close}>BACK TO HOME</button>
      </Dialog>
    </React.Fragment>
  );
};

export default Checkout;
