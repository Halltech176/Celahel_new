import React, { Fragment } from "react";
import {Outlet} from 'react-router-dom'
import "./navbar-styles.scss";
import { AppBar, Toolbar } from "@mui/material";
import Logo from "../../components/Logo/Logo.component";
import Footer from "../Footer/footer.component";

function Navbar() {
  return (
    <Fragment>
      <div className="">
        <Logo />

        <ul>
          <li>Link1</li>
        </ul>
      </div>
      <Outlet/>
      <Footer/>
    </Fragment>
  );
}

export default Navbar;
