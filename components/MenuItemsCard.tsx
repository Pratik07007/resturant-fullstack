import Image from "next/image";
import React from "react";
import menu from "../public/menu-item.webp";

function MenuItemsCard({ category }: { category: string }) {
  return (
    <div className="lg:w-[48%] h-[60vh] w-full relative ">
      <Image className="w-full h-full" src={menu} alt="Menu Items" />
      <p className=" font-bold text-white text-3xl absolute left-1/2 top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 ">
        {category}
      </p>
    </div>
  );
}

export default MenuItemsCard;
