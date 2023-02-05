import React from "react";
import Meciuri, { MeciuriViitoare } from "../components/Meciuri";
import { useState } from "react";
import Footer from "../components/Footer";
// import "..components/Meciuri.css";
const CalendarMeciuri = () => {
  const [rezultate, setRezultate] = useState([
    {
      id: 1,
      dataMeci: "12.12.2022/Juniori",
      logoGazda: "images/logo.png",
      logoDeplasare: "images/logo2.png",
      info: "4-3",
    },
    {
      id: 2,
      dataMeci: "12.12.2022/Juniori",
      logoGazda: "images/logo.png",
      logoDeplasare: "images/logo2.png",
      info: "4-3",
    },
    {
      id: 3,
      dataMeci: "12.12.2022/Juniori",
      logoGazda: "images/logo.png",
      logoDeplasare: "images/logo2.png",
      info: "4-3",
    },
    {
      id: 4,
      dataMeci: "12.12.2022/Juniori",
      logoGazda: "images/logo.png",
      logoDeplasare: "images/logo2.png",
      info: "4-3",
    },
  ]);
  const [meciuriViitoare, setmeciuriViitoare] = useState([
    {
      id: 1,
      dataMeci: "12.12.2022/Juniori",
      logoGazda: "images/logo.png",
      logoDeplasare: "images/logo2.png",
      info: "4:00",
    },
    {
      id: 2,
      dataMeci: "12.12.2022/Juniori",
      logoGazda: "images/logo.png",
      logoDeplasare: "images/logo2.png",
      info: "4:00",
    },
  ]);
  return (
    <>
      <p className="data-rezultatelor">Rezultate</p>
      <Meciuri
        classname="calendarmeciuri"
        meciItemClassName="score"
        rezultate={rezultate}
      />

      <p className="data-rezultatelor">Meciuri Viitoare</p>
      <MeciuriViitoare
        classname="calendarmeciuri"
        meciItemClassName="ora"
        meciuriViitoare={meciuriViitoare}
      />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default CalendarMeciuri;
