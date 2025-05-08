import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [statusButton, setStatusButton] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cartpage">🛒Cart</Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                statusButton === "Login"
                  ? setStatusButton("Logout")
                  : setStatusButton("Login");
              }}
            >
              {statusButton}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
