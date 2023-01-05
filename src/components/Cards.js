import React from "react";
import { Link } from "react-router-dom";

import "./Cards.css";
const Cards = (props) => {
  return (
    <div className="cards">
      <div className="cards-container">
        <ul className={props.ulclass}>
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
const NoutatiCardItem = (props) => {
  return (
    <Link className="card-item-link-noutati" to={props.path}>
      <li className={props.className}>
        <div className="card-image">
          <img className="card-item-img" src={props.src} alt="Stire" />
        </div>
        <div className="card-item-info">
          <h4 className="card-item-titlu">{props.text}</h4>
          <p className="noutati-text">{props.text2}</p>
        </div>
      </li>
    </Link>
  );
};

export const Noutati = () => {
  return (
    <>
      <NoutatiCardItem
        className="cards-item"
        src="images/stire.jpg"
        text="Titlu"
        text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus totam vero consequuntur sequi! Odit dolore exercitationem voluptate assumenda, modi adipisci quisquam maiores ex doloribus ad, praesentium reiciendis qui fugiat!"
        path="/noutati"
      />
      <NoutatiCardItem
        className="cards-item"
        src="images/stire2.jpg"
        text="Titlu"
        text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus totam vero consequuntur sequi! Odit dolore exercitationem voluptate assumenda!"
        path="/noutati"
      />
      <NoutatiCardItem
        className="cards-item"
        src="images/stire.jpg"
        text="Titlu"
        text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus totam vero consequuntur sequi! Odit dolore exercitationem voluptate assumenda, modi adipisci quisquam maiores ex doloribus ad, praesentium reiciendis qui fugiat!"
        path="/noutati"
      />

      <NoutatiCardItem
        className="cards-item"
        src="images/stire2.jpg"
        text="Titlu"
        text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus totam vero consequuntur sequi! Odit dolore exercitationem voluptate assumenda!"
        path="/noutati"
      />
      <NoutatiCardItem
        className="cards-item"
        src="images/stire.jpg"
        text="Titlu"
        text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus totam vero consequuntur sequi! Odit dolore exercitationem voluptate assumenda!"
        path="/noutati"
      />
      <NoutatiCardItem
        className="cards-item"
        src="images/stire2.jpg"
        text="Titlu"
        text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus totam vero consequuntur sequi! Odit dolore exercitationem voluptate assumenda, modi adipisci quisquam maiores ex doloribus ad, praesentium reiciendis qui fugiat!"
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
    </>
  );
};
export const Parteneri = (props) => {
  return (
    <li className="parteneri-item">
      <a className="icon-link" href={props.path}>
        <img src={props.icon} alt="" />
      </a>
    </li>
  );
};

export default Cards;
