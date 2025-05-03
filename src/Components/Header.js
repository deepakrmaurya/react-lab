import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [statusButton, setStatusButton] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>🛒Cart</li>
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
