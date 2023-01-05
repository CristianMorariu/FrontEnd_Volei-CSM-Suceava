import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const today = new Date();
  return (
    <>
      <div className="contact">
        <h2 className="footer-title">Contact</h2>
        <p>
          <strong>Adresa:</strong> str. Vasile Conta nr. 16 sector 2, Bucuresti,
          Romania
        </p>
        <p>
          <strong>Email:</strong> frvolei@frvolei.ro
        </p>
        <p>
          <strong>Cod Postal:</strong> 020954
        </p>
        <p>
          <Link to="/login">
            <img src="images/login.png" alt="" />
          </Link>
        </p>
        <div className="social-icons">
          <h6>Be Social With Us</h6>
          <a href="https://www.facebook.com/frvolei">
            <img src="images/facebook.png" alt="" />
          </a>

          <a href="https://instagram.com/team_romania_volleyball">
            <img src="images/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@FR_Volei/">
            <img src="images/youtube.png" alt="" />
          </a>
        </div>
        <div className="copyright">
          <h4>
            Copyright &copy; {today.getFullYear()} Federatia Romana de Volei.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
