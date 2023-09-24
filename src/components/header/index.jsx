import { logo, search } from "./assets";

import "./header.css";

import Menu from "../Menu";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#">
            <img className="logo" src={logo} alt="Logo" />
          </a>
          <Menu />
          <div className="search">
            <img src={search} alt="Search" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
