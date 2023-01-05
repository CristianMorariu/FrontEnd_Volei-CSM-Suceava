import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import DetaliiClub from "./Pages/DetaliiClub";
import CalendarMeciuri from "./Pages/CalendarMeciuri";
import Noutati from "./Pages/Noutati";
import Personal from "./Pages/Personal";
import VoleiJuvenil from "./Pages/VoleiJuvenil";

function App() {
  return (
    <>
      {/* asta cred ca pot sa-l duc in index.js */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detaliiclub" element={<DetaliiClub />} />
          <Route path="/calendarmeciuri" element={<CalendarMeciuri />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/noutati" element={<Noutati />} />
          <Route path="/voleijuvenil" element={<VoleiJuvenil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
