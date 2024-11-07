import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#001100] text-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-28">
        {/* Visit Us Section */}
        <div className="flex flex-col gap-3 mt-4">
          <h2 className="text-lg font-semibold">VISIT US:</h2>
          <p className="mt-2">1381 Boylston Street</p>
          <p>Boston, MA 02215</p>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-lg font-semibold">HOURS</h2>
          <p className="font-semibold">DINING & TAKEOUT/DELIVERY</p>
          <p className="mt-2">MONDAY - THURSDAY 11:30 - 9:00</p>
          <p>FRIDAY - SATURDAY 11:30 - 10:00</p>
          <p>SUNDAY 11:30 - 9:00</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">GET SOCIALS</h2>
          <div className="flex gap-4 mt-8">
            <FaInstagram className="text-2xl cursor-pointer hover:text-gray-300" />
            <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-300" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      <div className="mt-28 text-center text-sm text-gray-400">
        © 2024 PratikDhimal, All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
