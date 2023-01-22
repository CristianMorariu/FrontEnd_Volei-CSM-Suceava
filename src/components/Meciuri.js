import React from "react";
import { Link } from "react-router-dom";
import MeciCardItem from "./MeciCardItem";
// import "./Meciuri.css";
const Meciuri = ({ classname, meciItemClassName, rezultate }) => {
  return (
    <div>
      <Link className="link-meciuri" to="calendarmeciuri">
        <ul className={classname}>
          {rezultate &&
            rezultate.map((rezultat) => (
              <MeciCardItem
                className={meciItemClassName}
                key={rezultat.id}
                meci={rezultat}
              />
            ))}
        </ul>
      </Link>
    </div>
  );
};

export function MeciuriViitoare({
  classname,
  meciItemClassName,
  meciuriViitoare,
}) {
  return (
    <div>
      <Link className="link-meciuri" to="calendarmeciuri">
        <ul className={classname}>
          {meciuriViitoare &&
            meciuriViitoare.map((meciviitor) => (
              <MeciCardItem
                className={meciItemClassName}
                key={meciviitor.id}
                meci={meciviitor}
              />
            ))}
        </ul>
      </Link>
    </div>
  );
}
// export function Rezultate(props) {
//   return (
//     <li className="componenta-rezultate">
//       <p className="data-rezultatelor">{props.dataMeci}</p>
//       <div className="componenta-score">
//         <p className="score">{props.info}</p>
//         <div className="logo-echipa-acasa">
//           <img src={props.logoGazda} alt="" />
//         </div>
//         <div className="logo-echipa-deplasare">
//           <img src={props.logoDeplasare} alt="" />
//         </div>
//       </div>
//     </li>
//   );
// }

export default Meciuri;
