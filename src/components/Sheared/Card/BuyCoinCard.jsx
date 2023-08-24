import React from "react";
import style from "./card.module.css";
const BuyCoinCard = ({ price, children }) => {
  return (
    <>
      <div className={style.buycoin_card_container}>
        <div className={style.buycoin_card_wrapper}>
          <img src="https://dirt-backend.onrender.com/uploads/coin.png" alt="coin" />
          <div className={style.buycoin_card_price_wrapper}>
            <h1>{price}</h1>
            <span>coin</span>
          </div>
        </div>
        <div className={style.buycoin_card_details}>
            <h1>1000</h1>
            <span>INR</span>
        </div>
        {children}
      </div>
    </>
  );
};

export default BuyCoinCard;
