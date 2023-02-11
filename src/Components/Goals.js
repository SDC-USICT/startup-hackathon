import React from 'react'
import { GiBullseye } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";
function Goals() {
    AOS.init();
  return (
    <div>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mx-auto container flex flex-row text-gray-400 mt-16 gap-24 pb-16"
      >
        {/* LEFT */}
        <div className="basis-2/5 mt-8">
          <div className="text-slate-300 text-2xl font-semibold">
            If you can't explain it simply, <br /> you dont understand it
            well...
          </div>
          <div className="text-mred text-sm mt-4">Albert Einstien</div>
          <div className="mt-4 text-justify">
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque
              eveniet dignissimos, voluptas maxime placeat minima nulla aliquam
              facilis error, commodi rerum obcaecati recusandae optio id sunt
              perferendis.
            </div>
            <div className="mt-2">
              Libero numquam architecto nulla voluptatum laboriosam, laborum
              animi repellat, nobis illo eligendi esse iure harum atque
              provident corporis. Accusamus praesentium nulla eligendi!
            </div>
            <div className="mt-2">
              Libero numquam architecto nulla voluptatum laboriosam, laborum
              animi repellat, nobis illo eligendi esse iure harum atque
              provident corporis. Accusamus praesentium nulla eligendi!
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="basis-3/5">
          <div className="flex flex-row items-center gap-4">
            <div className="text-lred">
              <GiBullseye size={96} />
            </div>
            <div className="text-slate-200 text-4xl font-semibold">
              The Hackathon Goal
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-24 mt-12">
              <div>
                <div className="flex flex-row ">
                  <div className="text-6xl font-bold text-slate-600">01</div>
                  <div className="flex items-end text-mred font-semibold text-xl -ml-3 ">
                    Idea
                  </div>
                </div>
                <div className="mt-6 text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet voluptates eligendi et praesentium, porro sint
                  voluptate ipsa laudantium maxime molestias?
                </div>
              </div>
              <div>
                <div className="flex flex-row ">
                  <div className="text-6xl font-bold text-slate-600">02</div>
                  <div className="flex items-end text-mred font-semibold text-xl -ml-3 ">
                    Technology
                  </div>
                </div>
                <div className="mt-6 text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet voluptates eligendi et praesentium, porro sint
                  voluptate ipsa laudantium maxime molestias?
                </div>
              </div>
            </div>
            <div className="mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium commodi minus illum nulla libero quidem accusamus illo
              sunt repellendus consectetur?
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Goals