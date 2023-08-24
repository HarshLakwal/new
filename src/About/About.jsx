import React from "react";
const About = () => {
  return (
    <>
      <section className="about_section" id="/about">
        {/*<img src="assets/images/about-full-bg-1.webp" alt="" class="img-fluid bg-img">*/}
        <div className="container about_section_content">
          <div className="">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="about_content">
                  <h2>Dirt Racing Game</h2>
                  {/*<h5 data-aos="zoom-in-up" data-aos-easing="linear"  data-aos-duration="1200" data-aos-delay="800">Dirt Racing Game</h5>*/}
                  <p>
                    Dirt Degen is taking the off-road racing scene on-chain to
                    provide you with a fury of dirt, metal and acceleration in a
                    high octane interactive metaverse This first of its kind
                    off-road experience will keep the user on the edge of their
                    seat and aping for more. We live our lives the way we like
                    to play our games: Fast, furious and degenerately online!
                    Come race with us to the bright blazing finish line out in
                    the distance, leaving chumps in the dust and suckers under
                    the rubber.
                  </p>
                  <p>
                    It’s a fast world and with Dirt Degens, you can play for
                    fun, play to win, or rev your way into history.
                  </p>
                  <p>
                    Make your fierce engine heard across the track as you speed
                    through mud, sand, rivers and grime in the dirtiest parts of
                    our world. Collect and race with High-Stakes betting for NFT
                    contracts in a intense multi-lap time bomb to the finish
                    line while you watch in Spectator Mode. When you feel the
                    need for speed, degen your way into the drivers seat to play
                    single player mode, multiplayer, time trials or in
                    tournaments.
                  </p>
                  <p>
                    Come rip across the sickest tracks as you race to win in the
                    hail, rain and smoldering heat.
                  </p>
                  <div className="about_btn text-center">
                    <a href="#" className="about_btn-1">
                      <img
                        src="https://dirt-backend.onrender.com/uploads/download-icon.webp"
                        alt="download-icon"
                      />{" "}
                      <span>Download game</span>
                    </a>{" "}
                    <a
                      href="https://drive.google.com/file/d/1a88utSklPc4p4mIZ43cEVuwE7gyCzD57/view?usp=sharing"
                      className="about_btn-2"
                      target="_blank"
                    >
                      <img
                        src="https://dirt-backend.onrender.com/uploads/attech-icon.webp"
                        alt="attech-icon"
                      />{" "}
                      <span>Pitch deck</span>
                    </a>
                  </div>
                  {/* <img src="assets/images/four-wheel-bike.png" alt="" class="img-fluid"> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="about_four_wheel_bike">
                  {/*<img src="assets/images/four-wheel-bike.webp" alt="" class="img-fluid js-tilt" />*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
