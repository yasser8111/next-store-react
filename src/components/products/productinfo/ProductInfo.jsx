import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./info.css";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");

  const availableSizes = Object.keys(product.sizes || {}).filter(
    (size) => product.sizes[size] > 0
  );

  const getCart = () => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  };

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = () => {
    const cart = getCart();
    const size = selectedSize || availableSizes[0];

    const existingIndex = cart.findIndex(
      (item) => item.id === product.id && item.selectedSize === size
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        currency: product.currency,
        mainImage: product.mainImage,
        hoverImage: product.hoverImage,
        selectedSize: size,
        quantity: 1
      });
    }

    saveCart(cart);
  };

  const buyNow = () => {
    addToCart();
    navigate("/cart");
  };

  return (
    <div className="product-info-detiels">
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.description}</p>

      {availableSizes.length > 0 && (
        <div className="product-sizes">
          <h3>المقاسات المتوفرة:</h3>
          <select
            className="sizes-select"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {availableSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="product-prices">
        <span className="price">
          {product.price} {product.currency}
        </span>
        {product.oldPrice && (
          <span className="old-price">
            {product.oldPrice} {product.currency}
          </span>
        )}
      </div>

      <div className="product-actions">
        <button className="btn primary" onClick={addToCart}>
          أضف إلى السلة
        </button>

        <button className="btn outline" onClick={buyNow}>
          شراء الآن
        </button>

        {product.whatsapp && (
          <a
            href={`https://wa.me/967${product.whatsapp}?text=اريد طلب ${product.name}`}
            className="btn whatsapp"
          >
            تواصل واتساب
          </a>
        )}
      </div>
    </div>
  );
}
