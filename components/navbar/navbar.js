import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../assets/images/logo.png";
import { isMobile } from "../../utils";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((state) => {
      if (isMobile()) {
        if (state) {
          document.body.classList.remove("menu-opened");
        } else {
          document.body.classList.add("menu-opened");
        }
      }
      return !state;
    });
  };
  const MenuLink = ({ href, children }) => (
    <a href={href} onClick={handleOpenMenu}>
      {children}
    </a>
  );
  return (
    <div className="navbar">
      <Link href="/">
        <Image
          src={logo}
          className="navbar-logo"
          alt="client Background"
          draggable={false}
          priority={true}
          width={80}
          height={62.5}
        />
      </Link>
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
          <MenuLink href="#snacks">Snacks</MenuLink>
          <MenuLink href="#breakfast">Breakfast</MenuLink>
          <MenuLink href="#chinese">Chinese</MenuLink>
          <MenuLink href="#tandoori">Tandoori</MenuLink>
          <MenuLink href="#bread">Bread</MenuLink>
          <MenuLink href="#rice">Rice</MenuLink>
          <MenuLink href="#veg">Veg Course</MenuLink>
          <MenuLink href="#non-veg">Non-Veg Course</MenuLink>
          <MenuLink href="#desserts">Desserts</MenuLink>
          <MenuLink href="#beverages">Beverages</MenuLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
