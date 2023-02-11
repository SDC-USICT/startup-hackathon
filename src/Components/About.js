// import React from "react";
// import NeonRain from "./NeonRain";
// import MatrixRain from "./MatrixRain";

// const About = () => {
//   return (
//     <>
//       <section id="team" className="bgColorTeam pt-5">
//         <div className="container">
//           {/* Main Title */}
//           <div className="neoh_fn_title">
//             <h3 className="fn_title atmosphere theme">Our Team Members</h3>
//             <div className="line">
//               <span />
//             </div>
//           </div>
//           {/* !Main Title */}
//           <div className="mw_650 fn_description">
//             <p className="fn_desc fn_animated_text">
//               The idea was born in London and rapidly became a borderless vision
//               - A team of Neoh with a background in computer graphics, crypto,
//               technology, and art.
//             </p>
//           </div>
//           {/* Team List Shortcode */}
//           <div className="neoh_fn_team">
//             <ul className="team_list justify-content-center">
//               <li className="team_item">
//                 <div className="t_item">
//                   <div className="person_info">
//                     <div className="img_holder">
//                       <img
//                         src={require("./Assets/img/author/dhruvaeron.jpeg")}
//                         alt=""
//                       />
//                     </div>
//                     <div className="title_holder">
//                       <h3 className="fn_title theme">Dhruv Aeron</h3>
//                       <p className="fn_desc">Web Lead</p>
//                     </div>
//                   </div>
//                   <div className="person_social">
//                     <ul>
//                       <li>
//                         <a
//                           href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-linkedin" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://instagram.com/dhruv._0810"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-instagram" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://github.com/MR-DHRUV "
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-github" />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li className="team_item">
//                 <div className="t_item">
//                   <div className="person_info">
//                     <div className="img_holder">
//                       <img
//                         src={require("./Assets/img/author/dhruvgupta.png")}
//                         alt=""
//                       />
//                     </div>
//                     <div className="title_holder">
//                       <h3 className="fn_title theme">Dhruv Gupta</h3>
//                       <p className="fn_desc">Web Lead</p>
//                     </div>
//                   </div>
//                   <div className="person_social">
//                     <ul>
//                       <li>
//                         <a
//                           href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-linkedin" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://instagram.com/dhruv._0810"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-instagram" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://github.com/MR-DHRUV "
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-github" />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li className="team_item">
//                 <div className="t_item">
//                   <div className="person_info">
//                     <div className="img_holder">
//                       <img
//                         src={require("./Assets/img/author/kartit.jpeg")}
//                         alt=""
//                       />
//                     </div>
//                     <div className="title_holder">
//                       <h3 className="fn_title theme">Kartik singh</h3>
//                       <p className="fn_desc">Web Lead</p>
//                     </div>
//                   </div>
//                   <div className="person_social">
//                     <ul>
//                       <li>
//                         <a
//                           href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-linkedin" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://instagram.com/dhruv._0810"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-instagram" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://github.com/MR-DHRUV "
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-github" />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li className="team_item">
//                 <div className="t_item">
//                   <div className="person_info">
//                     <div className="img_holder">
//                       <img
//                         src={require("./Assets/img/author/Nishant.jpeg")}
//                         alt=""
//                       />
//                     </div>
//                     <div className="title_holder">
//                       <h3 className="fn_title theme">Nishant ola</h3>
//                       <p className="fn_desc">Web Lead</p>
//                     </div>
//                   </div>
//                   <div className="person_social">
//                     <ul>
//                       <li>
//                         <a
//                           href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-linkedin" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://instagram.com/dhruv._0810"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-instagram" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://github.com/MR-DHRUV "
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-github" />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li className="team_item">
//                 <div className="t_item">
//                   <div className="person_info">
//                     <div className="img_holder">
//                       <img
//                         src={require("./Assets/img/author/shivesh.jpg")}
//                         alt=""
//                       />
//                     </div>
//                     <div className="title_holder">
//                       <h3 className="fn_title theme">Shivesh Nandan</h3>
//                       <p className="fn_desc">Web Lead</p>
//                     </div>
//                   </div>
//                   <div className="person_social">
//                     <ul>
//                       <li>
//                         <a
//                           href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-linkedin" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://instagram.com/dhruv._0810"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-instagram" />
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="https://github.com/MR-DHRUV "
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <i className="fa-brands fa-github" />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           {/* !Team List Shortcode */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;
