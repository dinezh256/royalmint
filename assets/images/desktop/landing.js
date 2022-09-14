import { useEffect, useState } from "react";
import Image from "next/image";

import page2 from "./../../../assets/images/desktop/02.png";
import page3 from "./../../../assets/images/desktop/03.png";
import page4 from "./../../../assets/images/desktop/04.png";
import page5 from "./../../../assets/images/desktop/05.png";
import page6 from "./../../../assets/images/desktop/06.png";
import page7 from "./../../../assets/images/desktop/07.png";
import page8 from "./../../../assets/images/desktop/08.png";
import page9 from "./../../../assets/images/desktop/09.png";
import page10 from "./../../../assets/images/desktop/10.png";
import page11 from "./../../../assets/images/desktop/11.png";
import page2M from "./../../../assets/images/mobile/02M.png";
import page3M from "./../../../assets/images/mobile/03M.png";
import page4M from "./../../../assets/images/mobile/04M.png";
import page5M from "./../../../assets/images/mobile/05M.png";
import page6M from "./../../../assets/images/mobile/06M.png";
import page7M from "./../../../assets/images/mobile/07M.png";
import page8M from "./../../../assets/images/mobile/08M.png";
import page9M from "./../../../assets/images/mobile/09M.png";
import page10M from "./../../../assets/images/mobile/10M.png";
import page11M from "./../../../assets/images/mobile/11M.png";

import { isMobile } from "../../../utils";

const Landing = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  return (
    <div className="main-app">
      <div className="main-app-overlay">
        <div className="menuImageContainer" id="snacks">
          <Image
            src={isMobileDevice ? page2M : page2}
            className="menuImage"
            alt="client Background"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="breakfast">
          <Image
            src={isMobileDevice ? page3M : page3}
            className="menuImage"
            alt="client Background"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="chinese">
          <Image
            src={isMobileDevice ? page4M : page4}
            className="menuImage"
            alt="client Background"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="tandoori">
          <Image
            src={isMobileDevice ? page5M : page5}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="bread">
          <Image
            src={isMobileDevice ? page6M : page6}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="rice">
          <Image
            src={isMobileDevice ? page7M : page7}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="veg">
          <Image
            src={isMobileDevice ? page8M : page8}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="non-veg">
          <Image
            src={isMobileDevice ? page9M : page9}
            className="menuImage"
            alt="client Background"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="desserts">
          <Image
            src={isMobileDevice ? page10M : page10}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="beverages">
          <Image
            src={isMobileDevice ? page11M : page11}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
