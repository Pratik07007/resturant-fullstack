"use client";
import React from "react";
import { MenuCategory } from "@prisma/client";
import { redirect } from "next/navigation";

const MenuSelect = () => {
  const categories = Object.keys(MenuCategory);
  return (
    <select
      onChange={(e) => {
        if (e.target.value === "Select a category") {
          return redirect(`/menu`);
        }
        redirect(`/menu?category=${e.target.value}`);
      }}
    >
      <option>Select a category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category.replace("_", " ")}
        </option>
      ))}
    </select>
  );
};

export default MenuSelect;
