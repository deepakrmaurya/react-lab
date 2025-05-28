import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [statusButton, setStatusButton] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-300">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-10 ">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">🍅Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cartpage">🛒Cart ({cartItems.length} items)</Link>
          </li>

          <li className="px-4">
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
