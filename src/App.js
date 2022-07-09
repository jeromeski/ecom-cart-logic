import CartProvider from "./context/cart.context";
import Home from "./pages/Home";
import "./styles.css";
import { fruits } from "data";

export default function App() {
  return (
    <CartProvider>
      <Home fruits={fruits} />
    </CartProvider>
  );
}
