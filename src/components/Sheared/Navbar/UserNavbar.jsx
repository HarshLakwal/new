import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import CartSVGIcon from "./CartSVGIcon";
import AddToCartCard from "../../../Dropdowns/AddToCartCard";
import Login from "../../../Dropdowns/Login";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";
import { serverURL, token } from "../../../../serverURL";
import { useSelector } from "react-redux";

const UserNavbar = ({ heading }) => {
  const [cartData, setCartData] = useState([]);
  const [open, setOpen] = useState(true);
  const isLogin = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);

  //handle logout
  const handleLogout = (e) => {
    localStorage.clear();
    window.location.reload();
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getCart = async () => {
    const res = await axios.get(`${serverURL}/api/user/get-carts`, config);
    setCartData(res.data.result.cartData);
  };
  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <header>
        <div className="navbar">
          <div className="nav-header">
            <Link
              className="nav-brand main_header_logo cursor: pointer"
              activeClass="active"
              to="/"
            >
              <img
                src="https://dirt-backend.onrender.com/uploads/Dirt-logo2.png"
                alt="dirt-degens-logo"
                className={`js-tilt`}
              />
            </Link>
          </div>
          <h1 className={style.heading}>{heading}</h1>
          <ul>
            <li style={{ display: "flex", gap: "4vh" }}>
              {isLogin ? (
                <>
                  <div
                    class="dropdown"
                    style={{ backgroundColor: "transparent", marginBottom: "15px" }}
                  >
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{
                        textTransform: "uppercase",
                        borderImageSource:
                          "linear-gradient(90deg, #FFE500 0%, #FFA800 27.07%, #80FF00 46.22%, #00D1FF 72.19%, #FF2E00 100%)",
                        background: "transparent",
                        borderWidth: "2px",
                        borderImageSlice: "1",
                      }}
                    >
                      {isLogin.name}
                    </button>
                    <div
                      style={{ backgroundColor: "#372a1f" }}
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link to="/buy-coin" className="custom-dropdown-item">
                        <a className="dropdown-item ">
                          Buy Coin
                        </a>
                      </Link>
                      <Link to="/my-assests" className="custom-dropdown-item">
                        <a className="dropdown-item " style={{marginTop:'10px'}}>
                          My Assests
                        </a>
                      </Link>
                      <Link to="/my-sell-assets" className="custom-dropdown-item">
                        <a className="dropdown-item " style={{marginTop:'10px'}}>
                          My sell Assests
                        </a>
                      </Link>
                      <Link to="/withdraw" className="custom-dropdown-item">
                        <a className="dropdown-item " style={{marginTop:'10px'}}>
                          Withdraw money
                        </a>
                      </Link>
                      <button className="nav_logout_btn" onClick={handleLogout}>
                        Logout
                        <HiOutlineLogout
                          color="#fff"
                          size={20}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    data-toggle="modal"
                    data-target="#addToCartModel"
                    className={style.nav_cart}
                    onClick={() => setOpen(!open)}
                  >
                    <CartSVGIcon />

                    {cartData &&
                      (cart.length == 0
                        ? cartData.length
                        : cartData.length + cart.length)}
                  </div>
                </>
              ) : (
                <a data-toggle="modal" data-target="#exampleModal">
                  <span className={style.login_txt}>Login</span>
                </a>
              )}
            </li>
          </ul>
        </div>
      </header>
      <Login />
      <AddToCartCard open={open} />
    </>
  );
};

export default UserNavbar;
