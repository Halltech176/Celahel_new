import React from "react";
import "./home.styles.scss";
import { FaStar } from "react-icons/fa";
import displayImage from "../../Assets/Rectangle-26.png";
import iPhone from "../../Assets/iPhone.png";

function Home() {
  return (
    <div>
      <div className="container hero bg-primary">
        <div className="d-sm-flex justify-content-between align-items-end pb-4">
          <div className="pt-3 text-sm-start">
            <p className="text-white fw-bold display-2">
              <span className="dotted"> Discover</span> <br />
              Most Suitable <br />
              Property
            </p>
            <p className="text-light lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              animi, quo modi cumque fugit officiis numquam dolore deserunt,
              atque at maxime cupiditate recusandae non corrupti sequi voluptas
              pariatur vero eius!
            </p>
            <button className="btn btn-light btn-lg btn-sm-block mt-3">
              Get Mobile App
            </button>
          </div>

          <div className="imgContainer px-0">
            <span className="badge bg-primary p-3 shadow-lg">Relaxation</span>
            <span className="badge bg-info p-3 shadow-lg">Get Hostel</span>
            <span className="badge bg-danger p-3 shadow-lg">Buy House</span>
            <span className="badge bg-success p-3 shadow-lg">Rent House</span>
            <img src={displayImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="howItWorks p-md-5 my-sm-3">
        <div className="container text-center">
          <h2>How It Works</h2>
          <p className="lead">
            Our Unique process gives you peace of mind for all our services
          </p>
          <div className="row">
            <div className="col-md">
              <div className="card bg-primary p-5 my-3 text-light shadow-lg">
                <div className="card-body">
                  <div className="circle bg-white text-center text-dark">
                    <span>1</span>
                  </div>
                  <h3 className="card-title">Search</h3>
                  <p className="text-left card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum, repudiandae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-primary p-5 my-3 text-light shadow-lg">
                <div className="card-body">
                  <div className="circle bg-white text-center text-dark">
                    <span>2</span>
                  </div>
                  <h3 className="text-center card-title">Search</h3>
                  <p className="text-left card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum, repudiandae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-primary p-5 my-3 text-light shadow-lg">
                <div className="card-body">
                  <div className="circle bg-white text-center text-dark">
                    <span>3</span>
                  </div>
                  <h3 className="text-center card-title">Search</h3>
                  <p className="text-left card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum, repudiandae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Clients p-md-5 m-md-5">
        <div className="container text-center">
          <h2>What Our Clients Say</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            laboriosam eos vero eaque cupiditate. Vero.
          </p>

          <div className="row">
            <div className="col-md">
              <div className="card p-3 marq-card">
                <div className="d-flex flex-column justify-content-start align-items-start mb-3">
                  <div>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                  </div>
                </div>

                <div>
                  <q className="lead text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consequatur soluta, nam tenetur possimus
                    excepturi error debitis doloremque illo doloribus.
                  </q>
                </div>
                <p className="h3 text-primary">John Carter</p>
                <p className="small text-primary">Web Designer</p>
              </div>
            </div>
            <div className="col-md">
              {" "}
              <div className="card p-3 marq-card">
                <div className="d-flex flex-column justify-content-start align-items-start mb-3">
                  <div>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                  </div>
                </div>

                <div>
                  <q className="lead text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consequatur soluta, nam tenetur possimus
                    excepturi error debitis doloremque illo doloribus.
                  </q>
                </div>
                <p className="h3 text-primary">Sophie Moore</p>
                <p className="small text-primary">Head of Marketing</p>
              </div>
            </div>
            <div className="col-md">
              {" "}
              <div className="card p-3 marq-card">
                <div className="d-flex flex-column justify-content-start align-items-start mb-3">
                  <div>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                  </div>
                </div>

                <div>
                  <q className="lead text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consequatur soluta, nam tenetur possimus
                    excepturi error debitis doloremque illo doloribus.
                  </q>
                </div>
                <p className="h3 text-primary">Matt Canon</p>
                <p className="small text-primary">Lead Developer</p>
              </div>
            </div>
            <div className="col-md">
              {" "}
              <div className="card p-3 marq-card">
                <div className="d-flex flex-column justify-content-start align-items-start mb-3">
                  <div>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                    <FaStar color="blue"></FaStar>
                  </div>
                </div>

                <div>
                  <q className="lead text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consequatur soluta, nam tenetur possimus
                    excepturi error debitis doloremque illo doloribus.
                  </q>
                </div>
                <p className="h3 text-primary">Andy Smith</p>
                <p className="small text-primary">VP of Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doMore">
        <div className="container my-5">
          <div className="d-flex ms-auto mx-auto w-90 flex-align-center justify-content-between bg-primary rounded-sm p-3">
            <div className="text-light">
              <h3>Get Our App & Do More</h3>
              <p>You can do anything you want with just a click on our app.</p>
              <div className="d-flex">
                <button className="btn-outlined-light bg-dark text-light my-2 p-2">
                  <span className="d-block">Download on the</span>
                  <span className="h4">App Store</span>
                </button>
                <button className="btn-outlined-light bg-dark text-light mx-3 my-2 p-2">
                  <span className="d-block">Get it on</span>
                  <span className="h4">Google play</span>
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="phone">
                <img src={iPhone} alt="" className="ing-fluid w-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
