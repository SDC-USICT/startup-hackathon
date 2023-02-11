import React from "react";
import "./CSS/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="footerborder"></div>
      <div class="container_f">
  	 	<div class="row">
  	 		<div class="footer-col">
         <img src={require("./images/map.png")} alt="" />
				{/* <img src="./images/map.png" alt=""/> */}
				<div class="title">
					<a href="#">StartUp Hackathon</a> 
				</div>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Organizers</h4>
  	 			<ul>
  	 				<li><Link to="/about">About Us</Link></li>
  	 				<li><Link to="/team">Team</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Get Help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQs</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fa fa-envelope"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
    </div>
  );
}

export default Footer;
