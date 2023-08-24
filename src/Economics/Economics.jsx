import { makeStyles } from "@mui/styles";
import { LineChart } from "@mui/x-charts";
import React from "react";
const useStyles = makeStyles((theme) => ({
  customLine: {
    stroke: "red", // Set your desired color here
  },
}));
const Economics = () => {
  const classes = useStyles();
  return (
    <>
      <section className="tokenomics_section" id="tokenomics">
        <div className="container">
          <div className="tokenomics_inner_content">
            <div className="common_haeding">
              <h2>
                Economics
                <br />
                Distribution
              </h2>
              <p>Total Supply : 1,000,000,000 $DEGEN</p>
            </div>

            <div className="full_teko_chart">
              <img
                src="https://dirt-backend.onrender.com/uploads/full%20chart%20image.png"
                alt="full%20chart%20image"
                className="img-fluid"
              />
            </div>
            {/* <div className="about_btn chart_btn">
              <a
                href="https://drive.google.com/file/d/1SQesFGP8R_7lVMqAHXYUFVJTGybw7wsa/view?usp=sharing"
                target="_blank"
                className="about_btn-2"
              >
                <img
                  src="/src/assets/images/attech-icon.webp"
                  alt="attech-icon"
                />{" "}
                <span>Read more</span>
              </a>
            </div> */}
            <div className="economics-chart">
              <div className="col-lg-6 col-md-8 mb-4">
                
                  <div className="economics_card_wrap-two ">
                    <h1 className="economics_heading">Economics Value</h1>
                    <div className="economics_container" style={{ padding: "0vh 15vh" }}>
                      <div className="flex-wrap col-lg-12 col-md-12  economics_inner">
                        <p className="economics_inner_value">1 Coin</p>
                        <p
                          className="economics_inner_value"
                          style={{ color: "#FF9E0C" }}
                        >
                          10,000
                        </p>
                      </div>
                      <div className="flex-wrap col-lg-12 col-md-12  economics_inner">
                        <p className="economics_inner_value">1 Coin</p>
                        <p
                          className="economics_inner_value"
                          style={{ color: "#FF9E0C" }}
                        >
                          10,000
                        </p>
                      </div>
                    </div>
                    <div className="econimics_assests_container" style={{ padding: "0 15vh", marginBottom: "10px" }}>
                      <div className="col-lg-12 col-md-12  economics_assets_inner">
                        <div
                          className="economics_assets_content flex-wrap d-flex justify-content-between"
                          style={{ width: "100%", marginBottom: "5px" }}
                        >
                          <p
                            className="economics_assets_value"
                            style={{ fontFamily: "GOTHICB" }}
                          >
                            Total Assests sold
                          </p>
                          <p
                            className="economics_assets_value"
                            style={{ color: "#FF9E0C", fontFamily: "GOTHICB" }}
                          >
                            10,000
                          </p>
                        </div>

                        <div
                          className="economics_assets_content flex-wrap d-flex justify-content-between"
                          style={{ width: "100%" }}
                        >
                          <p
                            className="economics_assets_value"
                            style={{ fontFamily: "GOTHICB" }}
                          >
                            Total Assests sold
                          </p>
                          <p
                            className="economics_assets_value"
                            style={{ color: "#FF9E0C", fontFamily: "GOTHICB" }}
                          >
                            10,000
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="economics_current ">
                      <div
                        className=" economics_current_container w-full d-flex justify-content-between flex-wrap"
                        style={{ width: "100%" }}
                      >
                        <p className="economics_current_value ">CurrentValue</p>
                        <p className="economics_current-coin_value">1 Coin</p>
                        <p
                          className="economics_current_assest"
                          style={{ color: "#FF9E0C" }}
                        >
                          1 Rupee
                        </p>
                      </div>
                    </div>
                  </div>
               
              </div>

              {/* Line chart */}
              <div className="col-lg-6 col-md-8 ">
                <div className="">
                  <div className="economics_card_wrap">
                    <LineChart
                      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                          color: "#fdb462",
                        },
                      ]}
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tekenomics_bike">
          <img
            src="https://dirt-backend.onrender.com/uploads/chart_bottom-bike.webp"
            alt="chart_bottom-bike"
            className="img-fluid js-tilt"
          />
        </div>
      </section>
    </>
  );
};

export default Economics;
