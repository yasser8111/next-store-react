import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; 

const mobileItems = [
  { name: "الرئيسية", to: "/" },
  { name: "المنتجات", to: "/products" },
  { name: "من نحن", to: "/about" },
  { name: "الشروط", to: "/terms" },
  { name: "السلة", to: "/cart" },
  { name: "الملف الشخصي", to: "/profile" },
  { name: "الإعدادات", to: "/settings" },
];

export default function MobileNavbar() {
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="mobile-navbar">
      <div className="mobile-header">
        <button
          ref={btnRef}
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </button>

        <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </Link>
      </div>

      <div
        ref={menuRef}
        className={`mobile-menu ${isOpen ? "show" : ""}`}
      >
        {mobileItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
