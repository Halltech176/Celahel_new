import React from "react";
import './about.styles.scss'
// import { Route, useLocation } from "react-router-dom";

function About() {
  const pathname = window.location.pathname
  // const path = useLocation();
  console.log(pathname)
  return (
    <div className="mt-20 container-fluid">
      <div className="d-flex my-10">
        <div className="col-md-7 container">
          <h1 className="h1 text-primary">Buy/Book Relaxation</h1>
          <h2>{pathname}</h2>
          <p className={window.location.pathname === '/about'? 'w-100': ''}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequuntur in repudiandae officia fuga voluptatibus magnam odio
            impedit voluptate reprehenderit id totam est sint quos facilis
            laudantium esse iusto doloribus vero sunt culpa, modi porro nulla.
            Beatae consequuntur, iusto doloremque quaerat quis vitae officia,
            nemo ut officiis quos sint amet!
          </p>
        </div>
        <div className="col-md-5"></div>
      </div>
      <div className="row my-10">
        <div className="col-md-5"></div>
        <div className="col-md-7 container">
          <h1 className="h1 text-primary">Buy/Rent Hotel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequuntur in repudiandae officia fuga voluptatibus magnam odio
            impedit voluptate reprehenderit id totam est sint quos facilis
            laudantium esse iusto doloribus vero sunt culpa, modi porro nulla.
            Beatae consequuntur, iusto doloremque quaerat quis vitae officia,
            nemo ut officiis quos sint amet!
          </p>
        </div>
      </div>
      <div className="row my-10">
        <div className="col-md-7 container">
          <h1 className="h1 text-primary">Buy/Rent House</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequuntur in repudiandae officia fuga voluptatibus magnam odio
            impedit voluptate reprehenderit id totam est sint quos facilis
            laudantium esse iusto doloribus vero sunt culpa, modi porro nulla.
            Beatae consequuntur, iusto doloremque quaerat quis vitae officia,
            nemo ut officiis quos sint amet!
          </p>
        </div>
        <div className="col-md-5"></div>
      </div>
      <div className="row my-10">
        <div className="col-md-5"></div>
        <div className="col-md-7 container">
          <h1 className="h1 text-primary">Buy/Rent Hostel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequuntur in repudiandae officia fuga voluptatibus magnam odio
            impedit voluptate reprehenderit id totam est sint quos facilis
            laudantium esse iusto doloribus vero sunt culpa, modi porro nulla.
            Beatae consequuntur, iusto doloremque quaerat quis vitae officia,
            nemo ut officiis quos sint amet!
          </p>
        </div>
      </div>
      <div className="row my-10">
        <div className="col-md-7 container">
          <h1 className="h1 text-primary">Buy/Rent Land</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequuntur in repudiandae officia fuga voluptatibus magnam odio
            impedit voluptate reprehenderit id totam est sint quos facilis
            laudantium esse iusto doloribus vero sunt culpa, modi porro nulla.
            Beatae consequuntur, iusto doloremque quaerat quis vitae officia,
            nemo ut officiis quos sint amet!
          </p>
        </div>
        <div className="col-md-5"></div>
      </div>
    </div>
  );
}

export default About;
