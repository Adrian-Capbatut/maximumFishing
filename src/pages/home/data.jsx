import DiscountSectionItem from './DiscountSectionItem';
import { discounts, delivery, payments, phone } from './assets';

const discountsData = [
  {
    image: discounts,
    title: 'Discounts',
    text: 'Promotions for loyal customers',
  },
  {
    image: delivery,
    title: 'Free Delivery',
    text: 'For orders over 1000 lei',
  },
  {
    image: payments,
    title: 'Online Payments',
    text: 'With the bank card',
  },
  {
    image: phone,
    title: 'Consultation',
    text: '24/7 chat online',
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

export default DiscountsSection;