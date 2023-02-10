import {React,useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "./faq";

function Faqs() {
     AOS.init();

     // FAQs

     const [faqs, setFaqs] = useState([
       {
         question:
           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate minimm eveniet illo?",
         answer:
           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate minimm eveniet illo?",
         open: true,
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
    <div>
      <section
        className="h-[55vh]   mt-32 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="text-4xl text-mred font-semibold flex justify-center items-center">
          Frequently Asked Questons
        </div>
        <div className="">
          <div className="faqs text-slate-300 ">
            {faqs.map((faq, index) => (
              <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faqs