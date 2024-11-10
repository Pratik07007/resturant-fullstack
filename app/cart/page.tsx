"use client";
import CheckoutCartItems from "@/components/CheckoutCartItems";
import CheckOutInfo from "@/components/CheckOutInfo";
import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";

function page() {
  const localItem = localStorage.getItem("food") || "[]";
  const carItems = JSON.parse(localItem);
  

  return (
    <RecoilRoot>
      <div className="pt-40 pb-10 w-screen flex justify-around">
        <div>
          {carItems.map((cart: any) => (
            <CheckoutCartItems
              key={cart?.id}
              price={cart?.price}
              category={cart?.category}
              name={cart?.name}
            />
          ))}
        </div>
        <CheckOutInfo totalPrice="2000" noItems="23" />
      </div>
    </RecoilRoot>
  );
}

export default page;
