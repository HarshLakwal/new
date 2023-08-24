import React from 'react'

const Home = () => {
  return (
    <>
    <section
        className="main_banner_section"
        id="/"
        style={{ background: "url(https://dirt-backend.onrender.com/uploads/full-banner-img.webp)" }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="main_banner_contain">
            <h1 >To finish first, <br/> you must first finish</h1>
            {/* <img
              src="/src/assets/images/banner-content.webp"
              alt="banner-content"
              className="img-fluid main_content"
            /> */}
           
            <div className="main_banner_btn">
              <a href="#" className="play_now_btn"> 
                Play Now!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home