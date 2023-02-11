import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function WhenAndWhere() {
    AOS.init();
  return (
    <div>
      <section
        className="container mx-auto pt-[10vh] mt-[10vh] "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-row gap-x-80 ml-16">
          {/* LEFT */}

          <div className="basis-1/3 ">
            <img
              src="https://snazzy-maps-cdn.azureedge.net/assets/1261-dark.png?v=20170626074646"
              alt="map"
              className="rounded"
            />
          </div>

          {/* RIGHT  */}

          <div className="basis-2/3 flex flex-row gap-24">
            <div className="flex justify-center items-center flex-col ">
              <div>
                {" "}
                <span className="text-mred font-medium">When?</span> <br />
                <span className="text-slate-300 text-3xl font-bold">
                  1st-6th <br /> of March <br /> 2023
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div>
                <span className="text-mred font-medium">Where?</span> <br />
                <span className="text-slate-300 text-3xl font-bold">
                  USICT, GGSIPU <br />
                  Sector - 16 <br />
                  New Delhi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhenAndWhere