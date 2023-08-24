import React from "react";
import style from "./button.module.css";
const BuyCoin_btn = ({ title, onAction }) => {
  return (
    <div onClick={onAction} className={style.button_container}>
      {title}
    </div>
  );
};

export default BuyCoin_btn;
