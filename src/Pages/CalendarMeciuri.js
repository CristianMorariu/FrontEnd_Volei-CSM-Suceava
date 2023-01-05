import React from "react";
import Meciuri, { Rezultate } from "../components/Meciuri";
const CalendarMeciuri = () => {
  return (
    <>
      <p className="data-rezultatelor">Rezultate</p>
      <Meciuri classname="calendarmeciuri">
        <Rezultate
          dataMeci="12.12.2022/Juniori"
          logoGazda="images/logo.png"
          logoDeplasare="images/logo2.png"
          scor="1-4"
        />
        <Rezultate
          dataMeci="12.12.2022/Juniori"
          logoGazda="images/logo.png"
          logoDeplasare="images/logo2.png"
          scor="1-4"
        />
        <Rezultate
          dataMeci="12.12.2022/Juniori"
          logoGazda="images/logo.png"
          logoDeplasare="images/logo2.png"
          scor="1-4"
        />
        <Rezultate
          dataMeci="12.12.2022/Juniori"
          logoGazda="images/logo.png"
          logoDeplasare="images/logo2.png"
          scor="1-4"
        />
        <Rezultate
          dataMeci="12.12.2022/Juniori"
          logoGazda="images/logo.png"
          logoDeplasare="images/logo2.png"
          scor="1-4"
        />
        <Rezultate
          dataMeci="12.12.2022/Juniori"
          logoGazda="images/logo.png"
          logoDeplasare="images/logo2.png"
          scor="1-4"
        />
      </Meciuri>
      <p className="data-rezultatelor">Meciuri Viitoare</p>
    </>
  );
};

export default CalendarMeciuri;
