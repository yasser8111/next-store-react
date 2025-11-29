import { useState, useEffect } from "react";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import CartItems from "../components/sections/cart/CartItems";
import CartSummary from "../components/sections/cart/CartSummary";
import Loader from "../components/common/loader/Loader";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    setLoading(false);
  }, []);

  const updateQuantity = (id, qty) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      );
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <div className="cart-container">
        <h1>سلة المشتريات</h1>
        <div className="cart-content">
          <CartItems
            items={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
          <CartSummary items={cartItems} />
        </div>
      </div>
      <Footer />
    </>
  );
}
