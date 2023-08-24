import React from 'react'

const Roadmap = () => {
  return (
    <>
    <section className="road_map_section">
        <div className="container">
          <div className="roadmap_main_img">
            <img
              src="https://dirt-backend.onrender.com/uploads/road_map_img-1.webp"
              alt="road_map_img-1"
              className="img-fluid roadmap_main_bg"
            />
            <div className="roadmap_innner_content_wrap" id="roadmap">
              <div className="road_map_head">
                {/*<h2>Road map</h2>*/}
                <img
                  src="https://dirt-backend.onrender.com/uploads/road-map.webp"
                  alt="road-map"
                  className="img-fluid"
                />
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-4">
                  <div className="roadmap_inner_box">
                    <p>
                      <img
                        src="https://dirt-backend.onrender.com/uploads/halmet.webp"
                        alt="halmet"
                        className="img-fluid"
                      />{" "}
                      Phase 1
                    </p>
                    <h5>Q4 2021</h5>
                    <ul className="roadmap_point">
                      <li>Game development</li>
                      <li>Smart contract development (BSC)</li>
                      <li>Marketing &amp; Company Building</li>
                      <li>Launch website &amp; Socials</li>
                      <li>Wallet integration</li>
                      <li>NFT Creation</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="roadmap_inner_box">
                    <p>
                      <img
                        src="https://dirt-backend.onrender.com/uploads/halmet.webp"
                        alt="halmet"
                        className="img-fluid"
                      />{" "}
                      Phase 2
                    </p>
                    <h5>Q1 2022</h5>
                    <ul className="roadmap_point">
                      <li>IDO, PRE SALE</li>
                      <li>TGE (Token Generation Event)</li>
                      <li>Game v1 Beta Launch</li>
                      <li>Marketplace Launch</li>
                      <li>Hype Video</li>
                      <li>Betting integration</li>
                      <li>Strategic Partnerships formed</li>
                      <li>NFT Mint</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="roadmap_inner_box">
                    <p>
                      <img
                        src="https://dirt-backend.onrender.com/uploads/halmet.webp"
                        alt="halmet"
                        className="img-fluid"
                      />{" "}
                      Phase 3
                    </p>
                    <h5>Q2 2022</h5>
                    <ul className="roadmap_point">
                      <li>1st Community Tournament</li>
                      <li>User onboarding</li>
                      <li>Improve user experience</li>
                      <li>Track sales (Round)</li>
                      <li>NFT Creation (continued)</li>
                      <li>Spectator Mode goes live</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="roadmap_inner_box">
                    <p>
                      <img
                        src="https://dirt-backend.onrender.com/uploads/halmet.webp"
                        alt="halmet"
                        className="img-fluid"
                      />{" "}
                      Phase 4
                    </p>
                    <h5>Q3 2022</h5>
                    <ul className="roadmap_point">
                      <li>Branded NFT go live</li>
                      {/*<li>Spectator mode goes live</li>*/}
                      <li>Vehicle Rental integration</li>
                      {/*<li>Betting inttegration</li>*/}
                      <li>Game v2 release</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="roadmap_inner_box">
                    <p>
                      <img
                        src="https://dirt-backend.onrender.com/uploads/halmet.webp"
                        alt="halmet"
                        className="img-fluid"
                      />{" "}
                      Phase 5
                    </p>
                    <h5>Q4 2022</h5>
                    <ul className="roadmap_point">
                      <li>STAY TUNED!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Roadmap