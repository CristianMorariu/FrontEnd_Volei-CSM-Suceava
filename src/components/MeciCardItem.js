import React from "react";
import "./Meciuri.css";
const MeciCardItem = ({ className, meci }) => {
  return (
    <li className="componenta-rezultate">
      <p className="data-rezultatelor">{meci.dataMeci}</p>
      <div className="componenta-score">
        <p className={className}>{meci.info}</p>
        <div className="logo-echipa-acasa">
          <img src={meci.logoGazda} alt="" />
        </div>
        <div className="logo-echipa-deplasare">
          <img src={meci.logoDeplasare} alt="" />
        </div>
      </div>
    </li>
  );
};

export default MeciCardItem;
