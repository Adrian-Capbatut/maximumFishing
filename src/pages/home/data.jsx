import DiscountSectionItem from "./DiscountSectionItem";
import NewSectionItem from "./NewSectionItem";
import {
  discounts,
  delivery,
  payments,
  phone,
  new1,
  new2,
  new3,
  new4,
} from "./assets";

const discountsData = [
  {
    image: discounts,
    title: "Discounts",
    text: "Promotions for loyal customers",
  },
  {
    image: delivery,
    title: "Free Delivery",
    text: "For orders over 1000 lei",
  },
  {
    image: payments,
    title: "Online Payments",
    text: "With the bank card",
  },
  {
    image: phone,
    title: "Consultation",
    text: "24/7 chat online",
  },
];

const newData = [
  {
    image: new1,
    text: "Barcă Kolibri gonflabilă KM 300",
    price: "10,499",
  },
  {
    image: new2,
    text: "Set de camping cu masa si 4 scaune",
    price: "699",
  },
  {
    image: new3,
    text: "Barca gonflabila BARK B 270",
    price: "5,899",
  },
  {
    image: new4,
    text: "Mini boilies plutitoare asortate ",
    price: "15",
  },
];

const DiscountsSection = () => {
  return (
    <section className="discounts-section">
      {discountsData.map((item, index) => (
        <DiscountSectionItem
          key={index}
          image={item.image}
          title={item.title}
          text={item.text}
        />
      ))}
    </section>
  );
};

const NewSection = () => {
  return (
    <section className="new-section">
      <h2 className="new-section__title title__section">New</h2>
      <div className="new-section__blocks">
        {newData.map((item, index) => (
          <NewSectionItem
            key={index}
            image={item.image}
            text={item.text}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export { DiscountsSection, NewSection };
