import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const index = prev.findIndex(
        (i) => i.id === item.id && i.selectedSize === item.selectedSize
      );
      if (index !== -1) {
        const newCart = [...prev];
        newCart[index].quantity += item.quantity;
        return newCart;
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (id, size, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const removeItem = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size))
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
