import "./checkout.css";

export default function CheckoutForm({
  userName, setUserName,
  userPhone, setUserPhone,
  userAddress, setUserAddress,
  area, setArea,
  otherLocation, setOtherLocation,
  details, setDetails,
  handleSubmit,
  submitting
}) {
  return (
    <form className="checkout-form" onSubmit={handleSubmit} noValidate>
      {/* Full name */}
      <div className="line">
        <label htmlFor="name">الاسم الربعاي كامل</label>
        <input
          id="name"
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required
          placeholder="أحمد علي ..."
        />
      </div>

      {/* Phone */}
      <div className="line">
        <label htmlFor="phone">رقم الهاتف</label>
        <input
          id="phone"
          type="tel"
          value={userPhone}
          onChange={e => setUserPhone(e.target.value)}
          required
          placeholder="7xxxxxxxx"
          // simple pattern: allow digits, spaces, +, -
          pattern="^[0-9+\-\s]{6,20}$"
        />
      </div>

      {/* Address */}
      <div className="line">
        <label htmlFor="address">العنوان</label>
        <input
          id="address"
          type="text"
          value={userAddress}
          onChange={e => setUserAddress(e.target.value)}
          required
          placeholder="شارع 7، حي السلام، المكلا ..."
        />
      </div>

      {/* Area select + other input */}
      <div className="line">
        <label htmlFor="area">المنطقة</label>
        <select id="area" value={area} onChange={e => setArea(e.target.value)} required>
          <option value="">اختر المنطقة</option>
          <option value="المكلا">المكلا</option>
          <option value="سيئون">سيئون</option>
          <option value="تعز">تعز</option>
          <option value="آخر">آخر</option>
        </select>

        {area === "آخر" && (
          <input
            id="otherLocation"
            type="text"
            value={otherLocation}
            onChange={e => setOtherLocation(e.target.value)}
            required
            placeholder="اكتب المنطقة بالكامل، مديرية ..."
          />
        )}
      </div>

      {/* Additional details */}
      <div className="line textarea-line">
        <label htmlFor="details">تفاصيل إضافية</label>
        <textarea
          id="details"
          value={details}
          onChange={e => setDetails(e.target.value)}
          placeholder="باب البيت أزرق، بجانب المدرسة، الطابق الثاني ..."
        />
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="checkout-btn"
          disabled={submitting}
        >
          {submitting ? "جارٍ الإرسال..." : "تأكيد الطلب"}
        </button>
      </div>
    </form>
  );
}
