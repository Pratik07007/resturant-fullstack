"use client";
import React, { useState } from "react";
import { MenuCategory } from "@prisma/client";
import { redirect } from "next/navigation";

const MenuSelect = () => {
  // Convert the enum to an array of category strings
  const categories = Object.keys(MenuCategory);
  const [value, setValue] = useState("DRINK");

  return (
    <select
      name="category"
      onChange={(e) => {
        setValue(e.target.value);
        redirect(`/menu/${e.target.value}`);
      }}
      defaultValue=""
    >
      <option value={value}>Select a category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category.replace("_", " ")}{" "}
          {/* Optional: prettify the category name */}
        </option>
      ))}
    </select>
  );
};

export default MenuSelect;
