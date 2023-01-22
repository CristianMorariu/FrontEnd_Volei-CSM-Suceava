import React from "react";
import EchipaCardItem from "./EchipaCardItem";
const EchipaCardList = ({ ulclass, echipe, className }) => {
  return (
    <div className="cards">
      <div className="cards-container">
        <ul className={ulclass}>
          {/* <h2 className="cards-title">{props.titlu}</h2> */}
          {echipe &&
            echipe.map((echipa) => (
              <EchipaCardItem
                className={className}
                key={echipa.id}
                jucatori={echipa}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};
export default EchipaCardList;
