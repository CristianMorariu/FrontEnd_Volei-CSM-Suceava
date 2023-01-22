import React from "react";
import { Link } from "react-router-dom";
const myComponentStyle = {
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  paddingTop: 20,
  margin: "0 40%",
};
const myComponentStyle2 = {
  display: "flex",

  height: 80,
  justifyContent: "center",
  boxShadow: "0 0 3px 2px #cec7c759",
  borderRadius: 20,
  minWidth: "100%",
  alignItems: "center",
  fontWeight: "bold",
};

const Missing = () => {
  return (
    <div>
      <h1 style={{ paddingTop: 100, color: "black" }}>Page Not Found(404)!?</h1>
      <h3 style={{ paddingTop: 20, textAlign: "center", color: "black" }}>
        Well, that's disappointing.
      </h3>
      <div style={myComponentStyle}>
        <div style={myComponentStyle2}>
          <Link style={{ color: "black" }} to="/">
            Visit Our Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Missing;
