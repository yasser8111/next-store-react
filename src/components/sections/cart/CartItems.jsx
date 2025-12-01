import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";
import { fixImageUrl } from "../../../utils/img";

export default function CartItems({ items, updateQuantity, removeItem }) {
  const navigate = useNavigate();

  if (items.length === 0) {
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

  const changeQty = (id, qty) => updateQuantity(id, Math.max(1, qty));

  return (
    <div className="cart-items">
      {items.map((item) => (
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
              <button onClick={() => changeQty(item.id, item.quantity - 1)}>
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => changeQty(item.id, Number(e.target.value))}
              />
              <button onClick={() => changeQty(item.id, item.quantity + 1)}>
                +
              </button>
          <button
            className="remove"
            onClick={() => {
              if (window.confirm("هل تريد حذف هذا المنتج؟"))
                removeItem(item.id, item.selectedSize);
            }}
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
