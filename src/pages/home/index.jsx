import { home, license } from "./assets";
import "./home.css";
import DiscountsSection from "./data";

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

      <DiscountsSection />

      <section className="license">
        <h2 className="license__title">License</h2>

        <div className="license__content">
          <div className="license__content-left">
            <img className="license__img" src={license} alt="License img" />
            <button className="license__button">
              <a
                href="https://e-pescuit.mediu.gov.md/"
                target="_blank"
                rel="noopener noreferrer">
                CLICK HERE
              </a>
            </button>
          </div>

          <div className="license__content-right">
            <h3 className="license__subtitle">ACCESS TO THE BORDER AREA</h3>
            <p className="license__text license__text-first">
              Fishing on the Dniester and Prut near the customs checkpoints is
              only allowed on the basis of the access permit in the border area,
              which is issued within the customs checkpoints or online at{" "}
              <a
                href="https://epermis.border.gov.md/"
                target="_blank"
                rel="noopener noreferrer">
                epermis.border.gov.md
              </a>
              . This rule is not valid only for people who live within 15 km of
              the customs post.
            </p>

            <h3 className="license__subtitle">HOW TO GET?</h3>
            <p className="license__text">
              The fishing permit is a document issued by the environmental
              agency that confirms the possibility of a person engaging in sport
              or amateur fishing in the rivers of the Republic of Moldova.
            </p>
            <a
              className="license-term"
              href="https://am.gov.md/node/135"
              target="_blank"
              rel="noopener noreferrer">
              Terms and conditions for sport and amateur fishing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
