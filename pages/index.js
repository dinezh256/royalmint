import React from "react";
import page1 from "./../assets/images/01.png";
import page2 from "./../assets/images/02.png";
import page3 from "./../assets/images/03.png";
import page4 from "./../assets/images/04.png";
import Image from 'next/image';
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="main-app">
      <div className="main-app-overlay">
        <Navbar />
        {/* <Image
          src={page1}
          className="clientBackground"
          alt="client Background"
          draggable={false}
          priority={true}
        /> */}
        <Image
          src={page2}
          className="clientBackground"
          alt="client Background"
          draggable={false}
          priority={true}
        />
        <Image
          src={page3}
          className="clientBackground"
          alt="client Background"
          draggable={false}
          priority={true}
        />
        <Image
          src={page4}
          className="clientBackground"
          alt="client Background"
          draggable={false}
          priority={true}
        />
      </div>
    </div>
  )
}
