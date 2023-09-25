const NewSectionItem = ({ image, text, price }) => {
  return (
    <div className="new-section__block">
      <img src={image} alt={text} className="new-section__image" />
      <p className="new-section__text">{text}</p>
      <p className="new-section__price">{price}MDL</p>
    </div>
  );
};

export default NewSectionItem;
