import React from "react";
import { Link } from "react-router-dom";
const NoutatiCardItem = ({ className, stire }) => {
  return (
    <Link className="card-item-link-noutati" to={`/noutati/${stire.id}`}>
      <li className={className}>
        <div className="card-image">
          <img className="card-item-img" src={stire.src} alt="Stire" />
          <div className="data">{stire.datetime}</div>
        </div>
        <div className="card-item-info">
          <h4 className="card-item-titlu">{stire.title}</h4>
          <p className="noutati-text">{stire.body}</p>
        </div>
      </li>
    </Link>
  );
};

export default NoutatiCardItem;
