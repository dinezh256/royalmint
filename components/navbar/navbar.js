import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../assets/images/logo.png";
import { isMobile } from "../../utils";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (state) => {
    setOpenMenu(state);

    if (isMobile()) {
      if (!state) {
        document.body.classList.remove("menu-opened");
      } else {
        document.body.classList.add("menu-opened");
      }
    }
  };

  const MenuLink = ({ id, children }) => (
    <span
      onClick={() => {
        handleOpenMenu(!openMenu);
        scrollToComponent(id);
      }}
    >
      {children}
    </span>
  );

  const scrollToComponent = (id) => {
    const doc = window.document.getElementById(id);
    if (doc) {
      const position = doc.getBoundingClientRect();
      window.scrollTo(position.left, position.top + window.scrollY - 90);
    }
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div
          className={`navbar-logo ${openMenu ? "opened" : ""}`}
          onClick={() => handleOpenMenu(false)}
        >
          <Link href="/">
            <Image
              src={logo}
              alt="client Background"
              draggable={false}
              priority={true}
              width={80}
              height={62.5}
            />
          </Link>
        </div>
        <div className="menu">
          <div
            className={`menu-icon ${openMenu ? "opened" : "closed"}`}
            onClick={() => handleOpenMenu(!openMenu)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className={`menu-links ${openMenu ? "open" : "close"}`}>
            <MenuLink id="snacks">Snacks</MenuLink>
            <MenuLink id="breakfast">Breakfast</MenuLink>
            <MenuLink id="chinese">Chinese</MenuLink>
            <MenuLink id="tandoori">Tandoori</MenuLink>
            <MenuLink id="bread">Bread</MenuLink>
            <MenuLink id="rice">Rice</MenuLink>
            <MenuLink id="veg">Veg</MenuLink>
            <MenuLink id="non-veg">Non-Veg</MenuLink>
            <MenuLink id="desserts">Desserts</MenuLink>
            <MenuLink id="beverages">Beverages</MenuLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
