import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import DetaliiClub from "./Pages/DetaliiClub";
import CalendarMeciuri from "./Pages/CalendarMeciuri";
import NoutatiPage from "./Pages/NoutatiPage";
import NoutatePage from "./Pages/NoutatePage";
import Personal from "./Pages/Personal";
import VoleiJuvenil from "./Pages/VoleiJuvenil";
import Missing from "./Pages/Missing";
import AddNoutati from "./components/AddNoutati";
import api from "./api/API";
import EditNoutati from "./components/EditNoutati";
import Jucator from "./Pages/Jucator";
import Formular from "./Pages/Formular";
import Login from "./Pages/Login";
function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [noutati, setNoutati] = useState([]);

  useEffect(() => {
    const fetchNoutati = async () => {
      try {
        const response = await api.get("/noutati");
        if (response && response.data) setNoutati(response.data);
      } catch (err) {
        console.log(`Error:${err.message}`);
      }
    };
    fetchNoutati();
  }, []);
  useEffect(() => {
    const filteredResults = noutati.filter(
      (noutate) =>
        // console.log(noutate.textBody)
        noutate.body.toLowerCase().includes(search.toLowerCase()) ||
        noutate.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredResults.reverse());
  }, [noutati, search]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home noutati={searchResult} />} />
        <Route path="/detaliiclub" element={<DetaliiClub />} />
        <Route path="/calendarmeciuri" element={<CalendarMeciuri />} />
        <Route path="/calendarmeciuri/:id" element={<CalendarMeciuri />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/personal/jucator" element={<Jucator />} />
        <Route
          path="/noutati"
          element={
            <NoutatiPage
              noutati={searchResult}
              search={search}
              setSearch={setSearch}
            />
          }
        />

        <Route
          path="/noutati/:id"
          element={<NoutatePage noutati={noutati} setNoutati={setNoutati} />}
        />
        <Route
          path="/noutati/create"
          element={<AddNoutati noutati={noutati} setNoutati={setNoutati} />}
        />
        <Route
          path="/noutati/edit/:id"
          element={<EditNoutati noutati={noutati} setNoutati={setNoutati} />}
        />
        <Route path="/voleijuvenil" element={<VoleiJuvenil />} />
        <Route path="/inregistrare" element={<Formular />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
