import { Link } from "react-router-dom";
import { STORE_NAME } from "../../../utils/constants";
import "./logo.css";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      {STORE_NAME}
    </Link>
  );
}
