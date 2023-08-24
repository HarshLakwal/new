import React, { useState } from "react";
import style from "./withdraw.module.css";
import UserNavbar from "../components/Sheared/Navbar/UserNavbar.jsx";
import {useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { serverURL, token } from "../../serverURL";
import axios from "axios";
import { isLogin } from "../redux/authSlice";
const Withdraw = () => {
  const user = useSelector((state) => state.user);
  const [coin, setCoin] = useState("");
  const dispatch = useDispatch()
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${serverURL}/api/user/withdraw`,
        { coin: coin },
        config
      );
      if (res) {
        toast.success(res.data.message);
        dispatch(isLogin(token))
        setCoin("");
        return res.data;
      }
      toast.error(res.data.message);
    } catch (err) {
      return err;
    }
  };
  return (
    <>
      <UserNavbar heading={"Withdraw"} />
      <div className={style.withdraw_container}>
        <div className={style.withdraw_wrapper}>
          <div className={style.heading_wrapper}>
            <h1>coin</h1>
            <p>availeble balance {user.user.myCoin}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={style.input_container}>
              <div className={style.coin_wrapper}>
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
              <div className={style.value_wrapper}>
                <label htmlFor="">Total money</label>
                <input type="number" value={coin} readOnly />
              </div>
            </div>
            <div className={style.withdraw_btn}>
              <button type="submit">withdraw</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
