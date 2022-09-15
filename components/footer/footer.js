import { Instagram, Facebook, Phone, Map } from "react-feather";

const Footer = () => {
  return (
    <div className="footer">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/theroyalrestro/"
      >
        <Instagram color="#155457" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/theroyalmint7"
      >
        <Facebook color="#155457" />
      </a>
      <a href="tel:+918863840217">
        <Phone color="#155457" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://goo.gl/maps/qFVoHTmu35hxwZiKA"
      >
        <Map color="#155457" />
      </a>
    </div>
  );
};

export default Footer;
