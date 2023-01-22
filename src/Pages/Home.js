import React from "react";
import { useState, useEffect } from "react";
import HeroCardComponent from "../components/HeroCardComponent";
import Footer from "../components/Footer";
import Parteneri from "../components/Parteneri";
import MeciuriAPI from "../apis/MeciuriAPI";
import Meciuri from "../components/Meciuri";
// import Form from "../components/Form";
import NoutatiCardList from "../components/NoutatiCardList";
import EchipaCardList from "../components/EchipaCardList";
const Home = ({ noutati }) => {
  const [reqType, setReqType] = useState("meciuri");
  const [meciuri, setMeciuri] = useState([]);

  const [echipa, setEchipa] = useState([
    {
      id: 1,
      src: "images/jucator.png",
      text: "Jucatori",
      btn: "Vezi mai mult",
      path: "/noutati",
    },
    {
      id: 2,
      src: "images/jucator.png",
      text: "Antrenori",
      btn: "Vezi mai mult",
      path: "/noutati",
    },
  ]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await MeciuriAPI.get(reqType);
        console.log(response.data);
        // const data = await response.json();
        setMeciuri(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <>
      {/* <Form reqType={reqType} setReqType={setReqType} /> */}
      <header>
        <HeroCardComponent
          className="hero-component"
          src="images/prezentare.png"
          text="Lotul Curent"
          text2="CSM Volei Suceava"
          btn="Vezi mai mult"
          path="/noutati"
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
              {/* <MeciuriViitoare
                meciItemClassName="ora"
                meciuriViitoare={meciuriViitoare}
                setmeciuriViitoare={setmeciuriViitoare}
              /> */}
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
