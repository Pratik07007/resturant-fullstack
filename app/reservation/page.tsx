import AvailableTables from "@/components/AvailableTables";
import React from "react";
import Image from "next/image";
import sideImage from "../../public/reservation-side.jpg";

function Reservation() {
  return (
    <div className="pt-32 min-h-[55vh] pb-20">
      <h1 className="text-center text-5xl">Reserve Your Seats</h1>
      <div className="flex mt-10 w-screen ">
        <div className="w-1/2">
          <Image
            width={0}
            height={0}
            className="w-full h-full rounded"
            src={sideImage}
            alt="Reseravation Image"
          />
        </div>
        <div className="w-1/2 ">
          <div className="flex flex-wrap">
            <AvailableTables isAvailable={false} time="11:30" />
            <AvailableTables isAvailable={true} time="11:30" />
            <AvailableTables isAvailable={false} time="11:30" />
          </div>
        </div>
      </div>
      <div>
        <h1>Legend</h1>
        <h2>Green=available</h2>
        <h2>Pink=Booked</h2>
      </div>
    </div>
  );
}

export default Reservation;
