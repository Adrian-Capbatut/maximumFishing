import arrow from "./assets/arrow.svg";
import links from "./data";

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        {links.map(({ title, isSubmenu, submenuContent }) => (
          <li key={title}>
            <a href="#">
              {title}
              {isSubmenu && <img className="arrow" src={arrow} alt="arrow" />}
            </a>
            {submenuContent}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
