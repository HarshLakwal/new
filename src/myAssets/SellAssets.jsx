import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../Marketplace/marketplace.module.css";
import style2 from "./assets.module.css";
import axios from "axios";
import { serverURL, token } from "../../serverURL";
import Card from "../components/Sheared/Card/Card";
import Button from "../components/Sheared/Button/Button";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Dropdowns/Login";
import { addForSell, removeFromSell } from "../redux/sellSlice.js";
import UserNavbar from "../components/Sheared/Navbar/UserNavbar";
import { toast } from "react-hot-toast";
const SellAssets = () => {
  const [data, setData] = useState([]);
  const [coin, setCoin] = useState("");
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards to show at once
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sellItem = useSelector((state) => state.sell);
  const handleSelect = (item, index) => {
    const updatedData = data.map((item, i) =>
      i === index
        ? { ...item, selected: !item.selected }
        : { ...item, selected: false }
    );
    if (item.selected) {
      dispatch(removeFromSell(item.id));
    } else {
      dispatch(addForSell(item));
    }
    setData(updatedData);
  };

  const getMyAssets = async () => {
    const res = await axios.get(`${serverURL}/api/user/get-my-assets`, config);
    setData(res.data.result);
  };
  useEffect(() => {
    getMyAssets();
  }, []);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let totalPrice = sellItem.reduce((sum, item) => sum + item.vehiclePrice, 0);
  let percentage = (totalPrice * 4) / 100;
  let vehicleImg;
  let vehiclePrice;
  let vehicleName;
  if (sellItem.length != 0) {
    vehicleImg = sellItem[0].vehicleImg;
    vehiclePrice = coin;
    vehicleName = sellItem[0].vehicleName;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${serverURL}/api/user/sell-assets`,
      { vehicleImg, vehiclePrice, vehicleName, coin: coin },config
    );
    if (res.data) {
      setCoin("");
      totalPrice = 0;
      percentage = 0;
      return toast.success(res.data.message);
    }
    toast.error(res.data.message);
  };
  return (
    <>
      <UserNavbar heading={"sell assets"} />
      <div className={style2.card_slider_container}>
        <h1 className={style2.heading}>Select your assets</h1>
        <Slider {...settings}>
          {data &&
            data.map((data, index) => (
              <>
                <div
                  key={index}
                  style={{
                    width: "90%",
                  }}
                >
                  <Card
                    key={index}
                    img={data.vehicleImg}
                    name={data.vehicleName}
                    price={data.vehiclePrice}
                  ></Card>
                  <button
                    style={{
                      background: data.selected
                        ? "linear-gradient(90deg, #FFE500 0%, #FFA800 27.07%, #80FF00 46.22%, #00D1FF 72.19%, #FF2E00 100%)"
                        : "white",
                      borderRadius: "7px",
                    }}
                    onClick={() => handleSelect(data, index)}
                    className={style2.sell_select_btn}
                  >
                    Select
                  </button>
                </div>
              </>
            ))}
        </Slider>
        <hr />
        <div className={style2.sell_details_wrapper}>
          <div className={style2.price_wrapper}>
            <h1>
              price
              {sellItem.length !== 0 ? (
                <span>{totalPrice}</span>
              ) : (
                <span>0</span>
              )}
            </h1>
            <h1>
              Proccessing fees
              <span>4</span>
              <span>%</span> 
              (
              <span style={{fontSize:'12px'}}>{percentage}</span>
              <span style={{fontSize:'12px'}}>coin</span>)
            </h1>
            {/* <div className={style2.sell_wrapper_btn}> */}
              
            {/* </div> */}
          </div>
          {/* <div className={style2.sell_wrapper}>
            <h1>total coins</h1>
            <div className={style2.sell_wrapper_btn}>
              <span>{percentage}</span>
              <span>coin</span>
            </div>
          </div> */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: "20px",
            }}
          >
            <div className={style2.coin_input_wrapper}>
              <label htmlFor="">Enter coin</label>
              <input
                type="number"
                placeholder="Enter coin"
                name="coin"
                value={coin}
                onChange={(e) => setCoin(e.target.value)}
                required
              />
            </div>
            <div className={style2.sell_btn_wrapper}>
              <button type="submit">Sell now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SellAssets;
