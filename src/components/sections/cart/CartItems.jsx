// CartItems.jsx
import "./cart.css";
import { fixImageUrl } from "../../../utils/img";

export default function CartItems({ items, updateQuantity, removeItem }) {
  return (
    <div className="cart-items">
      {items.length === 0 ? (
        <p className="empty-cart">سلتك فارغة</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={fixImageUrl(item.mainImage)} alt={item.name} />
            </div>
            <div className="cart-item-info">
              <h2>{item.name}</h2>
              <p className="cart-item-size">المقاس: {item.selectedSize}</p>
              <p className="cart-item-price">سعر الوحدة: {item.price} ريال</p>
              <div className="quantity-control">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Math.max(1, Number(e.target.value)))
                  }
                />
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p className="cart-item-total">
                الإجمالي: <strong>{item.price * item.quantity} ريال</strong>
              </p>
            </div>
            <button
              className="remove-btn"
              onClick={() => {
                if (window.confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
                  removeItem(item.id);
                }
              }}
            >
              حذف
            </button>
          </div>
        ))
      )}
    </div>
  );
}
