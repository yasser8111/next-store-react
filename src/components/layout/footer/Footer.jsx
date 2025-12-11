import "./footer.css";
import Logo from "../../common/logo/Logo";
import {
  STORE_DESCRIPTION,
  STORE_EMAIL,
  STORE_PHONE,
  STORE_ADDRESS,
} from "../../../utils/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram, 
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Logo + About */}
        <div className="footer-section">
          <Logo />
          <p className="footer-text">{STORE_DESCRIPTION}</p>

          <div className="footer-social">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>

        {/* Pages */}
        <div className="footer-section">
          <h3 className="footer-title">الصفحات</h3>
          <ul className="footer-links">
            <li>الرئيسية</li>
            <li>المنتجات</li>
            <li>من نحن</li>
            <li>الشروط</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3 className="footer-title">الدعم</h3>
          <ul className="footer-links">
            <li>الأسئلة الشائعة</li>
            <li>سياسة الخصوصية</li>
            <li>الإرجاع والاستبدال</li>
            <li>تواصل معنا</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-title">التواصل</h3>
          <ul className="footer-contact">
            <li>البريد: {STORE_EMAIL}</li>
            <li>الهاتف: {STORE_PHONE}</li>
            <li>العنوان: {STORE_ADDRESS}</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
