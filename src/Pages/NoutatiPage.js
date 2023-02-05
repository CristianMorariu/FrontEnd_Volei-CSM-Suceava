import React from "react";
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NoutatiCardList from "../components/NoutatiCardList";
import "./NoutatiPage.css";

const NoutatiPage = ({ noutati, search, setSearch }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/noutati/create`;
    navigate(path);
  };
  return (
    <>
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="search">Cauta in Noutati</label>
        <input
          id="search"
          type="text"
          placeholder="Cauta in Noutati"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="addNoutati">
        <label style={{ padding: "0 10px" }} htmlFor="addNoutate">
          Adaugă o nouă știre
        </label>
        <button type="addNoutate" aria-label="AddNoutate" onClick={routeChange}>
          <FaPlus />
        </button>
      </div>

      {noutati.length ? (
        <NoutatiCardList
          ulclass="cards-items"
          noutati={noutati}
          className="cards-item"
        />
      ) : (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>
          Nicio noutate de afisat.
        </p>
      )}

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default NoutatiPage;
