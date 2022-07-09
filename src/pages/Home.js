import React from "react";
import { useCart } from "../context/cart.context";

const Home = ({ fruits }) => {
  const {
    items,
    uniqueItemsCount,
    grandTotal,
    addItem,
    delItem,
    incQty,
    decQty,
    isEmpty
  } = useCart();
  console.log(items);
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div className="products-feed">
            {fruits.map((item) => {
              return (
                <div key={item.id} style={{ marginBottom: "1rem" }}>
                  <span style={{ width: "60px", display: "inline-block" }}>
                    <b>{item.name}</b>
                  </span>
                  &nbsp;
                  <span
                    style={{ display: "inline-block", marginRight: "1rem" }}
                  >
                    {item.fruit}
                  </span>
                  <button onClick={() => addItem(item)}>Add</button>
                </div>
              );
            })}
          </div>
          <br />
          <hr />
          <br />
          <div className="cart">
            {items.map((item) => {
              return (
                <div key={item.id} style={{ marginBottom: "1rem" }}>
                  <button
                    style={{ marginRight: "1rem" }}
                    onClick={() => delItem(item)}
                  >
                    x
                  </button>
                  <span style={{ width: "60px", display: "inline-block" }}>
                    <b>{item.name}</b>
                  </span>
                  &nbsp;
                  <span
                    style={{ display: "inline-block", marginRight: "1rem" }}
                  >
                    {item.fruit}
                  </span>
                  <button onClick={() => incQty(item, 1)}>+</button>
                  <input
                    style={{ width: "5%" }}
                    type="text"
                    readOnly
                    value={item.qty}
                  />
                  <button onClick={() => decQty(item, 1)}>-</button>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <pre>items: {JSON.stringify(items, null, 2)}</pre>
          <pre>uniqueItems: {JSON.stringify(uniqueItemsCount)}</pre>
          <pre>isEmpty: {JSON.stringify(isEmpty)}</pre>
          <pre>grandTotal: {JSON.stringify(grandTotal)}</pre>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
