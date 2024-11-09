"use client";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

function TakeOutButton() {
  const signInPage = process.env.SIGNIN_PAGE || "";
  const { isSignedIn } = useAuth();
  const handelClick = () => {
    if (isSignedIn) {
      return redirect("/menu");
    } else {
      return redirect(signInPage);
    }
  };
  return (
    <button
      onClick={handelClick}
      className="hidden lg:block bg-pink-500 px-6 lg:px-10 py-2 lg:py-4 rounded-3xl text-xs lg:text-sm text-black hover:bg-pink-700 duration-200"
    >
      Take Out
    </button>
  );
}

export default TakeOutButton;
