// CartSummary.jsx
import "./cart.css";

export default function CartSummary({ items }) {
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const currency = items.length > 0 ? items[0].currency : "YER";

  return (
    <div className="cart-summary">
      <h2>ملخص السلة</h2>
      <div className="summary-details">
        <p>
          عدد المنتجات: <span>{items.length}</span>
        </p>
        <p>
          الإجمالي الكلي: <span>{totalAmount} {currency}</span>
        </p>
      </div>
      <button className="checkout-btn">إتمام الطلب</button>
    </div>
  );
}
