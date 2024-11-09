import React from "react";
import HomeMenuCard from "./HomeMenuCard";

async function Menu() {
  return (
    <div className="bg-[#001100] min-h-[100vh] w-screen">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-3 lg:px-10 lg:py-18 px-14 py-10">
          <HomeMenuCard category="Drins" />
          <HomeMenuCard category="Drins" />
          <HomeMenuCard category="Drins" />
          <HomeMenuCard category="Drins" />
          <HomeMenuCard category="Drins" />
          <HomeMenuCard category="Drins" />
          <HomeMenuCard category="Drins" />
          <HomeMenuCard category="Drins" />
      </div>
    </div>
  );
}

export default Menu;
