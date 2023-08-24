import React from 'react'

const Footer = () => {
  return (
    <>
    <section className="footer_section py-3">
        <div className="container">
          <img
            src="https://dirt-backend.onrender.com/uploads/Dirt-logo2.png"
            alt="dirt-degens-logo"
            className="footer_logo js-tilt"
          />
          <p>
            The FIRST off-road experience of this caliber on BSC. Dirt Degen's
            is an immersive, addictive, and heart-stopping one of a kind racing
            game. There is a place for everyone in the Dirt Degen Metaverse,
            come join the thousands of members in our constantly growing
            Metaverse.
          </p>
          <div className="footer_buttons">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              Download Game
            </a>{" "}
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              Get Started
            </a>{" "}
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              Certik Audit
            </a>
          </div>
          <p>Copyright © 2023 - 2024 Dirt Rebles All rights reserved.</p>
          <section className="fixed_socail_icon">
            <ul>
              <li>
                <a
                  href="https://twitter.com/DirtDegens"
                  target="_blank"
                  className="twwiter"
                >
                  <img
                    src="https://dirt-backend.onrender.com/uploads/fixed-twwiter.webp"
                    alt="fixed-twwiter"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/dirtdegens"
                  target="_blank"
                  className="telegram"
                >
                  <img
                    src="https://dirt-backend.onrender.com/uploads/fixed-telegram.webp"
                    alt="fixed-telegram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@dirtdegens"
                  target="_blank"
                  className="email"
                >
                  <img
                    src="https://dirt-backend.onrender.com/uploads/fixed-email.webp"
                    alt="fixed-email"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/MJjCJ2j2ET"
                  target="_blank"
                  className="remote"
                >
                  <img
                    src="https://dirt-backend.onrender.com/uploads/fixed-remote.webp"
                    alt="fixed-remote"
                  />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </>
  )
}

export default Footer