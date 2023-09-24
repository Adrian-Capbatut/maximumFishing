const DiscountSectionItem = ({ image, title, text }) => {
  return (
    <div className="discounts-item">
      <img src={image} alt={title} />
      <div className="discounts-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DiscountSectionItem;