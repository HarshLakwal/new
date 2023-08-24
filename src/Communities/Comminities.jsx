import React from 'react'

const Comminities = () => {
  return (
    <>
    <section className="communities_section" id="communities">
        {/*<img src="assets/images/communities-bg-effect.webp" alt="" class="img-fluid bg-img">*/}
        <div className="container">
          <div className="communities_inner_content">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="community_left_bike">
                  <img
                    src="https://dirt-backend.onrender.com/uploads/communities-bike-1.webp"
                    alt="communities-bike-1"
                    className="left_bike_img js-tilt"
                  />{" "} 
                  
                  <a href="https://discord.gg/MJjCJ2j2ET" target="_blank">
                    <img
                      src="https://dirt-backend.onrender.com/uploads/game-remote.webp"
                      alt="game-remote"
                      className="img-fluid remote-icon circle-ripple"
                    />
                  </a>{" "}
                  <a href="https://twitter.com/DirtDegens" target="_blank">
                    <img
                      src="https://dirt-backend.onrender.com/uploads/twwiter-icon.webp"
                      alt="twwiter-icon"
                      className="img-fluid twwiter-icon circle-ripple-1"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-1">
                <div className="community_right_bike">
                  <img
                    src="https://dirt-backend.onrender.com/uploads/communities-bike-2.webp"
                    alt="communities-bike-2"
                    className="right_bike_img js-tilt"
                  />{" "}
                  <a href="https://medium.com/@dirtdegens" target="_blank">
                    <img
                      src="https://dirt-backend.onrender.com/uploads/email-icon.webp"
                      alt="email-icon"
                      className="img-fluid email-icon circle-ripple-2"
                    />
                  </a>{" "}
                  <a href="https://t.me/dirtdegens" target="_blank">
                    <img
                      src="https://dirt-backend.onrender.com/uploads/telegram-icon.webp"
                      alt="telegram-icon"
                      className="img-fluid telegram-icon circle-ripple-3"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="common_haeding_1">
              {/*<h2>Communities</h2>*/}
              <img
                src="https://dirt-backend.onrender.com/uploads/community.webp"
                alt="community"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="community_four_wheel_bike">
            <img
              src="https://dirt-backend.onrender.com/uploads/community-ATVVV.webp"
              alt="community-ATVVV"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Comminities