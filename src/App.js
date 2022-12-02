import { Navbar, NavItem } from "./components/mainpage/Navbar";
import Button from "./components/Button";
import Noutati from "./components/Noutati";
function App() {
  return (
    <>
      <header>
        <Navbar>
          <a href="#" className="nav-item">
            <img src="images/logo.png" alt="logo" />
          </a>
          <NavItem link="Detalii Club" />
          <NavItem link="Calendar meciuri" />
          <NavItem link="Personal" />
          <NavItem link="Noutati" />
          <NavItem link="Volei Juvenil" />
        </Navbar>
      </header>
      <main className="main">
        <section className="prezentare">
          <Button text="Vezi mai mult" />
        </section>
      </main>
      <Noutati />
      <footer></footer>
    </>
  );
}

export default App;
