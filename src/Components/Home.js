import { React, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { MdOutlineComputer } from "react-icons/md";
import { GiBullseye } from "react-icons/gi";
import "./CSS/home.css";
import FAQ from "./faq";

function Home() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const [faqs, setFaqs] = useState([
    {
      question:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate minimm eveniet illo?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate minimm eveniet illo?",
      open: false,
    },
    {
      question:
        "HLorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate minimm eveniet illo?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate minimm eveniet illo?",
      open: false,
    },
    {
      question:
        "HLorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate minimm eveniet illo?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate minimm eveniet illo?",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <div>
        {/* SCROLL TO TOP  */}

        <div
          className="  fixed right-12 bottom-12 cursor-pointer "
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        >
          <IoIosArrowDropupCircle size={48} className="text-slate-300" />
        </div>

        {/* NAVBAR */}

        <section className=" flex gap-x-96 flex-row border-b-2 border-slate-700 h-16 justify-center items-center ">
          <div
            className="text-xl text-white
          "
          >
            <Link to="/">Logo</Link>
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

        {/* SPONSORS */}
        <section className="h-[55vh] flex justify-center items-center text-5xl text-lred bg-[#232731] mt-32">
          Sponsers <br /> TO be Decided... <br /> (Whether to be made or not...)
        </section>

        {/* ABOUT */}

        <section className="mx-auto container flex flex-row text-gray-400 mt-16 gap-24 pb-16">
          {/* LEFT */}
          <div className="basis-2/5 mt-8">
            <div className="text-slate-300 text-2xl font-semibold">
              If you can't explain it simply, <br /> you dont understand it
              well...
            </div>
            <div className="text-mred text-sm mt-4">Albert Einstien</div>
            <div className="mt-4 text-justify">
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                cumque eveniet dignissimos, voluptas maxime placeat minima nulla
                aliquam facilis error, commodi rerum obcaecati recusandae optio
                id sunt perferendis.
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
                Praesentium commodi minus illum nulla libero quidem accusamus
                illo sunt repellendus consectetur?
              </div>
            </div>
          </div>
        </section>

        {/* TRACKS */}

        <section className="h-[55vh] flex justify-center items-center text-5xl text-lred bg-[#232731] mt-32">
          Tracks <br /> TO be Decided... <br /> (Whether to be made or not...)
        </section>

        {/* FAQs */}
        <section className="h-[55vh]   mt-32 ">
          <div className="text-4xl text-mred font-semibold flex justify-center items-center">
            Frequently Asked Questons
          </div>
          <div className="">
            <div className="faqs text-slate-300 ">
              {faqs.map((faq, index) => (
                <FAQ
                  faq={faq}
                  index={index}
                  key={index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
          </div>
        </section>

        {/* about organising team or techspace */}
        <section className="bg-[#232731]  ">
          <div className="container mx-auto py-6 text-gray-500 text-justify">
            <span className="text-mred">
              About texhspace sdc and incubation center
            </span>{" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab alias
            culpa beatae, natus voluptatibus adipisci a nostrum aspernatur
            voluptatem? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Molestias nemo neque optio atque autem eius delectus natus.
            Quibusdam, minus repellendus?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quam, similique.
          </div>
        </section>

        {/* FOOTER */}

        <section className="h-12">
          <div>Logo</div>
          <div>Linkden insta facebook twitter gmail phone no.</div>
        </section>
        <div className="h-8 bg-[#232731] "></div>
      </div>
    </>
  );
}
export default Home;
