// import _ from "lodash";

import {
  removeItemQuantity,
  addItemQuantity,
  getNewItemsWithTotals,
  getItemsAggregateCount,
  getGrandTotal,
  removeItemFromCart,
  addItemToCart,
  calculateUniqueItems,
  getTotalShippingFee
} from "./cart.utils";

const INITIAL_STATE = {
  items: [],
  itemsTotalCount: 0,
  uniqueItemsCount: null,
  grandTotal: 0,
  totalShippingFee: 0,
  isEmpty: true
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INC_QTY": {
      const items = addItemQuantity(state.items, action.item, action.qty);
      return generateFinalState(state, items);
    }
    case "DEC_QTY": {
      const items = removeItemQuantity(state.items, action.item, action.qty);
      return generateFinalState(state, items);
    }
    case "DELETE_ITEM": {
      const items = removeItemFromCart(state.items, action.item);
      return generateFinalState(state, items);
    }

    case "ADD_ITEM": {
      const items = addItemToCart(state.items, action.item);
      return !items ? state : generateFinalState(state, items);
    }
    default:
      return state;
  }
};

const generateFinalState = (state, items) => {
  const uniqueItemsCount = calculateUniqueItems(items);

  return {
    ...state,
    items: getNewItemsWithTotals(items),
    itemsTotalCount: getItemsAggregateCount(items),
    uniqueItemsCount,
    grandTotal: getGrandTotal(items),
    totalShippingFee: getTotalShippingFee(items),
    isEmpty: uniqueItemsCount === 0
  };
};

export { INITIAL_STATE, cartReducer };

/*
const cartReducer = (state, action) => {
  const cartItems = state.items;
  const product = action.payload;
  const targetItem = cartItems.filter((item) => item.id === product.id)[0];
  switch (action.type) {
    case "INC_QTY":
      return {
        ...state,
        items: [
          ...cartItems.map((item) =>
            item.id === targetItem.id
              ? {
                  ...item,
                  qty: item.qty + 1
                }
              : item
          )
        ]
      };
    case "DEC_QTY":
      return {
        ...state,
        items: [
          ...cartItems.map((item) =>
            item.id === targetItem.id
              ? {
                  ...item,
                  qty: item.qty === 1 ? 1 : item.qty - 1
                }
              : item
          )
        ]
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: [...cartItems.filter((item) => item.id !== targetItem.id)]
      };

    case "ADD_ITEM":
      const isInCart = Object.values(cartItems[0]).includes(product.id);
      return isInCart
        ? { ...state }
        : {
            ...state,
            items: [...cartItems.push(product)]
          };

    default:
      return state;
  }

  const generateFinalState = (state, items) => {

  const uniqueItemsCount = calculateUniqueItems(items) || 0;

  return {
    ...state,
    items: getNewItemsWithTotals(items),
    itemsTotalCount: getItemsAggregateCount(items),
    uniqueItemsCount,
    grandTotal: getGrandTotal(items),
    isEmpty: uniqueItemsCount === 0
  };
};
};

====================================

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INC_QTY": {
      const items = addItemQuantity(state.items, action.item, action.qty);
      return generateFinalState(state,items);
      };
    case "DEC_QTY": {
      const items = removeItemQuantity(
        state.items,
        action.item,
        action.qty
      );
      return generateFinalState(state, items);
    }
    case "DELETE_ITEM": {
       const items = removeItemFromCart(state.items, action.item);
				return generateFinalState(state, items);
    }
     
    case "ADD_ITEM": {
        const items = addItemToCart(state.items, action.item);
				return generateFinalState(state, items);
      }
    default:
      return state;
  }
};

const generateFinalState = (state, items) => {

  const uniqueItemsCount = calculateUniqueItems(items) || 0;

  return {
    ...state,
    items: getNewItemsWithTotals(items),
    itemsTotalCount: getItemsAggregateCount(items),
    uniqueItemsCount,
    grandTotal: getGrandTotal(items),
    isEmpty: uniqueItemsCount === 0
  };
};

*/
