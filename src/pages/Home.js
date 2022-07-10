import React from "react";
import CartItem from "../components/cart-item";
import Debug from "../components/debug";
import ProductItem from "../components/product-item";
import { useAxios } from "hooks/use-axios";
import { useCart } from "../context/cart.context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = useAxios();
  const navigate = useNavigate();
  const {
    items,
    addItem,
    delItem,
    incQty,
    decQty,
    isEmpty,
    isInCartHandler
  } = useCart();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div className="products-feed">
            {data.map((item) => {
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
            {!isEmpty && <button onClick={handleCheckout}>Checkout</button>}
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
