import { useCart } from "context/cart.context";
import React from "react";
import { CgTrash } from "react-icons/cg";

const CheckoutItem = ({ item }) => {
  const { items, delItem, applyVoucher } = useCart();

  const packageId = items.findIndex((i) => item.id === i.id);

  return (
    <div className="checkout-item">
      <p>
        <u>
          Package {packageId + 1} of {item.qty}
        </u>
      </p>{" "}
      {item && (
        <React.Fragment>
          <div style={{ marginBottom: "1rem" }}>
            <span style={{ display: "inline-block", marginRight: "1rem" }}>
              {item.fruit}
            </span>
            <span style={{ width: "75px", display: "inline-block" }}>
              <b>{item.name}</b>
            </span>
            &nbsp;
            <span>${item.listPrice}.00</span>
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
          <button disabled={0} onClick={() => applyVoucher(item)}>
            Apply Voucher
          </button>
          <pre>{JSON.stringify(item.isVoucher, 2, null)}</pre>
        </React.Fragment>
      )}
      <hr />
    </div>
  );
};

export default CheckoutItem;
