const ProductItem = ({ item, addItem, isInCartHandler, ...props }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <span style={{ width: "75px", display: "inline-block" }}>
        <b>{item.name}</b>
      </span>
      &nbsp;
      <span style={{ display: "inline-block", marginRight: "1rem" }}>
        {item.fruit}
      </span>
      <button onClick={() => addItem(item)} disabled={isInCartHandler(item.id)}>
        Add
      </button>
    </div>
  );
};

export default ProductItem;
