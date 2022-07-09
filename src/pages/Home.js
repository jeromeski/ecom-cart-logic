import React from "react";
import CartItem from "../components/cart-item";
import Debug from "../components/debug";
import ProductItem from "../components/product-item";
import { useCart } from "../context/cart.context";

const Home = ({ fruits }) => {
  const {
    items,
    addItem,
    delItem,
    incQty,
    decQty,
    isEmpty,
    isInCartHandler
  } = useCart();
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div className="products-feed">
            {fruits.map((item) => {
              return (
                <ProductItem
                  item={item}
                  isInCartHandler={isInCartHandler}
                  addItem={addItem}
                  key={item.id}
                />
              );
            })}
          </div>
          <br />
          <hr />
          <br />
          <div className="cart">
            {isEmpty ? (
              <p>No items in the cart.</p>
            ) : (
              <div>
                {items.map((item) => {
                  return (
                    <CartItem
                      item={item}
                      key={item.id}
                      incQty={incQty}
                      decQty={decQty}
                      delItem={delItem}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <Debug />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
