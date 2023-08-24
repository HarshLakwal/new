import React, { useEffect, useState } from "react";
import style from "../Marketplace/marketplace.module.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import Login from "../Dropdowns/Login";
import BuyCoinCard from "../components/Sheared/Card/BuyCoinCard";
import BuyCoin_btn from "../components/Sheared/Button/BuyCoin_btn";
import { serverURL, token } from "../../serverURL";
import axios from "axios";
import Button from "../components/Sheared/Button/Button";
import Card from "../components/Sheared/Card/Card";
import UserNavbar from "../components/Sheared/Navbar/UserNavbar";
const MyAssets = () => {
  const [data, setData] = useState([]);
  const isLogin = useSelector((state) => state.user.user);
  const handleLogout = (e) => {
    localStorage.clear();
    window.location.reload();
  };
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getMyAssets = async () => {
    const res = await axios.get(`${serverURL}/api/user/get-my-assets`, config);
    setData(res.data.result);
  };
  console.log(data);
  useEffect(() => {
    getMyAssets();
  }, []);

  return (
    <>
      <UserNavbar heading={"my assets"}/>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Link to="/sell_assets" style={{ width: "15%" }}>
                  <Button title={"Sell assets"} />
                </Link>
              </div>

              <div className={style.data_wrapper}>
                {data &&
                  data.map((data, index) => (
                    <>
                      <div
                        key={index}
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
                        {/* <Button key={index} title={"veiw"} /> */}
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAssets;
