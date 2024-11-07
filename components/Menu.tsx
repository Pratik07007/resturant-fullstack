import React from "react";
import MenuItemsCard from "./MenuItemsCard";

function Menu() {
  return (
    <div className="bg-[#001100] min-h-[100vh] w-screen">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-3 lg:px-10 lg:py-18 px-14 py-10">
        <MenuItemsCard category="Drinks" />
        <MenuItemsCard category="Drinks" />
        <MenuItemsCard category="Drinks" />
        <MenuItemsCard category="Drinks" />
        
      </div>
    </div>
  );
}

export default Menu;
