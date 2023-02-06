import React from "react";
import { Link } from "react-router-dom";
import "./CSS/home.css";
import { MdOutlineComputer } from "react-icons/md";
function Home() {
  return (
    <>
      <div className="">
        {/* NAVBAR */}

        <section className=" flex gap-x-96 flex-row border-b-2 border-slate-700 h-16 justify-center items-center ">
          <div
            className="text-xl text-white
          "
          >
            Logo
          </div>
          <div className="flex flex-row gap-x-16 justify-center items-center">
            <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100 text-l">
              About
            </div>
            <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100">
              Sponsors
            </div>
            <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100">
              FAQs
            </div>
            <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100">
              Contact Us
            </div>
            <div className="bg-lred hover:bg-mred px-8 py-2 rounded-lg text-slate-200 hover:text-slate-300 hover:bg-red-650 cursor-pointer font-semibold">
              <div className="">REGISTER</div>
            </div>
          </div>
        </section>

        {/* HERO */}

        <section className="container mx-auto h-[85vh]">
          <div className="flex flex-row ">
            {/* LEFT HERO */}
            <div className="basis-1/2 pt-32 pl-16">
              <div className="text-7xl font-semibold text-slate-200">
                Startup hackathon
              </div>
              <div className="text-mred text-xl mt-2">
                learn | teach | explore
              </div>
              <div className="text-justify text-gray-400 mt-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, recusandae natus tenetur sed voluptate quas aliquam
                itaque debitis, vel quae doloribus nostrum facilis nemo
                voluptatibus, quaerat animi nulla aperiam excepturi.{" "}
              </div>
              <div className="bg-lred hover:bg-mred px-8 py-2 rounded-lg text-slate-200 hover:text-slate-300 hover:bg-red-650 cursor-pointer  w-fit font-semibold mt-24">
                REGISTER
              </div>
            </div>
            {/* RIGHT HERO  */}
            <div className="basis-1/2 flex justify-center items-center text-lred  ">
              TO BE CHANGED
              <MdOutlineComputer color="#C4001D" size={200} />
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="arrow"></div>
        </div>

        {/* WHEN && WHERE */}

        <section className="container mx-auto mt-[15vh]">
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
    </>
  );
}
export default Home;
