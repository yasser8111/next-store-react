import { useCart } from "../../../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./info.css";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();  // استخدم الـ Context

  const [selectedSize, setSelectedSize] = useState("");

  const unavailable = !product.isAvailable;

  const availableSizes = Object.keys(product.sizes || {}).filter(
    (size) => product.sizes[size] > 0
  );

  const handleAddToCart = () => {
    if (unavailable) return;

    const size = selectedSize || availableSizes[0];

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      mainImage: product.mainImage,
      hoverImage: product.hoverImage,
      selectedSize: size,
      quantity: 1
    });
  };

  const buyNow = () => {
    handleAddToCart();
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
            disabled={unavailable}
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
        {unavailable ? (
          <span className="price unavailable-text">غير متوفر</span>
        ) : (
          <span className="price">
            {product.price} {product.currency}
          </span>
        )}

        {product.oldPrice && !unavailable && (
          <span className="old-price">
            {product.oldPrice} {product.currency}
          </span>
        )}
      </div>

      <div className="product-actions">
        <button className="btn primary" onClick={handleAddToCart} disabled={unavailable}>
          أضف إلى السلة
        </button>
        <button className="btn outline" onClick={buyNow} disabled={unavailable}>
          شراء الآن
        </button>
      </div>
    </div>
  );
}
