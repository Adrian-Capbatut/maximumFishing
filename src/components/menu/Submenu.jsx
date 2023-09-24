const Submenu = ({ categories }) => {
  return (
    <ul className="submenu">
      {categories.map((category, index) => (
        <li key={index}>
          <a href="#">{category}</a>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
