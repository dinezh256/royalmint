import Image from "next/image";
import contact from "../../assets/images/contact.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Image src={contact} alt="contact" draggable={false} priority={true} />
    </div>
  );
};

export default Footer;
