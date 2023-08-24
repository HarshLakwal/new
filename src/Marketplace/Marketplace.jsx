import React, { useEffect, useState } from "react";
import style from "./marketplace.module.css";
import Card from "../components/Sheared/Card/Card";
import Button from "../components/Sheared/Button/Button";
import { serverURL, token } from "../../serverURL";
import axios from "axios";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice.js";
import UserNavbar from "../components/Sheared/Navbar/UserNavbar";
import FormGamers from "./FormGamers";

const Marketplace = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [open, setOpen] = useState(true);
  const [toggle, setToggle] = useState(false);
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
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getData = async () => {
    const data = await axios.get(`${serverURL}/api/admin/get-vehicles`);
    setData(data.data.result);
  };
  const getCart = async () => {
    const res = await axios.get(`${serverURL}/api/user/get-carts`, config);
    setCartData(res.data.result.cartData);
  };
  useEffect(() => {
    getData();
    getCart();
  }, []);

  const handleCart = async (data) => {
    dispatch(add(data));
    const res = await axios.post(
      `${serverURL}/api/user/add-to-cart`,
      data,
      config
    );
  };
  return (
    <>
      <UserNavbar heading={"game assets"} />
      <div className={style.marketplace_container} id="marketplace">
        <div className={style.marketplace_wrapper}>
          {/* left container */}
          <div className={`${style.left_container}`}>
            <div className={style.vehicle_wrapper}>
              <div className={style.vehicle_heading_wrapper}>
                <h1 className={style.vehicle_heading}>Vehicle Type</h1>
              </div>
              <div className={style.vehicle_categories}>
                <div className={style.vehicle_content}>
                  <input type="checkbox" class="custom-checkbox" />
                  <span>Category Name</span>
                </div>
                <div className={style.vehicle_content}>
                  <input type="checkbox" class="custom-checkbox" />
                  <span>Category Name</span>
                </div>
                <div className={style.vehicle_content}>
                  <input type="checkbox" class="custom-checkbox" />
                  <span>Category Name</span>
                </div>
                <div className={style.vehicle_content}>
                  <input type="checkbox" class="custom-checkbox" />
                  <span>Category Name</span>
                </div>
                <div className={style.vehicle_content}>
                  <input type="checkbox" class="custom-checkbox" />
                  <span>Category Name</span>
                </div>
              </div>
            </div>
          </div>

          {/* right container */}
          <div className={style.right_container}>
            <div className={style.right_container_wrapper}>
              <div className={style.data_nav}>
                <h1 onClick={() => setToggle(false)}>Dirt Rebel</h1>
                <h1 onClick={() => setToggle(true)}>Form Gamers</h1>
              </div>
              {toggle ? (
                <FormGamers />
              ) : (
                <div className={style.data_wrapper}>
                  {data.map((data, index) => (
                    <>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          marginBottom: "30px",
                        }}
                      >
                        <Card
                          key={index}
                          img={data.vehicleImg}
                          name={data.vehicleName}
                          price={data.vehiclePrice}
                        ></Card>
                        <Button
                          onAction={() => handleCart(data)}
                          title={"Add to cart"}
                        />
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Marketplace;
