import React from 'react'

const Partner = () => {
  return (
    <>
    <section className="partner_investor_adviser_section" id="team">
        <div className="adviser_section pad_tb">
          <div className="container">
            <div className="common_haeding">
              <h2>Crew</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 m-auto">
                <div className="adviser_box">
                  <div className="advisor_img_box">
                    <img
                      src="https://dirt-backend.onrender.com/uploads/mau-img.png"
                      alt="team-img-01"
                      className="img-fluid"
                    />
                  </div>
                  {/* <h5>Techy mau Gaming Studio</h5> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 m-auto">
                <div className="adviser_box">
                  <div className="advisor_img_box">
                    <img
                      src="https://dirt-backend.onrender.com/uploads/V-Radicals.png"
                      alt="team-img-4"
                      className="img-fluid"
                    />
                  </div>
                  {/* <h5>VRadicals</h5> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Partner