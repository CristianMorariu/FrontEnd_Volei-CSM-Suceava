import React from "react";

const Parteneri = () => {
  return (
    <>
      <h2 className="footer-title">Parteneri</h2>
      <ul className="parteneri">
        <ParteneriItem icon="images/partener1.png" path="" />
        <ParteneriItem icon="images/partener2.png" path="" />
        <ParteneriItem icon="images/partener3.png" path="" />
        <ParteneriItem icon="images/partener1.png" path="" />
        <ParteneriItem icon="images/partener2.png" path="" />
        <ParteneriItem icon="images/partener3.png" path="" />
        <ParteneriItem icon="images/partener1.png" path="" />
        {/* <ParteneriItem icon="images/partener2.png" path="" /> */}
      </ul>
    </>
  );
};
const ParteneriItem = (props) => {
  return (
    <li className="parteneri-item">
      <a className="icon-link" href={props.path}>
        <img src={props.icon} alt="" />
      </a>
    </li>
  );
};
export default Parteneri;
