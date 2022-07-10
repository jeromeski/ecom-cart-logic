import CartProvider from "./context/cart.context";
import Home from "./pages/Home";
import Checkout from "pages/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
