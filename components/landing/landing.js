import { useEffect } from "react";
import Image from "next/image";

import page2 from "./../../assets/images/desktop/02.png";
import page3 from "./../../assets/images/desktop/03.png";
import page4 from "./../../assets/images/desktop/04.png";
import page5 from "./../../assets/images/desktop/05.png";
import page6 from "./../../assets/images/desktop/06.png";
import page7 from "./../../assets/images/desktop/07.png";
import page8 from "./../../assets/images/desktop/08.png";
import page9 from "./../../assets/images/desktop/09.png";
import page10 from "./../../assets/images/desktop/10.png";
import page11 from "./../../assets/images/desktop/11.png";
import page2M from "./../../assets/images/mobile/02M.jpeg";
import page3M from "./../../assets/images/mobile/03M.jpeg";
import page4M from "./../../assets/images/mobile/04M.jpeg";
import page5M from "./../../assets/images/mobile/05M.jpeg";
import page6M from "./../../assets/images/mobile/06M.jpeg";
import page7M from "./../../assets/images/mobile/07M.jpeg";
import page8M from "./../../assets/images/mobile/08M.jpeg";
import page9M from "./../../assets/images/mobile/09M.jpeg";
import page10M from "./../../assets/images/mobile/10M.jpeg";
import page11M from "./../../assets/images/mobile/11M.jpeg";

import useWindowSize from "../../hooks/useWindowSize";

const Landing = () => {
  const isMobile = useWindowSize().width < 500;

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <div className="royal-mint-menu" key={isMobile}>
      <div className="menu-overlay">
        <div className="menuImageContainer" id="snacks">
          <Image
            src={isMobile ? page2M : page2}
            className="menuImage"
            alt="snacks"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="breakfast">
          <Image
            src={isMobile ? page3M : page3}
            className="menuImage"
            alt="breakast"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="chinese">
          <Image
            src={isMobile ? page4M : page4}
            className="menuImage"
            alt="chinese"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="tandoori">
          <Image
            src={isMobile ? page5M : page5}
            className="menuImage"
            alt="tandoori"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="bread">
          <Image
            src={isMobile ? page6M : page6}
            className="menuImage"
            alt="bread"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="rice">
          <Image
            src={isMobile ? page7M : page7}
            className="menuImage"
            alt="rice"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="veg">
          <Image
            src={isMobile ? page8M : page8}
            className="menuImage"
            alt="veg"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="non-veg">
          <Image
            src={isMobile ? page9M : page9}
            className="menuImage"
            alt="non-veg"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="desserts">
          <Image
            src={isMobile ? page10M : page10}
            className="menuImage"
            alt="desserts"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="beverages">
          <Image
            src={isMobile ? page11M : page11}
            className="menuImage"
            alt="beverage"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
