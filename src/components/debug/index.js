import React from "react";
import { useCart } from "../../context/cart.context";

const Debug = () => {
  const {
    items,
    uniqueItemsCount,
    isEmpty,
    itemsTotalCount,
    grandTotal,
    totalShippingFee
  } = useCart();
  return (
    <React.Fragment>
      <pre>items: {JSON.stringify(items, null, 2)}</pre>
      <pre>uniqueItems: {JSON.stringify(uniqueItemsCount)}</pre>
      <pre>isEmpty: {JSON.stringify(isEmpty)}</pre>
      <pre>itemsTotalCount : {JSON.stringify(itemsTotalCount)}</pre>
      <pre>grandTotal: {JSON.stringify(grandTotal)}</pre>
      <pre>totalShippingFee: {JSON.stringify(totalShippingFee)}</pre>
    </React.Fragment>
  );
};
export default Debug;
