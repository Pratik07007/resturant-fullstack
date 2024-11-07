import Image from "next/image";
import React from "react";
import hero from "../public/hero-main.jpg";

function HeroMain() {
  return (
    <div className="h-[calc(100vh-250px)] flex items-center justify-center">
      <Image alt="Hero Image" className="h-full w-screen" src={hero} />
      <div></div>
      <h1 className="lg:text-8xl text-5xl text-white  absolute text-center font-medium">
        welcome ! <br /> Sit back and enjoy
      </h1>
    </div>
  );
}

export default HeroMain;
