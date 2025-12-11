import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./product-card.css";
import { fixImageUrl } from "../../../utils/img";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const goToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  const isValidProduct =
    product &&
    product.name &&
    product.mainImage &&
    product.price !== undefined &&
    product.currency &&
    !imageError;

  if (!isValidProduct) {
    return (
      <div className="product-card error-card">
        <h3>خطأ في بيانات المنتج</h3>
      </div>
    );
  }

  const unavailable = !product.isAvailable;

  return (
    <div className="product-card" onClick={goToDetail}>
      <div className="image-wrapper">
        <img
          src={fixImageUrl(product.mainImage)}
          alt={product.name}
          onError={() => setImageError(true)}
        />
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>

        <div className="product-price">
          {unavailable ? (
            <span className="unavailable-text">غير متوفر</span>
          ) : (
            <span>
              {product.price} {product.currency}
            </span>
          )}
        </div>

        <button
          className="product-btn"
          onClick={(e) => {
            e.stopPropagation();
            goToDetail(); 
          }}
        >
          {unavailable ? "عرض" : "إضافة إلى السلة"}
        </button>
      </div>
    </div>
  );
}
