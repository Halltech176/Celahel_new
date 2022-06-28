import React from "react";

const BoxInput = ({  ...otherProps }) => {
  return (
    <>
        <input
        type="number"
        maxLength="1"
        max="1"
        style={{
          width: "70px",
          padding: "1.5rem 5px 1.5rem 30px",
          background: "rgba(202, 202, 247, 0.5)",
          outline: "none",
          border: " none",
          margin: "5px",
          color: "#333"
        }}
        {...otherProps}
      />
    </>
    
   
  );
};

export default BoxInput;
