import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar-styles.scss";
import { AppBar, Toolbar } from "@mui/material";
import Logo from "../../components/Logo/Logo.component";
import Footer from "../Footer/footer.component";

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light navBackDrop  position-absolute w-100 text-light" style={{top: '0', left:'0'}}>
        <div className="container-fluid justify-content-between">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-md-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-lg-0 d-flex">
              <li className="nav-item px-md-3">
                <Link className="nav-link active text-light" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item px-md-3">
              <Link className="nav-link active text-light" aria-current="page" to='/about'>
                  About
                </Link>
              </li>
              <li className="nav-item px-md-3">
              <Link className="nav-link active text-light" aria-current="page" to='/contact'>
                  Contact
                </Link>
              </li>
              <li className="nav-item px-md-3">
              <Link className="nav-link active text-light" aria-current="page" to='/faqs'>
                  FAQs
                </Link>
              </li>
              <li className="nav-item mx-md-2 px-md-3">
                <button className="btn btn-outline-light px-md-5 text-light">Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-light px-md-3">Create Account</button>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Navbar;
