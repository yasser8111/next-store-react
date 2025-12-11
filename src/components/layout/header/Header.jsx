import { useCart } from "../../../context/CartContext";
import { useState, useEffect } from "react";
import "./header.css";
import Logo from "../../common/logo/Logo";
import Navbar from "../navbar/Navbar";
import MobileNavbar from "../navbar/MobileNavbar";

export default function Header() {
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-cont container">
        {isMobile ? (
          <MobileNavbar cartCount={cartCount} />
        ) : (
          <Navbar cartCount={cartCount} />
        )}
        <Logo />
      </div>
    </header>
  );
}
