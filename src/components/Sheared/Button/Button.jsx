import React from "react";
import style from "./button.module.css";

const Button = ({ title, onAction, width }) => {    
  return <div onClick={onAction} style={{width:`${width}`}} className={style.button_container}>
    {title}
  </div>;
};

export default Button;
