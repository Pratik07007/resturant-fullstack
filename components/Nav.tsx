"use client";
import Link from "next/link";
import React, { useState } from "react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and Close icons
import TakeOutButton from "./TakeOutButton";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  return (
    <div className="bg-[#001100] fixed top-0 w-full text-white z-20">
      <div className="flex items-center justify-between h-20 lg:h-28 px-4 lg:px-8 font-light">
        <div className="flex items-center gap-8 lg:gap-20">
          {/* Logo */}
          <Link href={"/"}>
            <h1 className="text-2xl lg:text-4xl cursor-pointer">Logo</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4 lg:gap-10 items-center text-sm lg:text-xl">
            <Link href="/reservation">
              <h1 className="cursor-pointer">Reservation</h1>
            </Link>
            <h1 className="cursor-pointer">Swag</h1>
            <Link href={"/menu"}>
              <h1 className="cursor-pointer">Menu</h1>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-20">
          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-10">
            <FaFacebookF className="text-lg lg:text-xl cursor-pointer" />
            <FaInstagram className="text-lg lg:text-xl cursor-pointer" />
            <FaTwitter className="text-lg lg:text-xl cursor-pointer" />
          </div>

          {/* Take Out Button */}

          <TakeOutButton />
          <SignedOut>
            <SignInButton>
              <button className="hidden lg:block bg-pink-500 px-4 lg:px-5 py-2 lg:py-4 rounded-3xl text-xs lg:text-sm text-black hover:bg-pink-700 duration-200">
                SignIn
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            {isOpen ? (
              <HiX
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <HiMenu
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#001100] text-white flex flex-col items-center py-4 space-y-4">
          <h1 className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Reservation
          </h1>
          <h1 className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Swag
          </h1>
          <h1 className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Menu
          </h1>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
          </div>
          <button className="bg-pink-500 px-8 py-3 rounded-3xl text-xs text-black hover:bg-pink-700 duration-200 mt-4">
            Take Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
