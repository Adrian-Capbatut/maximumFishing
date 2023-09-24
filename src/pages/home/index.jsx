import home from "./assets/home.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <section className="home">
        <div className="home__info">
          <h1 className="home__title">LET’S GO FISHING!</h1>
          <p className="home__text">
            We are happy to support and promote fishing as a sport and lifestyle
            around the world. We help beginners and experienced members prepare
            for a new round.
          </p>
        </div>
        <img className="home__img" src={home} alt="Home-img" />
      </section>
    </div>
  );
};

export default Home;
