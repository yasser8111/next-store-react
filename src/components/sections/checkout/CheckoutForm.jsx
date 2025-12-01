export default function CheckoutForm({
  userName, setUserName,
  userPhone, setUserPhone,
  userAddress, setUserAddress,
  area, setArea,
  otherLocation, setOtherLocation,
  details, setDetails,
  handleSubmit
}) {
  return (
    <form className="checkout-form" onSubmit={handleSubmit}>

      <div className="line">
        <label>الاسم الكامل</label>
        <input
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required
        />
      </div>

      <div className="line">
        <label>رقم الهاتف</label>
        <input
          type="tel"
          value={userPhone}
          onChange={e => setUserPhone(e.target.value)}
          required
        />
      </div>

      <div className="line">
        <label>العنوان</label>
        <input
          type="text"
          value={userAddress}
          onChange={e => setUserAddress(e.target.value)}
          required
        />
      </div>

      <div className="line">
        <label>المنطقة</label>
        <select value={area} onChange={e => setArea(e.target.value)} required>
          <option value="">اختر المنطقة</option>
          <option value="المكلا">المكلا</option>
          <option value="سيئون">سيئون</option>
          <option value="تعز">تعز</option>
          <option value="آخر">آخر</option>
        </select>
        {area === "آخر" && (
          <input
            type="text"
            value={otherLocation}
            onChange={e => setOtherLocation(e.target.value)}
            required
          />
        )}
      </div>

      <div className="line textarea-line">
        <label>تفاصيل إضافية</label>
        <textarea
          value={details}
          onChange={e => setDetails(e.target.value)}
        />
      </div>

      <button type="submit" className="checkout-btn">
        تأكيد الطلب
      </button>
    </form>
  );
}
