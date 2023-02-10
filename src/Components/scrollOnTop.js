import {React,useState} from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";

function ScrollOnTop() {
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
  return (
    <div>
      {" "}
      <div
        className=" z-20 fixed right-12 bottom-12 cursor-pointer "
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <IoIosArrowDropupCircle size={48} className="text-slate-300" />
      </div>
    </div>
  );
}

export default ScrollOnTop