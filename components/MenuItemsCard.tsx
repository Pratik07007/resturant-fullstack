import React from "react";

function MenuItemsCard({ category }: { category: string }) {
  return (
    <div className="lg:w-[48%] h-[60vh] w-full relative ">
      <img
        className="w-full h-full"
        src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt=""
      />
      <p className=" font-bold text-white text-3xl absolute left-1/2 top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 ">
        {category}
      </p>
    </div>
  );
}

export default MenuItemsCard;
