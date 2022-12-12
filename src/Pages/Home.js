import React from "react";
import { Link } from "react-router-dom";
import Cards, {
  CardItem,
  Noutati,
  Echipa,
  Parteneri,
} from "../components/Cards";

const Home = () => {
  return (
    <>
      <header>
        <CardItem
          className="hero-component"
          src="images/prezentare.png"
          text="Lotul Curent"
          text2="CSM Volei Suceava"
          btn="Vezi mai mult"
          path="/noutati"
        />
      </header>

      <main className="home-main">
        <Cards titlu="Noutati:">
          <Noutati />
        </Cards>
        <p className="rez-meciuri-paragraf">Rezultatele Meciurilor Trecute</p>
        <p className="detalii-meciuri-paragraf">
          Detalii Despre Meciurile Viitoare
        </p>

        <div className="ultimul-si-urmatorul-meci">
          <div className="ultimul-meci">
            <div className="ultimul-meci-img">
              <img src="images/ultimul-meci.png" alt="" />
              <div className="content">
                <h2>Ultimul meci</h2>
                <button className="btn">Vezi rezultatele</button>
              </div>
            </div>
          </div>
          <div className="urmatorul-meci">
            <div className="urmatorul-meci-img">
              <img src="images/urmatorul-meci.jpg" alt="" />
            </div>
            <div className="content">
              <h2>Urmatorul meci</h2>
              <button className="btn">Cumpara bilet</button>
            </div>
          </div>
        </div>

        <p>Intalneste Echipa</p>

        <Cards titlu="">
          <Echipa />
        </Cards>
      </main>

      <footer>
        <h2 className="footer-title">Parteneri</h2>

        <ul className="parteneri">
          <Parteneri icon="images/partener1.png" path="" />
          <Parteneri icon="images/partener2.png" path="" />
          <Parteneri icon="images/partener3.png" path="" />
          <Parteneri icon="images/partener1.png" path="" />
          <Parteneri icon="images/partener2.png" path="" />
          <Parteneri icon="images/partener3.png" path="" />
          <Parteneri icon="images/partener1.png" path="" />
          <Parteneri icon="images/partener2.png" path="" />
        </ul>
        <div className="contact">
          <h2 className="footer-title">Contact</h2>
          <p>email</p>
          <p>telefon</p>
          <p>fax</p>
          <p>adresa: Bulevardul 1 Decembrie 1918 nr. 7, Suceava, Romania</p>
          <div className="social-icons">
            <h6>Be Social With Us</h6>

            <Link
              to={{ pathname: "https://www.facebook.com/" }}
              target="_blank"
            >
              <img src="images/facebook.png" alt="" />
            </Link>
            <Link>
              <img src="images/instagram.png" alt="" />
            </Link>
            <Link>
              <img src="images/login.jpg" alt="" />
            </Link>
          </div>
        </div>
        <br />
      </footer>
    </>
  );
};

export default Home;
