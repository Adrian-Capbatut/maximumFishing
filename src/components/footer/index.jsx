import "./footer.css";
import { bgFooter } from "./assets";
import { footerData, socialIcons, termsLinks } from "./data";

const Footer = () => {
  return (
    <div className="footer">
      <img className="bg__image" src={bgFooter} alt="Header" /> 
      <div className="container">
        <div className="footer__content">
          
          <div className="footer__content-item">
            {footerData.map((column, index) => (
              <div key={index} className="footer__column">
                <h3 className="footer__title">{column.title}</h3>
                <ul className="footer__list">
                  {column.phones
                    ? column.phones.map((phone, i) => (
                        <li key={i} className="footer__list-item">
                          <a className="footer__link" href={`tel:${phone}`}>
                            {phone}
                          </a>
                        </li>
                      ))
                    : column.items.map((item, i) => (
                        <li key={i} className="footer__list-item">
                          {item}
                        </li>
                      ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer__social social">
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.link}>
                <img src={icon.icon} alt={icon.name} />
              </a>
            ))}
          </div>

          <div className="terms-and-policies terms">
            {termsLinks.map((link, index) => (
              <div key={index} className="terms-link">
                {link.icon && <img src={link.icon} alt={link.name} />}
                {link.name && <a href={link.link}>{link.name}</a>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
