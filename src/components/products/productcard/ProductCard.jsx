import { useNavigate } from "react-router-dom";
import "./product-card.css";
import { fixImageUrl } from "../../../utils/img";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  const addToCart = (e) => {
    e.stopPropagation();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        currency: product.currency || "YER",
        image: product.mainImage,
        quantity: 1,
        selectedSize: product.selectedSize || "S",
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    // alert("تمت إضافة المنتج إلى السلة!");
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
        <button className="product-btn" onClick={addToCart}>
          إضافة إلى السلة
        </button>
      </div>
    </div>
  );
}
