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

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [noutati, setNoutati] = useState([
    {
      id: 1,
      src: "images/stire.jpg",
      datetime: "23 08 2012 12:32",
      title: "Prima",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus totam vero consequuntur sequi! Odit dolore exercitationem voluptate assumenda, modi adipisci quisquam maiores ex doloribus ad, praesentium reiciendis qui fugiat!",
      // path: "/noutati",
    },
    {
      id: 2,
      src: "images/stire2.jpg",
      datetime: "23 08 2012 12:32",
      title: "A doua",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus totam vero consequuntur sequi! Odit dolore exercitationem voluptate assumenda!",
      // path: "/noutati",
    },
    {
      id: 3,
      src: "images/stire2.jpg",
      datetime: "23 08 2012 12:32",
      title: "A treia",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus totam vero consequuntur sequi! Odit dolore exercitationem voluptate assumenda!",
      // path: "/noutati",
    },
  ]);
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
        <Route path="/voleijuvenil" element={<VoleiJuvenil />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
