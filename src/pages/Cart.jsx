import { useState } from "react";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import CartItems from "../components/sections/cart/CartItems";
import CartSummary from "../components/sections/cart/CartSummary";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "تيشيرت شبابي", price: 120, quantity: 1, image: "/img/products/product1.jpg" },
    { id: 2, name: "سماعات رأس", price: 250, quantity: 2, image: "/img/products/product2.jpg" },
  ]);

  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className="cart-container">
        <h1>سلة المشتريات</h1>
        <div className="cart-content">
          <CartItems items={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />
          <CartSummary items={cartItems} />
        </div>
      </div>
      <Footer />
    </>
  );
}
