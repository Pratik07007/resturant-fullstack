import MenuCard from "@/components/MenuCard";
import Select from "@/components/Select";
import prisma from "@/db";
import React from "react";

async function Menu({ params }) {
  const slug = await params?.Category;
  const menuItems = await prisma.menu.findMany({
    where: {
      category: slug,
    },
  });
  return (
    <div className="w-screen min-h-[60vh] pb-10 bg-gray-600 pt-32">
      <Select />
      <div className="flex flex-wrap justify-center items-center">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            name={item.name}
            price={item.price}
            desc={item.desciption}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
