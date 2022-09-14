import logo from "./../../assets/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <Image
        src={logo}
        className="navbar-logo"
        alt="client Background"
        draggable={false}
        priority={true}
        width={96}
        height={75}
      />
    </div>
  );
};

export default Navbar;
