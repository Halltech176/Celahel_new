import React, { Fragment, Outlet } from "react";
import "./footer-styles.scss";
import Logo from "../../components/Logo/Logo.component";

function Footer() {
  return (
    
      
           <div className="bg-dark">
      <div className="container">
        <div className="grid">
          <div className="cols">
            <Logo />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum
              aperiam recusandae sunt libero.
            </p>
          </div>
          <div className="cols">
            <h3>Services</h3>
            <ul>
              <li>Buy/See</li>
              <li>Pricing</li>
              <li>Case Studies</li>
              <li>Reviews</li>
              <li>Updates</li>
            </ul>
          </div>
          <div className="cols">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="cols">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div className="cols">
            <h3>Get the app</h3>
            <ul>
              <li>App store</li>
              <li>Play Store</li>
            </ul>
          </div>
        </div>

        <hr />
      </div>
    </div>
  
   
  );
}

export default Footer;
