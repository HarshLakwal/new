import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import { Link, Link as RouterLink } from "react-router-dom";
import { Link as ScrollerLink, animateScroll as scroll } from "react-scroll";
import Login from "../../../Dropdowns/Login";
import { useSelector } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import AddToCartCard from "../../../Dropdowns/AddToCartCard";
import CartSVGIcon from "./CartSVGIcon";
import { serverURL, token } from "../../../../serverURL";
import axios from "axios";

const HomeNavbar = () => {
  const [open, setOpen] = useState(true);
  const [cartData, setCartData] = useState([]);
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
  useEffect(() => {
    let openMenu = document.querySelector(".navbar .navOpen");
    let closeMenu = document.querySelector(".navbar .navClose");
    let navigation = document.querySelector(".navbar .menu");

    if (openMenu && closeMenu && navigation) {
      openMenu.addEventListener("click", () => {
        navigation.style.right = "0";
      });

      closeMenu.addEventListener("click", () => {
        navigation.style.right = "-100%";
      });
    }
  }, []);
  const cart = useSelector((state) => state.cart);
  const handleLogout = (e) => {
    localStorage.clear();
    window.location.reload();
  };
  const isLogin = useSelector((state) => state.user.user);
  let name;
  if (isLogin) {
    name = isLogin.name.charAt(0);
  }

  return (
    <>
      <header className="header_area main_header fixed-top">
        <div className="main_header_area animated">
          <div className="container" style={{ maxWidth: "100%" }}>
            <nav>
              <div className="navbar">
                <div className="nav-header">
                  <ScrollerLink
                    className="nav-brand main_header_logo cursor: pointer"
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <img
                      src="https://dirt-backend.onrender.com/uploads/Dirt-logo2.png"
                      alt="dirt-degens-logo"
                      className="js-tilt"
                    />
                  </ScrollerLink>
                </div>
                <ul className="menu">
                  <i className="fa-solid fa-xmark navClose"></i>
                  <li className="nav-item">
                    <ScrollerLink
                      activeClass="active"
                      to="/"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Home
                    </ScrollerLink>
                  </li>
                  <li className="nav-item">
                    <ScrollerLink
                      activeClass="active"
                      to="/about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      About
                    </ScrollerLink>
                  </li>
                  <li className="nav-item">
                    <ScrollerLink
                      activeClass="active"
                      to="roadmap"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Roadmap
                    </ScrollerLink>
                  </li>
                  <li className="nav-item">
                    <ScrollerLink
                      activeClass="active"
                      to="tokenomics"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Economics
                    </ScrollerLink>
                  </li>
                  <li className="nav-item">
                    <ScrollerLink
                      activeClass="active"
                      to="team"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Crew
                    </ScrollerLink>
                  </li>
                  <li className="nav-item">
                    <ScrollerLink
                      activeClass="active"
                      to="communities"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Communities
                    </ScrollerLink>
                  </li>
                  <li className="nav-item">
                    <Link to="/marketplace">MarketPlace</Link>
                  </li>
                  {/* <li style={{gap:'15px'}}>
                    {isLogin ? (
                      <>
                        <div class="dropdown">
                          <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{
                              textTransform: "uppercase",
                              backgroundColor: "#cc8a45",
                              border: "none",
                            }}
                          >
                            {name}
                          </button>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <Link to="/buy-coin">
                              <a
                                class="dropdown-item"
                                href="#"
                                style={{
                                  color: "#000",
                                  fontFamily: "Poppins",
                                  fontWeight: "400",
                                  marginBottom: "5px",
                                  textTransform: "uppercase",
                                }}
                              >
                                Buy Coin
                              </a>
                            </Link>
                            <Link to="/my-assests">
                              <a
                                class="dropdown-item"
                                href="#"
                                style={{
                                  color: "#000",
                                  fontFamily: "Poppins",
                                  fontWeight: "400",
                                  marginBottom: "5px",
                                }}
                              >
                                My Assests
                              </a>
                            </Link>
                            <button
                              className="nav_logout_btn"
                              onClick={handleLogout}
                            >
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
                    className={style.navbar_cart}
                    onClick={()=> setOpen(!open)}
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
                        <span className="dolor_sign"></span>Login
                      </a>
                    )}
                  </li> */}
                  <li style={{ display: "flex", gap: "4vh" }}>
                    {isLogin ? (
                      <>
                        <div
                          class="dropdown"
                          style={{
                            backgroundColor: "transparent",
                            marginBottom: "15px",
                          }}
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
                            <Link
                              to="/buy-coin"
                              className="custom-dropdown-item"
                            >
                              <a className="dropdown-item ">Buy Coin</a>
                            </Link>
                            <Link
                              to="/my-assests"
                              className="custom-dropdown-item"
                            >
                              <a
                                className="dropdown-item "
                                style={{ marginTop: "10px" }}
                              >
                                My Assests
                              </a>
                            </Link>
                            <Link
                              to="/my-sell-assets"
                              className="custom-dropdown-item"
                            >
                              <a
                                className="dropdown-item "
                                style={{ marginTop: "10px" }}
                              >
                                My sell Assests
                              </a>
                            </Link>
                            <Link
                              to="/withdraw"
                              className="custom-dropdown-item"
                            >
                              <a
                                className="dropdown-item "
                                style={{ marginTop: "10px" }}
                              >
                                Withdraw money
                              </a>
                            </Link>
                            <button
                              className="nav_logout_btn"
                              onClick={handleLogout}
                            >
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

                <i className="fa-solid fa-bars navOpen"></i>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Login />
      <AddToCartCard open={open} />
    </>
  );
};

export default HomeNavbar;
