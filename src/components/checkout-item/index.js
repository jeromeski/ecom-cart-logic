import { useCart } from "context/cart.context";
import React from "react";
import { CgTrash } from "react-icons/cg";

const CheckoutItem = ({ item }) => {
  const { items, delItem, itemsTotalCount, grandTotal } = useCart();

  const packageId = items.findIndex((i) => item.id === i.id);

  return (
    <div className="row">
      <div className="col-2">
        <p>
          <u>
            Package {packageId + 1} of {item.qty}
          </u>
        </p>{" "}
        {item && (
          <div style={{ marginBottom: "1rem" }}>
            <span style={{ display: "inline-block", marginRight: "1rem" }}>
              {item.fruit}
            </span>
            <span style={{ width: "75px", display: "inline-block" }}>
              <b>{item.name}</b>
            </span>
            &nbsp;
            <span>${item.price}.00</span>
            <span className="checkout-item-button-container">
              <button
                className="checkout-item-button"
                onClick={() => delItem(item)}
              >
                <CgTrash />
              </button>
            </span>
            <span className="checkout-item-qty">Qty: {item.qty}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutItem;
