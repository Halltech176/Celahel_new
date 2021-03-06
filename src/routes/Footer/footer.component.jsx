import React from "react";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'
import "./footer-styles.scss";
import Logo from "../../components/Logo/Logo.component";

function Footer() {
  return (
           <div className="bg-black position-absolute w-100 ">
      <div className="container">
        <div className="grid row">
          <div className="col-12 col-md-3">
            <Logo />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum
              aperiam recusandae sunt libero.
            </p>
          </div>
          <div className="col-6 col-md-2">
           <ul>  <h3 className="mb-3">Services</h3>
           
              <li>Buy/See</li>
              <li>Pricing</li>
              <li>Case Studies</li>
              <li>Reviews</li>
              <li>Updates</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
           
            <ul> <h3 className="mb-3">Company</h3>
              <li>About</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
           
            <ul> <h3 className="mb-3">Follow Us</h3>
              <li><FaFacebookSquare color="blue"/> <span> Facebook</span></li>
              <li><FaTwitterSquare color="blue"/><span> Twitter</span></li>
              <li><FaInstagramSquare color="blue"/> <span> Instagram</span> </li>
              <li><FaLinkedin color="blue"/> <span> Linkedin</span> </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            
            <ul><h3 className="mb-3">Get the app</h3>
              <li>App store</li>
              <li>Play Store</li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="text-center text-muted small">Copyright &copy; 2022 CEDO | All Rghts reserved</p>
      </div>
    </div>
  
   
  );
}

export default Footer;
