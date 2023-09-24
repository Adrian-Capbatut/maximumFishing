const Submenu = ({ categori }) => {
  return (
    <ul className="submenu">
      {categori.map((category, index) => (
        <li key={index}>
          <a href="#">{category}</a>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
