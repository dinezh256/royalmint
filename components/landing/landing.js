import Image from "next/image";
import page2 from "./../../assets/images/02.png";
import page3 from "./../../assets/images/03.png";
import page4 from "./../../assets/images/04.png";
import page5 from "./../../assets/images/05.png";
import page6 from "./../../assets/images/06.png";
import page7 from "./../../assets/images/07.png";
import page8 from "./../../assets/images/08.png";
import page9 from "./../../assets/images/09.png";
import page10 from "./../../assets/images/10.png";
import page11 from "./../../assets/images/11.png";

const Landing = () => {
  return (
    <div className="main-app">
      <div className="main-app-overlay">
        <div className="menuImageContainer" id="snacks">
          <Image
            src={page2}
            className="menuImage"
            alt="client Background"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="breakfast">
          <Image
            src={page3}
            className="menuImage"
            alt="client Background"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="chinese">
          <Image
            src={page4}
            className="menuImage"
            alt="client Background"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="tandoori">
          <Image
            src={page5}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="bread">
          <Image
            src={page6}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="rice">
          <Image
            src={page7}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="veg">
          <Image
            src={page8}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="non-veg">
          <Image
            src={page9}
            className="menuImage"
            alt="client Background"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="menuImageContainer" id="desserts">
          <Image
            src={page10}
            className="menuImage"
            alt="client Background"
            draggable={false}
          />
        </div>
        <div className="menuImageContainer" id="beverages">
          <Image
            src={page11}
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
