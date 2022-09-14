import { useState } from "react";
import logo from "./../../assets/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((state) => {
      if (state) {
        // setTimeout(() => 
        document.body.classList.remove("menu-opened");
        
        // , 1000);
      } else {
        document.body.classList.add("menu-opened");
      }
      return !state;
    });
  };
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
      <div className="menu">
        <div
          className={`menu-icon ${openMenu ? "opened" : "closed"}`}
          onClick={handleOpenMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className={`menu-links ${openMenu ? "open" : "close"}`}>
          <a href="#snacks" onClick={handleOpenMenu}>
            Snacks
          </a>
          <a href="#breakfast" onClick={handleOpenMenu}>
            Breakfast
          </a>
          <a href="#chinese" onClick={handleOpenMenu}>
            Chinese
          </a>
          <a href="#tandoori" onClick={handleOpenMenu}>
            Tandoori
          </a>
          <a href="#bread" onClick={handleOpenMenu}>
            Bread
          </a>
          <a href="#rice" onClick={handleOpenMenu}>
            Rice
          </a>
          <a href="#veg" onClick={handleOpenMenu}>
            Veg Course
          </a>
          <a href="#non-veg" onClick={handleOpenMenu}>
            Non-Veg Course
          </a>
          <a href="#desserts" onClick={handleOpenMenu}>
            Desserts
          </a>
          <a href="#beverages" onClick={handleOpenMenu}>
            Beverages
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
