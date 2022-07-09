const CartItem = ({ item, delItem, incQty, decQty }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <button style={{ marginRight: "1rem" }} onClick={() => delItem(item)}>
        x
      </button>
      <span style={{ width: "60px", display: "inline-block" }}>
        <b>{item.name}</b>
      </span>
      &nbsp;
      <span style={{ display: "inline-block", marginRight: "1rem" }}>
        {item.fruit}
      </span>
      <button onClick={() => incQty(item, 1)}>+</button>
      <input style={{ width: "5%" }} type="text" readOnly value={item.qty} />
      <button onClick={() => decQty(item, 1)}>-</button>
    </div>
  );
};

export default CartItem;
