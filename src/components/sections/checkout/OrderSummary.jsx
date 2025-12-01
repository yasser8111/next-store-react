import "./checkout.css";
import { fixImageUrl } from "../../../utils/img";

export default function OrderSummary({ cartItems = [] }) {
  // currency labels map
  const currencyLabel = (c) => {
    if (!c) return "ريال";
    const map = { YER: "ريال", SAR: "ر.س", USD: "$" };
    return map[c] || c;
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="order-section">
      <div className="order-summary">
        <h2 className="order-title">ملخص الطلب</h2>

        {cartItems.length === 0 ? (
          <p className="empty-note">السلة فارغة</p>
        ) : (
          <div className="order-items">
            {cartItems.map((item) => (
              <div
                key={item.id + (item.selectedSize || "")}
                className="order-item"
              >
                <div className="order-item-left">
                  <img
                    src={
                      fixImageUrl(item.mainImage) ||
                      fixImageUrl(item.image) ||
                      ""
                    }
                    alt={item.name}
                    className="order-thumb"
                  />
                  <div className="order-item-meta">
                    <div className="order-item-name">{item.name}</div>
                    <div className="order-item-size">
                      {item.selectedSize ? `المقاس: ${item.selectedSize}` : ""}
                    </div>
                  </div>
                </div>
                <div className="order-item-right">
                  <div className="order-item-qty">x{item.quantity}</div>
                  <div className="order-item-price">
                    {(item.price * item.quantity).toLocaleString()}{" "}
                    {currencyLabel(item.currency)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="order-total">
          <span>الإجمالي</span>
          <strong>
            {totalAmount.toLocaleString()}{" "}
            {currencyLabel(cartItems[0]?.currency)}
          </strong>
        </div>

        <div className="order-actions">
          {/* The confirm button is in the form — this is just a helper button if you want */}
          <small className="helper-text">
            راجع بياناتك ثم اضغط "تأكيد الطلب".
          </small>
        </div>
      </div>
    </div>
  );
}
