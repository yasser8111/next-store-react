import { useNavigate } from "react-router-dom";
import "./product-card.css";
import { fixImageUrl } from "../../../utils/img";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={goToDetail}>
      <div className="image-wrapper">
        <img src={fixImageUrl(product.mainImage)} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-price">
          <span>{product.price} ريال</span>
        </div>
        <button className="product-btn" onClick={goToDetail}>
          إضافة إلى السلة
        </button>
      </div>
    </div>
  );
}
