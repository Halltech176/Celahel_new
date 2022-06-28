import React, { Component } from "react";
// import { useNavigate } from "react-router-dom";
import BoxInput from "../inputs/box-input";

class OTPVerify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OTP: [],
    };
    this.ref = null;
    this.setref = (element) => {
      this.ref = element;
    };
    this.ref2 = React.createRef();
    this.ref3 = React.createRef();
    this.ref4 = React.createRef();
    this.ref5 = React.createRef();
    this.ref6 = React.createRef();
  }

  componentDidMount() {
    if (this.ref) {
      this.ref.focus();
    }
  }
  render() {
    return (
      <div>
        <form
          action="#"
          className="form-group"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <input
            type="number"
            maxLength="1"
            max="1"
            min="1"
            style={{
              width: "70px",
              padding: "1.5rem 5px 1.5rem 30px",
              background: "rgba(202, 202, 247, 0.5)",
              outline: "none",
              border: " none",
              margin: "5px",
              color: "#333",
            }}
            ref={this.setref}
            onKeyUp={() => {
              if (this.ref) {
                this.ref2.current.focus();
                this.setState({ OTP: [this.ref.value] });
              }
            }}
          />
          <input
            type="number"
            maxLength="1"
            max="1"
            min="1"
            style={{
              width: "70px",
              padding: "1.5rem 5px 1.5rem 30px",
              background: "rgba(202, 202, 247, 0.5)",
              outline: "none",
              border: " none",
              margin: "5px",
              color: "#333",
            }}
            ref={this.ref2}
            onKeyUp={(e) => {
              if (this.ref3) {
                this.ref3.current.focus();
                this.setState((prevState) => ({
                  OTP: [...this.state.OTP, e.target.value],
                }));
                console.log([...this.state.OTP, e.target.value]);
              }
            }}
          />
          <input
            type="number"
            maxLength="1"
            max="1"
            min="1"
            style={{
              width: "70px",
              padding: "1.5rem 5px 1.5rem 30px",
              background: "rgba(202, 202, 247, 0.5)",
              outline: "none",
              border: " none",
              margin: "5px",
              color: "#333",
            }}
            ref={this.ref3}
            onKeyUp={(e) => {
              if (this.ref4) {
                this.ref4.current.focus();
                this.setState((prevState) => ({
                  OTP: [...this.state.OTP, e.target.value],
                }));
              }
            }}
          />
          <input
            type="number"
            maxLength="1"
            max="1"
            min="1"
            style={{
              width: "70px",
              padding: "1.5rem 5px 1.5rem 30px",
              background: "rgba(202, 202, 247, 0.5)",
              outline: "none",
              border: " none",
              margin: "5px",
              color: "#333",
            }}
            ref={this.ref4}
            onKeyUp={(e) => {
              if (this.ref5) {
                this.ref5.current.focus();
                this.setState((prevState) => ({
                  OTP: [...this.state.OTP, e.target.value],
                }));
              }
            }}
          />
          <input
            type="number"
            maxLength="1"
            max="1"
            min="1"
            style={{
              width: "70px",
              padding: "1.5rem 5px 1.5rem 30px",
              background: "rgba(202, 202, 247, 0.5)",
              outline: "none",
              border: " none",
              margin: "5px",
              color: "#333",
            }}
            ref={this.ref5}
            onKeyUp={(e) => {
              if (this.ref6) {
                this.ref6.current.focus();
                this.setState((prevState) => ({
                  OTP: [...this.state.OTP, e.target.value],
                }));
              }
            }}
          />
          <input
            type="number"
            maxLength="1"
            max="1"
            min="1"
            style={{
              width: "70px",
              padding: "1.5rem 5px 1.5rem 30px",
              background: "rgba(202, 202, 247, 0.5)",
              outline: "none",
              border: " none",
              margin: "5px",
              color: "#333",
            }}
            ref={this.ref6}
            onKeyUp={(e) => {
              if (this.ref6) {
                this.setState((prevState) => ({
                  OTP: [...this.state.OTP, e.target.value],
                }), ()=>{
                  console.log(+this.state.OTP.join(''))
                });
                // console.log(this.state.OTP.toString());
              }
            }}
          />
        </form>
      </div>
    );
  }
}

export default OTPVerify;
