import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <Navbarbody>
      <Link to="/" className="nav-item">
        <img src="images/CSM Suceava logo.png" alt="logo" />
      </Link>
      <NavItem link="/detaliiclub" name="Detalii Club" />
      <NavItem link="/calendarmeciuri" name="Calendar meciuri" />
      <NavItem link="/personal" name="Personal">
        <DropdownMenu>
          <DropDownItem name="Salut" />
          <DropDownItem name="Salut2" />
        </DropdownMenu>
      </NavItem>
      <NavItem link="/noutati" name="Noutati" />
      <NavItem link="/voleijuvenil" name="Volei Juvenil">
        <DropdownMenu>
          <DropDownItem name="Salut3" />
          <DropDownItem name="Salut4" />
        </DropdownMenu>
      </NavItem>
    </Navbarbody>
  );
};

const Navbarbody = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <Link
        to={props.link}
        className="link-button"
        onClick={() => setOpen(!open)}
      >
        {props.name}
      </Link>
      {open && props.children}
    </li>
  );
};

const DropdownMenu = (props) => {
  return (
    <div className="dropdown">
      <ul>{props.children}</ul>
    </div>
  );
};
const DropDownItem = (props) => {
  return (
    <li className="menu-item">
      <a href="#" className="link-button">
        {/* aici in loc de a trebuie sa pun link si sa-i dau o cale */}
        {props.name}
      </a>
    </li>
  );
};
export default Navbar;
