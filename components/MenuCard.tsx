import React from "react";
import hero from "../public/hero-main.jpg";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

function MenuCard({
  id,
  name,
  price,
  desc,
}: {
  id: string;
  name: string;
  price: string;
  desc: string;
}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
      <Image className="w-full" alt="hello" src={hero} />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <p className="mb-3 font-normal text-black dark:text-gray-400">
          ${price}
        </p>
        <AddToCartButton id={id} name={name} price={price} desc={desc} />
      </div>
    </div>
  );
}

export default MenuCard;
