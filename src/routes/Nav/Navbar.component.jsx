import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar-styles.scss";
import { AppBar, Toolbar } from "@mui/material";
import Logo from "../../components/Logo/Logo.component";
import Footer from "../Footer/footer.component";
// import SideBar from './SideBar'

function Navbar() {
  const pathname = window.location.href;
  console.log(pathname);
  pathname !== 'http://localhost:3000/'? console.log('other'): console.log(pathname);;
  return (
    <Fragment>
    {/* <SideBar/> */}
      <nav
        className={
          pathname !== "http://localhost:3000/"
            ? "navbar navbar-expand-lg navbar-light text-primary"
            : "position-absolute w-100 text-light navbar navbar-expand-lg navbar-light"
        }
        navbar
        navbar-expand-lg
        navbar-light
        navBackDrop
        style={{ top: "0", left: "0" }}
      >
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
            <ul className="navbar-nav mb-lg-0 d-flex nav-pills">
              <li className="nav-item px-md-3">
                <Link
                  className={
                    pathname !== "http://localhost:3000/"
                      ? "nav-link active"
                      : "nav-link active text-light"
                  }
                 
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <Link
                  className={
                    pathname !== "http://localhost:3000/"
                      ? "nav-link text-primary"
                      : "nav-link text-light"
                  }
                
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <Link
                  className={
                    pathname !== "http://localhost:3000/"
                      ? "nav-link text-primary"
                      : "nav-link text-light"
                  }
               
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <Link
                  className={
                    pathname !== "http://localhost:3000/"
                      ? "nav-link text-primary"
                      : "nav-link text-light"
                  }
                  aria-current="page"
                  to="/faqs"
                >
                  FAQs
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <button
                  className={
                    pathname !== "http://localhost:3000/"
                      ? "btn btn-outline-primary px-md-5 text-prmary"
                      : "btn btn-outline-light px-md-5 text-light"
                  }
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={
                    pathname !== "http://localhost:3000/"
                      ? "btn btn-outline-primary px-md-5 text-prmary"
                      : "btn btn-outline-light px-md-5 text-light"
                  }
                >
                  Create Account
                </button>
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
