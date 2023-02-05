import React from "react";
import { useState, useEffect } from "react";
import HeroCardComponent from "../components/HeroCardComponent";
import Footer from "../components/Footer";
import Parteneri from "../components/Parteneri";
import api from "../api/API";
import Meciuri, { MeciuriViitoare } from "../components/Meciuri";
// import Form from "../components/Form";
import NoutatiCardList from "../components/NoutatiCardList";
import EchipaCardList from "../components/EchipaCardList";
const Home = ({ noutati }) => {
  const [reqType, setReqType] = useState("meciuri");
  const [meciuri, setMeciuri] = useState([
    {
      id: 1,
      dataMeci: "12.12.2022/Juniori",
      logoGazda: "images/logo.png",
      logoDeplasare: "images/logo2.png",
      info: "1-2",
    },
  ]);
  const [meciuriViitoare, setMeciuriViitoare] = useState([
    {
      id: 2,
      dataMeci: "12.12.2022/Juniori",
      logoGazda: "images/logo.png",
      logoDeplasare: "images/logo2.png",
      info: "4-3",
    },
  ]);

  const [echipa, setEchipa] = useState([
    {
      id: 1,
      src: "images/jucator.png",
      text: "Jucatori",
      btn: "Vezi mai mult",
      path: "/personal",
    },
    {
      id: 2,
      src: "images/TudorOrasanu_172x147.jpg",
      text: "Antrenori",
      btn: "Vezi mai mult",
      path: "/personal",
    },
  ]);
  /*  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get(reqType);
        console.log(response.data);
        // const data = await response.json();
        setMeciuri(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchItems();
  }, [reqType]); */

  return (
    <>
      {/* <Form reqType={reqType} setReqType={setReqType} /> */}
      <header>
        <HeroCardComponent
          className="hero-component"
          src="images/prezentare.png"
          text="CSM Volei Suceava"
          text2="Despre noi"
          btn="Vezi mai mult"
          path="/detaliiclub"
        />
      </header>
      <main>
        <NoutatiCardList
          ulclass="cards-items"
          noutati={noutati}
          className="cards-item"
        />

        <div className="ultimul-si-urmatorul-meci">
          <div className="ultimul-meci">
            <div className="ultimul-meci-img">
              <img src="images/ultimul-meci.png" alt="" />
              <div className="content">
                <h2>Ultimul meci</h2>
                {/* <button className="btn">Vezi rezultatele</button> */}
                <Meciuri
                  meciItemClassName="score"
                  rezultate={meciuri}
                  // setRezultate={setRezultate}
                />
              </div>
            </div>
          </div>
          <div className="urmatorul-meci">
            <div className="urmatorul-meci-img">
              <img src="images/urmatorul-meci.jpg" alt="" />
            </div>
            <div className="content">
              <h2>Urmatorul meci</h2>
              {
                <MeciuriViitoare
                  meciItemClassName="ora"
                  meciuriViitoare={meciuriViitoare}
                  setmeciuriViitoare={setMeciuriViitoare}
                />
              }
            </div>
          </div>
        </div>

        <h1 className="intalneste-echipa-title">Intalneste Echipa</h1>
        {/* <Cards ulclass="echipa-container" titlu="">
          <Echipa />
        </Cards> */}
        <EchipaCardList
          ulclass="echipa-container"
          echipe={echipa}
          className="echipa"
        />
      </main>

      <footer>
        <Parteneri />
        <Footer />
      </footer>
    </>
  );
};

export default Home;
