import React from "react";
import { Link } from "react-router-dom";

import "./Cards.css";
const Cards = (props) => {
  return (
    <div className="cards">
      <div className="cards-container">
        <ul className="cards-items">
          <h2 className="cards-title">{props.titlu}</h2>
          {props.children}
        </ul>
      </div>
    </div>
  );
};
export const CardItem = (props) => {
  return (
    <li className={props.className}>
      <div className="card-image">
        <img className="card-item-img" src={props.src} alt="Stire" />
      </div>
      <div className="card-item-info">
        <h4 className="card-item-text">
          {props.text}

          {<br />}
          {props.text2}
        </h4>
        <Link className="card-item-link" to={props.path}>
          <button className="btn">{props.btn}</button>
        </Link>
      </div>
    </li>
  );
};

export const Noutati = () => {
  return (
    <>
      <CardItem
        className="cards-item"
        src="images/stire.jpg"
        text="Titlu"
        btn="Citeste mai mult"
        path="/noutati"
      />
      <CardItem
        className="cards-item"
        src="images/stire2.jpg"
        text="Titlu"
        btn="Citeste mai mult"
        path="/noutati"
      />
      <CardItem
        className="cards-item"
        src="images/stire.jpg"
        text="Titlu"
        btn="Citeste mai mult"
        path="/noutati"
      />

      <CardItem
        className="cards-item"
        src="images/stire2.jpg"
        text="Titlu"
        btn="Citeste mai mult"
        path="/noutati"
      />
      <CardItem
        className="cards-item"
        src="images/stire.jpg"
        text="Titlu"
        btn="Citeste mai mult"
        path="/noutati"
      />
      <CardItem
        className="cards-item"
        src="images/stire2.jpg"
        text="Titlu"
        btn="Citeste mai mult"
        path="/noutati"
      />
    </>
  );
};
export const Echipa = () => {
  return (
    <>
      <CardItem
        className="echipa"
        src="images/jucator.png"
        text="Jucatori"
        btn="Vezi mai mult"
        path="/noutati"
      />
      <CardItem
        className="echipa"
        src="images/jucator.png"
        text="Antrenori"
        btn="Vezi mai mult"
        path="/noutati"
      />
      <CardItem
        className="echipa"
        src="images/jucator.png"
        text="Arbitrii"
        btn="Vezi mai mult"
        path="/noutati"
      />
    </>
  );
};
export const Parteneri = (props) => {
  return (
    <li className="parteneri-item">
      <Link className="icon-link" to={props.path}>
        <img src={props.icon} alt="" />
      </Link>
    </li>
  );
};

export default Cards;
