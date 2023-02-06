import React from "react";
import "./Jucator.css";
import Footer from "../components/Footer";
const Jucator = () => {
  return (
    <div>
      <div className="content12">
        <div className="imgjucator">
          <img class="imag2" src="/images/Ellipse 1.png" alt="" />
          <img class="imag1" src="/images/jucator 1.png" alt="" />
        </div>
        <div className="infojucator">
          <div className="nume">
            <h1>Cristian Morosan</h1>
          </div>
          <div className="datejucator">
            <p>Nationalitate:Romana</p>
            <p>Post:Atacant</p>
            <p>Data Nasterii: 20-04-1993</p>
            <p>Inaltime:1.83m</p>
            <p>Descriere: -</p>
            <p>Premii:</p>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Jucator;
