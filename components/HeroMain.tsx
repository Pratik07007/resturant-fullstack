import React from "react";

function HeroMain() {
  return (
    <div className="h-[calc(100vh-250px)] flex items-center justify-center">
      <img
        alt=""
        className="h-full w-screen"
        src="https://images.squarespace-cdn.com/content/v1/61aa60502b7f5f4d6d1ce8c9/eedfe239-778c-4f9d-b125-3a4f58df378d/Elmer_duotone_2500x1500.jpg"
      />
      <div></div>
      <h1 className="lg:text-8xl text-5xl text-white  absolute text-center font-medium">
        welcome ! <br /> Sit back and enjoy
      </h1>
    </div>
  );
}

export default HeroMain;
