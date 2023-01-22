import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
const EchipaCardItem = ({ className, jucatori }) => {
  return (
    <li className={className}>
      <div className="card-image">
        <img className="card-item-img" src={jucatori.src} alt="echipa" />
      </div>
      <div className="card-item-info">
        <h4 className="card-item-text">{jucatori.text}</h4>
        <Link className="card-item-link" to={jucatori.path}>
          <button className="btn">{jucatori.btn}</button>
        </Link>
      </div>
    </li>
  );
};

export default EchipaCardItem;
