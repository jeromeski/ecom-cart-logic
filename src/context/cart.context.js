import {
  useContext,
  createContext,
  useReducer,
  useMemo,
  useEffect
} from "react";
import { cartReducer, INITIAL_STATE } from "./cart.reducer";
// import useLocalStorage from "hooks/use-local-storage";
// import { update } from 'lodash';
import { useLocalStorage } from "react-use";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [savedCart, saveCart] = useLocalStorage(
    `cart`,
    JSON.stringify(INITIAL_STATE)
  );
  const [state, dispatch] = useReducer(cartReducer, JSON.parse(savedCart));
  console.log(state);
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

  const values = useMemo(
    () => ({ ...state, incQty, decQty, delItem, addItem }),
    [state]
  );

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
