import React, { Fragment, useState } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import { json, Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Rezultate } from "../components/Meciuri";
import "./App.css";

const Login = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");

  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("authenticated") || false
  );

  const navigate = Navigate;

  const handleClick = () => {
    Axios.get("http://localhost:3001/login", {
      Email: email,
      Parola: parola,
    })
      .then((respone) => {
        navigate = "/Home";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      Email: email,
      Parola: parola,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <section>
      <div className="form">
        <div className="form-body">
          <h3 className="Titlu11">Intra in cont</h3>
          <form id="form" className="flex flex-col">
            <div className="email">
              <label className="form__label" for="firEmailstName">
                Email{" "}
              </label>
              <input
                type="text"
                className="form__input"
                required
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="parola">
              <label className="form__label" for="confirmPassword">
                Parola{" "}
              </label>
              <input
                className="form__input"
                required
                type="password"
                id="confirmPassword"
                onChange={(e) => setParola(e.target.value)}
                placeholder="Parola"
              />
            </div>
            <div class="footer">
              <Link to="/">
                <button className="btn2">Intra in cont</button>
              </Link>
              <div className="linie">
                <span className="AiCont">Nu ai cont? </span>
                <Link to="/inregistrare">
                  <span className="IntraCont">.Creeaza cont </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </section>
  );
};
export default Login;
