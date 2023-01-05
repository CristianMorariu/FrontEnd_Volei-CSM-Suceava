import React from "react";
import { Link } from "react-router-dom";
import "./Meciuri.css";
const Meciuri = (props) => {
  return (
    <div>
      <Link className="link-meciuri" to="calendarmeciuri">
        <ul className={props.classname}>{props.children}</ul>
      </Link>
    </div>
  );
};

export function Rezultate(props) {
  return (
    <li className="componenta-rezultate">
      <p className="data-rezultatelor">{props.dataMeci}</p>
      <div className="componenta-score">
        <p className="score">{props.scor}</p>
        <div className="logo-echipa-acasa">
          <img src={props.logoGazda} alt="" />
        </div>
        <div className="logo-echipa-deplasare">
          <img src={props.logoDeplasare} alt="" />
        </div>
      </div>
    </li>
  );
}

export function MeciuriViitoare(props) {
  return (
    <li className="componenta-rezultate">
      <p className="data-rezultatelor">{props.dataMeci}</p>
      <div className="componenta-score">
        <p className="ora">{props.ora}</p>
        <div className="logo-echipa-acasa">
          <img src={props.logoGazda} alt="" />
        </div>
        <div className="logo-echipa-deplasare">
          <img src={props.logoDeplasare} alt="" />
        </div>
      </div>
    </li>
  );
}

export default Meciuri;
