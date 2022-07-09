const noOp = () => {};

const addItemQuantity = (items, item, qty) => {
  const itemIdx = items.findIndex((c) => c.id === item.id);
  const newItems = [...items];
  newItems[itemIdx].qty += qty;
  return newItems;
};

const getNewItemsWithTotals = (items) => {
  return items.map((item) => ({
    ...item,
    itemTotal: item.price * item.qty
  }));
};

const removeItemQuantity = (items, product, qty) => {
  const itemIdx = items.findIndex((c) => c.id === product.id);
  if (items[itemIdx].qty <= 1) {
    const newItems = [...items];
    newItems[itemIdx].qty = qty;
    return newItems;
  }
  const newItems = [...items];
  newItems[itemIdx].qty -= 1;
  return newItems;
};

const removeItemFromCart = (items, product) => {
  return items.filter((c) => {
    if (c.id !== product.id) {
      return c;
    }
    return null;
  });
};

const addItemToCart = (items, product) => {
  const itemIdx = items.findIndex((c) => c.id === product.id);
  if (itemIdx >= 0) {
    return noOp();
  }
  const newProduct = { ...product, qty: 1 };
  return [...items, newProduct];
};

const getItemsAggregateCount = (items) => {
  return items.reduce(function (totalCount, currentItem) {
    return totalCount + currentItem.qty;
  }, 0);
};
const getGrandTotal = (items) => {
  return items.reduce(function (total, item) {
    return total + item.qty * item.price;
  }, 0);
};

const calculateUniqueItems = (items) => items.length;

export {
  addItemQuantity,
  removeItemQuantity,
  getNewItemsWithTotals,
  getItemsAggregateCount,
  getGrandTotal,
  removeItemFromCart,
  addItemToCart,
  calculateUniqueItems
};
