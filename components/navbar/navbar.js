import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../assets/images/logo.png";
import useWindowSize from "../../hooks/useWindowSize";
import { hasDiscountExpired } from "../../utils";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useWindowSize().width < 500;

  const handleOpenMenu = (state) => {
    setOpenMenu(state);

    if (isMobile) {
      if (!state) document.body.classList.remove("menu-opened");
      else document.body.classList.add("menu-opened");
    }
  };

  const MenuLink = ({ id, children }) => (
    <h6
      onClick={() => {
        handleOpenMenu(false);
        setTimeout(() => scrollToComponent(id), isMobile ? 500 : 0);
      }}
    >
      {children}
    </h6>
  );

  const scrollToComponent = (id) => {
    const doc = window.document.getElementById(id);
    if (doc) {
      const position = doc.getBoundingClientRect();
      window.scrollTo(
        position.left,
        position.top +
          window.scrollY -
          (hasDiscountExpired ? 90 : isMobile ? 120 : 142)
      );
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
            <MenuLink id="beverages">Beverage</MenuLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
