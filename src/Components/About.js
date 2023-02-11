import React from "react";

function About() {
  return (
    <div>
      <section id="information" class="nobackground pt-5">
        <div className="container">
          {/* About Item /1 */}
          <div className="neoh_fn_about_item ">
            <div className="img_item">
              <img src={require("./images/map.png")} alt="" />
            </div>
            <div className="content_item">
              <div className="neoh_fn_title" data-align="left">
                <h3 className="atmosphere about-headings">USICT</h3>
                <div className="line usict-line">
                  <span />
                </div>
              </div>
              <div className="desc atmospheric">
                <p>
                  Simply holding a Neoh will give you access to seasonal
                  airdrops, merchandise, physical and digital artworks,
                  collectibles and more.
                </p>
                <p>
                  We understand the importance of the cross-over between these
                  worlds and we truly believe to bridge these two together. Our
                  goals will always be for the community - creating, building
                  and innovating together with the commmunity.
                </p>
              </div>
              <div className="buttons">
                <a href="/" className="neoh_fn_button only_text">
                  <span className="text">Join Community</span>
                </a>
              </div>
            </div>
          </div>
          <div className="neoh_fn_about_item reverse">
            <div className="img_item">
              <img src={require("./images/map.png")} alt="" />
            </div>
            <div className="content_item">
              {/* <MatrixRain /> */}
              <div className="neoh_fn_title" data-align="left">
                <h3 className="atmosphere about-headings">StartUp Hackathon</h3>
                <div className="line line-about startup-line">
                  <span />
                </div>
              </div>
              <div className="desc atmospheric">
                <p>
                  As the first hero of the Neoh Universe, collection has over
                  9,999 unique skins drawn from the different missions and
                  challenges he faced throughout his life.
                </p>
                <p>
                  The artwork has been hand-drawned by Robert Green in the
                  traditional anime style and composited by Layla Efiyo.
                </p>
              </div>
              <div className="buttons">
                <a href="/" target="_blank" className="neoh_fn_button ">
                  <span className="but-text">Home</span>
                </a>
                <a href="/register" target="_blank" className="neoh_fn_button">
                  <span className="text">Register</span>
                </a>
              </div>
            </div>
          </div>
          <div className="neoh_fn_about_item">
            <div className="img_item">
              <img src={require("./images/map.png")} alt="" />
            </div>
            <div className="content_item">
              {/* <MatrixRain /> */}
              <div className="neoh_fn_title" data-align="left">
                <h3 className="atmosphere about-headings">SDC USS</h3>
                <div className="line line-about sdc-line">
                  <span />
                </div>
              </div>
              <div className="desc atmospheric">
                <p>
                  As the first hero of the Neoh Universe, collection has over
                  9,999 unique skins drawn from the different missions and
                  challenges he faced throughout his life.
                </p>
                <p>
                  The artwork has been hand-drawned by Robert Green in the
                  traditional anime style and composited by Layla Efiyo.
                </p>
              </div>
              <div className="buttons">
                <a href="/" target="_blank" className="neoh_fn_button ">
                  <span className="but-text">Our Website</span>
                </a>
              </div>
            </div>
          </div>
          <div className="neoh_fn_about_item reverse">
            <div className="img_item">
              <img src={require("./images/map.png")} alt="" />
            </div>
            <div className="content_item">
              {/* <MatrixRain /> */}
              <div className="neoh_fn_title" data-align="left">
                <h3 className="atmosphere about-headings">TechSpace</h3>
                <div className="line line-about techspace-line">
                  <span />
                </div>
              </div>
              <div className="desc atmospheric">
                <p>
                  As the first hero of the Neoh Universe, collection has over
                  9,999 unique skins drawn from the different missions and
                  challenges he faced throughout his life.
                </p>
                <p>
                  The artwork has been hand-drawned by Robert Green in the
                  traditional anime style and composited by Layla Efiyo.
                </p>
              </div>
              <div className="buttons">
                <a href="/" target="_blank" className="neoh_fn_button ">
                  <span className="but-text">Our Website</span>
                </a>
              </div>
            </div>
          </div>
          {/* !About Item /2 */}
        </div>
      </section>
    </div>
  );
}

export default About;
