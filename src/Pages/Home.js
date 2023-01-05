import React from "react";
import Cards, {
  CardItem,
  Noutati,
  Echipa,
  Parteneri,
} from "../components/Cards";
import Footer from "../components/Footer";
import Meciuri, { Rezultate, MeciuriViitoare } from "../components/Meciuri";

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
      <main>
        <Cards ulclass="cards-items" titlu="">
          <Noutati />
        </Cards>

        <div className="ultimul-si-urmatorul-meci">
          <div className="ultimul-meci">
            <div className="ultimul-meci-img">
              <img src="images/ultimul-meci.png" alt="" />
              <div className="content">
                <h2>Ultimul meci</h2>
                {/* <button className="btn">Vezi rezultatele</button> */}
                <Meciuri>
                  <Rezultate
                    dataMeci="12.12.2022/Juniori"
                    logoGazda="images/logo.png"
                    logoDeplasare="images/logo2.png"
                    scor="1-4"
                  />
                </Meciuri>
              </div>
            </div>
          </div>
          <div className="urmatorul-meci">
            <div className="urmatorul-meci-img">
              <img src="images/urmatorul-meci.jpg" alt="" />
            </div>
            <div className="content">
              <h2>Urmatorul meci</h2>
              {/* <button className="btn">Cumpara bilet</button> */}
              <Meciuri>
                <MeciuriViitoare
                  dataMeci="12.12.2022/Juniori"
                  logoGazda="images/logo.png"
                  logoDeplasare="images/logo2.png"
                  ora="3:00"
                />
              </Meciuri>
            </div>
          </div>
        </div>

        <h1 className="intalneste-echipa-title">Intalneste Echipa</h1>
        <Cards ulclass="echipa-container" titlu="">
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
        <Footer />
      </footer>
    </>
  );
};

export default Home;
