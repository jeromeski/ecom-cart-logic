import {
  useContext,
  createContext,
  useReducer,
  useMemo,
  useEffect
  // useRef
} from "react";
import { cartReducer, INITIAL_STATE } from "./cart.reducer";
// import useLocalStorage from "hooks/use-local-storage";
// import { update } from 'lodash';
import { useLocalStorage } from "react-use";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // upload state in local storage
  const [savedCart, saveCart] = useLocalStorage(
    `cart`,
    JSON.stringify(INITIAL_STATE)
  );

  // use local storage data to populate selected cart items
  const [state, dispatch] = useReducer(
    cartReducer,
    JSON.parse(savedCart)
    // INITIAL_STATE
  );

  // update local storage everytime there is change in cart
  useEffect(() => {
    saveCart(JSON.stringify(state));
  }, [state, saveCart]);

  const incQty = (item, qty) => {
    dispatch({
      type: "INC_QTY",
      item,
      qty
    });
  };

  const decQty = (item, qty) => {
    dispatch({
      type: "DEC_QTY",
      item,
      qty
    });
  };

  const delItem = (item) => {
    dispatch({
      type: "DELETE_ITEM",
      item
    });
  };

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      item
    });
  };

  const isInCartHandler = (id) => {
    return state.items.some((i) => i.id === id);
  };

  const values = useMemo(
    () => ({ ...state, incQty, decQty, delItem, addItem, isInCartHandler }),
    // eslint-disable-next-line
    [state]
  );

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
