import React, { Fragment, useState } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import { json, Link } from "react-router-dom";
import "./App.css";
import Login from "../Pages/Login";

const Formular = () => {
  /* const [form, setForm] = useState({
        Nume: '',
        Prenume: '',
        Email: '',
        Parola: '',
        confParola: '',
        RadioB: ''

    });

    const [error, setError] = useState ({
        Nume: '',
        Prenume: '',
        Email: '',
        Parola: '',
        confParola: '',
        RadioB: ''

    })
    const onChange = (e) =>{
    
        const { value, name,type, checked } = e.target;
        setForm((state) =>({
            ...state,
            [name]: type ==='checkbox'? checked: value
        }));
    }
    const showData = () =>{
        console.log('Form', form);
        console.log(form);
    }

    const onSubmit = async e =>{
        e.preventDefault();
        try {
            const body = {form};
            const Response = await fetch("http//localhost:3001/inregistrare",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(Response);
        } catch (err) {
            console.error(err.message);
        }
        
       
    }
  
                           
*/
  const register = () => {
    if (parolaReg != confParolaReeg) console.log("sda");
    else {
      Axios.post("http://localhost:3001/inregistrare", {
        Categorie: categorieReg,
        Nume: numeReg,
        Prenume: prenumeReg,
        Email: emailReg,
        Parola: parolaReg,
      }).then((response) => {
        console.log(response);
      });
    }
  };

  const [categorieReg, setCategorie] = useState("");
  const [numeReg, setNume] = useState("");
  const [prenumeReg, setPrenume] = useState("");
  const [emailReg, setEmail] = useState("");
  const [parolaReg, setParola] = useState("");
  const [confParolaReeg, setConfParola] = useState("");
  return (
    <section>
      <div className="form">
        <h3 className="Titlu2">Creeaza Cont</h3>
        <form id="form" className="flex flex-col">
          <div class="form-body">
            <div
              className="radio"
              onChange={(e) => setCategorie(e.target.value)}
            >
              <label className="r1">
                <input type="radio" id="radioB1" value="admin" /> Admin
              </label>
              <label className="r2">
                <input type="radio" id="radioB2" value="creator" /> Creator de
                continut
              </label>
            </div>
            <div className="username">
              <label className="form__label" id="labelNume" for="firstName">
                Nume{" "}
              </label>
              <input
                className="form__input"
                required
                onChange={(e) => setNume(e.target.value)}
                type="text"
                id="firstName"
                placeholder="Nume"
              />
            </div>
            <div className="lastname">
              <label className="form__label" id="Prenume" for="lastName">
                Prenume
              </label>
              <input
                type="text"
                name=""
                required
                id="lastName"
                onChange={(e) => setPrenume(e.target.value)}
                className="form__input"
                placeholder="Prenume"
              />
            </div>
            <div className="email">
              <label className="form__label" id="Email" for="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="form__input"
                placeholder="Email"
              />
            </div>
            <div className="password">
              <label className="form__label" id="Parola" for="password">
                Parola
              </label>
              <input
                className="form__input"
                required
                type="password"
                onChange={(e) => setParola(e.target.value)}
                id="password"
                placeholder="Parola"
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" for="confirmPassword">
                Confirma Parola{" "}
              </label>
              <input
                className="form__input"
                required
                type="password"
                id="confirmPassword"
                placeholder="Confirma Parola"
              />
            </div>
          </div>
          <div class="footer">
            <button className="btn1" id="buttonL" onClick={register}>
              Intra{" "}
            </button>
          </div>

          <label class="Cont">
            <span class="AiCont">Ai deja un cont? </span>
            <Link to="/login">
              <span class="IntraCont">.Intra in cont </span>
            </Link>
          </label>
        </form>
      </div>
    </section>
  );
};
export default Formular;
