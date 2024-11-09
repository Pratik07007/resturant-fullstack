"use client";
import { productAlreadyInCart } from "@/lib/checkIfExist";
import React from "react";

function AddToCartButton({
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
  const product = { id, name, price, desc };

  const handleAddToCart = () => {
    const localItem = localStorage.getItem("food");
    const cartItems = localItem ? JSON.parse(localItem) : [];
    if (productAlreadyInCart(id, cartItems)) {
      return alert("Product already exist in Cart");
    }
    cartItems.push(product);
    localStorage.setItem("food", JSON.stringify(cartItems));
    alert("Product added to cart");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
