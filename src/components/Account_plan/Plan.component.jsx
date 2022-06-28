import React from "react";
import './plan.styles.scss'
import {FaAngleRight} from 'react-icons/fa'

function Plan() {
  return (
    <div>
    <div className="head">
         <h2 className="text-primary  small text-center">PRICING</h2>
      <h1 className="h1 text-primary text-center">Affordable pricing plans</h1>
      <p className="m-3 lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur
        quibusdam quas. Accusamus veniam magnam repudiandae ipsum, soluta
        quisquam velit.
      </p>
    </div>
     
      <div className="row g-3 m-4">
        <div className="col-12 col-md-4 card shadow-lg borderless m-3 regular">
          <div className="d-flex">
          <div className="bg-primary p-2 m-3 rounded-circle">
              <FaAngleRight size='50px' color="white"/>
          </div>
           
            <div className="plantext d-flex flex-column">
              <p className="lead">For small</p>
              <p className="h2 text-primary">Basic</p>
            </div>
          </div>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
            distinctio?
          </p>
          <hr />

          <p className="h3">What's included</p>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-primary"
              name="feature1"
              checked
              readOnly
            ></input>
            <label htmlFor="feature1" className="text-primary">
              All analytics features
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-primary"
              checked
              readOnly
              name="feature2"
            ></input>
            <label htmlFor="feature2" className="text-primary">
              Up to 250,000 tracked visits
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-primary"
              checked
              readOnly
              name="feature3"
            ></input>
            <label htmlFor="feature3" className="text-primary">
             Normal support
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-primary"
              checked
              readOnly
              name="feature4"
            ></input>
            <label htmlFor="feature4" className="text-primary">
              Up to 3 team members
            </label>
          </div>
         <p><span className="h1 display-2 text-primary">$99</span> /monthly</p> 

         <button className="btn btn-block btn-primary bg-primary rounded-pill my-3 py-3">Get started</button>
        </div>


        {/* ************************** INVERTED
         ************************* */}
         <div className="col-12 col-md-4 card shadow-lg bg-primary m-3 inverted bg-primary text-white">
          <div className="d-flex">
          <div className="bg-light p-2 m-3 rounded-circle">
              <FaAngleRight size='50px' color="blue"/>
          </div>
           
            <div className="plantext d-flex flex-column">
              <p className="lead">For tartups</p>
              <p className="h2">Growth</p>
            </div>
          </div>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
            distinctio?
          </p>
          <hr />

          <p className="h3">What's included</p>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-light text-primary"
              name="feature1"
              checked
              readOnly
            ></input>
            <label htmlFor="feature1" className="form-check-label">
              Everything on basic plan
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-light"
              checked
              readOnly
              name="faeature2"
            ></input>
            <label htmlFor="feature2" className="form-check-label">
              Up to 1,000,000 tracked visits
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-light"
              checked
              readOnly
              name="feature3"
            ></input>
            <label htmlFor="feature3" className="form-check-label">
             Premium support
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-light"
              checked
              readOnly
              name="feature4"
            ></input>
            <label htmlFor="feature4" className="form-check-label">
              Up to 10 team members
            </label>
          </div>
         <p><span className="h1 display-2 text-light">$199</span> /monthly</p> 

         <button className="btn btn-block btn-light rounded-pill my-3 py-3">Get started</button>
        </div>

        {/* *********************** REGULAR 3***************************** */}

        <div className="col-12 col-md-4 card shadow-lg borderless m-3 regular">
          <div className="d-flex">
          <div className="bg-primary p-2 m-3 rounded-circle">
              <FaAngleRight size='50px' color="white"/>
          </div>
           
            <div className="plantext d-flex flex-column">
              <p className="lead">For business</p>
              <p className="h2 text-primary">Enterprise</p>
            </div>
          </div>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
            distinctio?
          </p>
          <hr />

          <p className="h3">What's included</p>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-primary"
              name="feature1"
              checked
              readOnly
            ></input>
            <label htmlFor="feature1" className="text-primary">
              Everything on growth plan
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-primary"
              checked
              readOnly
              name="faeature2"
            ></input>
            <label htmlFor="feature2" className="text-primary">
              Up to 5,000,000 tracked visits
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-primary"
              checked
              readOnly
              name="feature3"
            ></input>
            <label htmlFor="feature3" className="text-primary">
             Dedicated support
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="rounded-circle form-check-input bg-primary"
              checked
              readOnly
              name="feature4"
            ></input>
            <label htmlFor="feature4" className="text-primary">
              Up to 50 team members
            </label>
          </div>
         <p><span className="h1 display-2 text-primary">$399</span> /monthly</p> 

         <button className="btn btn-block bg-primary btn-primary rounded-pill my-3 py-3">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
