import { home, discounts, delivery, payments, phone } from "./assets";
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

      <section className="discounts-section">
        <div className="discounts-item">
          <img src={discounts} alt="Discount" />
          <div className="discounts-text">
            <h2>Discounts</h2>
            <p>Promotions for loyal customers</p>
          </div>
        </div>

        <div className="discounts-item">
          <img src={delivery} alt="Free Delivery" />
          <div className="discounts-text">
            <h2>Free Delivery</h2>
            <p>For orders over 1000 lei</p>
          </div>
        </div>

        <div className="discounts-item">
          <img src={payments} alt="Online Payments" />
          <div className="discounts-text">
            <h2>Online Payments</h2>
            <p>With the bank card</p>
          </div>
        </div>

        <div className="discounts-item">
          <img src={phone} alt="Consultation" />
          <div className="discounts-text">
            <h2>Consultation</h2>
            <p>24/7 chat online</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
