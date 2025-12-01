import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const mobileItems = [
  { name: "الرئيسية", to: "/" },
  { name: "المنتجات", to: "/products" },
  { name: "من نحن", to: "/" },
  { name: "الشروط", to: "/terms" },
  { name: "السلة", to: "/cart" },
  { name: "الملف الشخصي", to: "/login" },
  { name: "الإعدادات", to: "/login" },
];

export default function MobileNavbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="mobile-navbar">
      <div className="mobile-header">
        <button
          ref={btnRef}
          className={`menu-btn ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />

          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>

      <div ref={menuRef} className={`mobile-menu ${isOpen ? "show" : ""}`}>
        {mobileItems.map((item) => (
          <Link key={item.name} to={item.to} onClick={() => setIsOpen(false)}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
