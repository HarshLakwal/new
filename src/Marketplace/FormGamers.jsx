import React, { useEffect, useState } from "react";
import Card from "../components/Sheared/Card/Card";
import Button from "../components/Sheared/Button/Button";
import axios from "axios";
import { serverURL, token } from "../../serverURL";
import style from "./marketplace.module.css";

const FormGamers = () => {
  const [data, setData] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getData = async () => {
    const res = await axios.get(`${serverURL}/api/user/get-all-assets`, config);
    setData(res.data.result);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className={style.data_wrapper}>
      {data.map((dataItem, dataIndex) => (
  dataItem.assets.map((item, itemIndex) => (
    <div
      key={itemIndex}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "30px",
      }}
    >
      <Card
        img={item.vehicleImg}
        name={item.vehicleName}
        price={item.vehiclePrice}
      />
      <Button
        onAction={() => handleCart(dataItem)}
        title={"Add to cart"}
      />
    </div>
  ))
))}

      </div>
    </>
  );
};

export default FormGamers;
