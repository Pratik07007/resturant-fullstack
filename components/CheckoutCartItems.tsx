"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "../public/menu-item.webp";

function CheckoutCartItems({
  price,
  category,
  name,
}: {
  price: string;
  category: string;
  name: string;
}) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 border-b border-gray-200 mb-4">
      <div className="w-24">
        <Image
          src={img}
          className="h-full w-full"
          alt="Product image"
          layout="responsive"
          width={0}
          height={0}
        />
      </div>
      <div className="flex-1">
        <h6 className="font-semibold text-gray-800">{name}</h6>
        <p className="text-gray-500">{category}</p>
        <p className="font-medium text-gray-600">${price}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={decreaseQuantity}
          className="px-3 py-1 border rounded-l bg-gray-100"
        >
          -
        </button>
        <input
          type="text"
          readOnly
          value={quantity}
          className="w-12 text-center border-y border-gray-300"
        />
        <button
          onClick={increaseQuantity}
          className="px-3 py-1 border rounded-r bg-gray-100"
        >
          +
        </button>
      </div>
      <p className="font-bold text-gray-700">
        ${(Number(price) * quantity).toFixed(2)}
      </p>
    </div>
  );
}

export default CheckoutCartItems;
