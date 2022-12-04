import React from "react";
import Button from "../components/Button";
const Home = () => {
  return (
    <>
      <header>
        <h1>Home Page</h1>
        <section className="prezentare"></section>
        <Button text="Vezi mai mult" />
      </header>

      <main className="home-main">
        <h2>Noutati</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          explicabo! Maiores voluptatum sint quo harum omnis nam repellat atque
          fuga perspiciatis dicta illum natus illo, sit, cumque debitis
          laboriosam nobis.
        </p>
      </main>

      <footer>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          inventore in fugiat culpa enim. Harum dignissimos amet, est magnam
          nihil sed. Esse modi suscipit soluta! Odit sapiente et repudiandae
          asperiores.
        </p>
      </footer>
    </>
  );
};

export default Home;
