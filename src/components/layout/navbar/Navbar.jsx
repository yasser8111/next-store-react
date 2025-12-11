import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const items = [
  {
    name: "المستخدم",
    to: "/login",
    links: [
      { label: "الملف الشخصي", to: "/login" },
      { label: "الإعدادات", to: "/login" },
    ],
  },
  {
    name: "السلة",
    to: "/cart",
    links: [
      { label: "في السلة", to: "/cart" },
      { label: "إتمام الطلب", to: "/checkout" },
    ],
  },
  {
    name: "الصفحات",
    to: "/",
    links: [
      { label: "الرئيسية", to: "/" },
      { label: "المنتجات", to: "/products" },
      { label: "من نحن", to: "/" },
      { label: "الشروط", to: "/terms" },
      { label: "السلة", to: "/cart" },
    ],
  },
  {
    name: "الرئيسية",
    to: "/",
  },
];

const NavItem = ({ item, isActive, onHover, cartCount }) => {
  const ref = useRef();

  const handleHover = () => {
    const parentWidth = ref.current.parentElement.offsetWidth;
    const itemLeft = ref.current.offsetLeft;
    const itemWidth = ref.current.offsetWidth;
    const offset = -(parentWidth - (itemLeft + itemWidth));
    onHover(item, offset);
  };

  return (
    <Link
      ref={ref}
      to={item.to}
      className={isActive ? "active nav-item" : "nav-item"}
      onMouseEnter={handleHover}
    >
      {item.name}

      {item.name === "السلة" && cartCount > 0 && (
        <span className="cart-badge">{cartCount}</span>
      )}
    </Link>
  );
};

export default function Navbar({ cartCount }) {
  const [translateX, setTranslateX] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  const handleHover = (item, x) => {
    setActiveItem(item);
    setTranslateX(x);
  };

  return (
    <div
      className="navbar"
      onMouseEnter={() => setIsHidden(false)}
      onMouseLeave={() => setIsHidden(true)}
    >
      <div className="menu">
        {items.map((item) => (
          <NavItem
            key={item.name}
            item={item}
            cartCount={cartCount}
            isActive={item.name === activeItem?.name && !isHidden}
            onHover={handleHover}
          />
        ))}
      </div>

      <div
        className={`dropdown ${
          activeItem?.links?.length > 0 && !isHidden ? "visible" : ""
        }`}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {activeItem?.links?.map((link) => (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
