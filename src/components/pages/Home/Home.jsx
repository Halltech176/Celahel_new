import React from "react";
import "./home.styles.scss";
import { FaStar } from "react-icons/fa";
import PlayBadge from '../../../Assets/Mobile_play_store_badge.png'
import AppBadge from '../../../Assets/Mobile app store badge.png'
import displayImage from '../../../Assets/house3.png'
import iPhone from '../../../Assets/iPhone.png'

function Home() {
  return (
    <div>
      <div className="d-lg-flex justify-content-between align-items-end hero bg-primary">
        <div className="col-12 col-md-6">
          <div className="container p-3 mb-5">
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
            <button className="btn btn-light mt-3 btn-lg">Get Mobile App</button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="container">
            <div className="imgContainer px-0">
              <span className="badge bg-primary p-3 shadow-lg">Relaxation</span>
              <span className="badge bg-info p-3 shadow-lg">Get Hostel</span>
              <span className="badge bg-danger p-3 shadow-lg">Buy House</span>
              <span className="badge bg-success p-3 shadow-lg">Rent House</span>
              <img src={displayImage} alt="" className="img-fluid w-100"/>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 p-3">
        <div className="container text-center">
          <h2>How It Works</h2>
          <p className="lead">Our Unique process gives you peace of mind for all our services</p>
          <div className="row g-5 cards">
            <div className="col-lg">
              <div className="card p-5 my-3 text-light shadow-lg">
                <div className="circle bg-white text-center text-dark">
                  <span>1</span>
                </div>
                <h3 className="text-center card-title">Search</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum, repudiandae.
                </p>
              </div>
            </div>
            <div className="col-lg">
              <div className="card p-5 my-3 text-light shadow-lg">
                <div className="circle bg-white text-center text-dark">
                  <span>2</span>
                </div>
                <h3 className="card-title text-center">Search</h3>
                <p className="card-text text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum, repudiandae.
                </p>
              </div>
            </div>
            <div className="col-lg">
              <div className="card p-5 my-3 text-light shadow-lg">
                <div className="circle bg-white text-center text-dark">
                  <span>3</span>
                </div>
                <h3 className="card-title text-center">Search</h3>
                <p className="card-text text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum, repudiandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 p-3">
        <div className="container-fluid text-center">
          <h2>What Our Clients Say</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            laboriosam eos vero eaque cupiditate. Vero.
          </p>

          <div className="row">
            <div className="col">
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
                  <q className="card-text text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consequatur soluta, nam tenetur possimus
                    excepturi error debitis doloremque illo doloribus.
                  </q>
                </div>
                <p className="h3 text-primary card-title">John Carter</p>
                <p className="small text-primary">Web Designer</p>
              </div>
            </div>
            <div className="col"> <div className="card p-3 marq-card">
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
                  <q className="card-text text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consequatur soluta, nam tenetur possimus
                    excepturi error debitis doloremque illo doloribus.
                  </q>
                </div>
                <p className="h3 text-primary card-title">Sophie Moore</p>
                <p className="small text-primary">Head of Marketing</p>
              </div></div>
            <div className="col"> <div className="card p-3 marq-card">
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
                  <q className="card-text text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consequatur soluta, nam tenetur possimus
                    excepturi error debitis doloremque illo doloribus.
                  </q>
                </div>
                <p className="h3 text-primary card-title">Matt Canon</p>
                <p className="small text-primary">Lead Developer</p>
              </div></div>
            <div className="col"> <div className="card p-3 marq-card">
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
                  <q className="card-text text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consequatur soluta, nam tenetur possimus
                    excepturi error debitis doloremque illo doloribus.
                  </q>
                </div>
                <p className="h3 text-primary card-title">Andy Smith</p>
                <p className="small text-primary">VP of Marketing</p>
              </div></div>
          </div>
        </div>
      </div>

      <div className="lastSection">
        <div className="container my-5">
          <div className="d-lg-flex justify-content-between bg-primary rounded-sm p-5">
            <div className="col-md-6 col-12 text-light">
              <h3>
                Get Our App & Do More

              </h3>
              <p>You can do anything you want with just a click on our app.</p>
              <div className="d-flex">
               <img src={AppBadge} alt="" className="mx-2"/>
               <img src={PlayBadge} alt="" className="mx-2"/>
              </div>
            </div>
            <div className="col-md-6 col-12">
            <div className="phone">
               <img src={iPhone} alt="" height="300%" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;