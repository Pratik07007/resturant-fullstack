import MenuCard from "@/components/MenuCard";
import Select from "@/components/Select";
import prisma from "@/db";
import { MenuCategory } from "@prisma/client";
import React from "react";

async function Menu({
  searchParams,
}: {
  searchParams: Promise<{
    category?: MenuCategory;
  }>;
}) {
  const category = (await searchParams).category;
  const menuItems = category
    ? await prisma.menu.findMany({
        where: {
          category: category,
        },
      })
    : await prisma.menu.findMany({});

  return (
    <div className="w-screen min-h-[60vh] pb-10 bg-gray-600 pt-32">
      <div className="w-screen flex items-end justify-end pr-10">
        <Select />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {menuItems.map((item) => (
          <MenuCard
            id={item.id}
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
