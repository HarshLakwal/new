import React, { useEffect, useState } from "react";
import UserNavbar from "../components/Sheared/Navbar/UserNavbar";
import { serverURL, token } from "../../serverURL";
import { useDispatch } from "react-redux";
import axios from "axios";
import style from "../Marketplace/marketplace.module.css";
import Footer from "../Footer/Footer";
import FormGamers from "../Marketplace/FormGamers";
import Card from "../components/Sheared/Card/Card";
import Button from "../components/Sheared/Button/Button";

const MySellAssets = () => {
  const [data, setData] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getData = async () => {
    const res = await axios.get(
      `${serverURL}/api/user/get-sell-assets`,
      config
    );
    console.log(res.data);
    setData(res.data.result.assets);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <UserNavbar heading={"My sell assets"} />
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
                      {/* <Button
                        onAction={() => handleCart(data)}
                        title={"Add to cart"}
                      /> */}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MySellAssets;
