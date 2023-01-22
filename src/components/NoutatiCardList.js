import React from "react";
import NoutatiCardItem from "./NoutatiCardItem";
const NoutatiCardList = ({ ulclass, noutati, className }) => {
  return (
    <div className="cards">
      <div className="cards-container">
        <ul className={ulclass}>
          {/* <h2 className="cards-title">{props.titlu}</h2> */}
          {noutati &&
            noutati.map((noutate) => (
              <NoutatiCardItem
                className={className}
                key={noutate.id}
                stire={noutate}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NoutatiCardList;
