import MenuCard from "@/components/MenuCard";
import prisma from "@/db";
import React from "react";

async function Menu() {
  const menuItems = await prisma.menu.findMany();
  return (
    <div className="pt-40 w-screen flex flex-wrap justify-center items-center pb-10 bg-gray-600">
      {menuItems.map(({ name, price, description }: any) => (
        <MenuCard name={name} price={price} desc={description} />
      ))}
    </div>
  );
}

export default Menu;
