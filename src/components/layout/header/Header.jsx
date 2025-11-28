import { useState, useEffect } from "react";
import "./header.css";
import Logo from "../../common/logo/Logo";
import Navbar from "../navbar/Navbar";
import MobileNavbar from "../navbar/MobileNavbar";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-cont container">
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <Logo />
      </div>
    </header>
  );
}
