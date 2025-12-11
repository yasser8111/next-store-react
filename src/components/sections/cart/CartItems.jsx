import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";
import { fixImageUrl } from "../../../utils/img";
import { useCart } from "../../../context/CartContext"; // استدعاء context

export default function CartItems() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeItem } = useCart(); // استخدام context

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <h2>السلة فارغة</h2>
          <button className="btn" onClick={() => navigate("/products")}>
            متابعة التسوق
          </button>
        </div>
      </div>
    );
  }

  const changeQty = (id, size, qty) => {
    updateQuantity(id, size, Math.max(1, qty));
    window.dispatchEvent(new Event("cartUpdated")); // لإعلام أي مكون خارج context
  };

  const handleRemove = (id, size, qty) => {
    if (qty > 1) {
      changeQty(id, size, qty - 1);
    } else {
      if (window.confirm("هل تريد حذف هذا المنتج؟")) {
        removeItem(id, size);
        window.dispatchEvent(new Event("cartUpdated"));
      }
    }
  };

  return (
    <div className="cart-items">
      {cart.map((item) => (
        <div key={item.id + item.selectedSize} className="cart-item">
          <img
            className="cart-img"
            src={fixImageUrl(item.mainImage)}
            alt={`${item.name} صورة المنتج`}
          />
          <div className="cart-info">
            <h2>{item.name}</h2>
            <p>المقاس: {item.selectedSize}</p>
            <div className="qty">
              <button onClick={() => changeQty(item.id, item.selectedSize, item.quantity - 1)}>
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => changeQty(item.id, item.selectedSize, Number(e.target.value))}
              />
              <button onClick={() => changeQty(item.id, item.selectedSize, item.quantity + 1)}>
                +
              </button>
              <button
                className="remove"
                onClick={() => handleRemove(item.id, item.selectedSize, item.quantity)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
