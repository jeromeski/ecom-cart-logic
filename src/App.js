import CartProvider from "./context/cart.context";
import Home from "./pages/Home";
import "./styles.css";

export default function App() {
  const fruits = [
    { id: 1, fruit: "🍎", name: "Apple", price: 5 },
    { id: 2, fruit: "🍌", name: "Banana", price: 6 },
    { id: 3, fruit: "🍊", name: "Orange", price: 7 }
  ];

  return (
    <CartProvider>
      <Home fruits={fruits} />
    </CartProvider>
  );
}
