import React, { useEffect, useState } from "react";
import style from "./buyCoin.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import Login from "../Dropdowns/Login";
import BuyCoinCard from "../components/Sheared/Card/BuyCoinCard";
import BuyCoin_btn from "../components/Sheared/Button/BuyCoin_btn";
import { serverURL, token } from "../../serverURL";
import axios from "axios";
import UserNavbar from "../components/Sheared/Navbar/UserNavbar";
import { toast } from "react-hot-toast";
const BuyCoin = () => {
  const [coin, setCoin] = useState("");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${serverURL}/api/user/purchase-coin`,
        { coin: coin },
        config
      );
      if(res){
        toast.success(res.data.message);
        setCoin("")
        return res.data;
      }
      toast.error(res.data.message)
     
    } catch (err) {
      return err;
    }
  };

  return (
    <div className={style.buycoin_bg}>
      <UserNavbar heading={"buy coin"}/>
      <div className={style.buy_coin_container}>
        <div className={style.buy_coin_wrapper}>
          <div className={style.buy_coin_card_wrapper}>
            <BuyCoinCard price={500}></BuyCoinCard>
            <BuyCoin_btn
              // onAction={() => handleCart(data)}
              title={"Buy"}
            />
          </div>
          <div className={style.buy_coin_card_wrapper}>
            <BuyCoinCard price={1000}></BuyCoinCard>
            <BuyCoin_btn
              // onAction={() => handleCart(data)}
              title={"Buy"}
            />
          </div>
          <div className={style.buy_coin_card_wrapper}>
            <BuyCoinCard price={2000}></BuyCoinCard>
            <BuyCoin_btn
              // onAction={() => handleCart(data)}
              title={"Buy"}
            />
          </div>
        </div>
      </div>
      <div className={style.buy_coin_input_container}>
        <div className={style.buy_coin_input_wrapper}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter coin</label>
            <input
              type="number"
              placeholder="1coin = 1INR"
              name="coin"
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              required
            />

            <button type="submit">Buy now</button>
          </form>
        </div>
        <input id={style.INR_total} type="number" readOnly value={coin} />
      </div>
    </div>
  );
};

export default BuyCoin;
