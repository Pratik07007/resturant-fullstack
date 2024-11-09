import React from "react";

function AvailableTables({
  time,
  isAvailable,
}: {
  time: string;
  isAvailable: boolean;
}) {
  return (
    <button
      className={`m-4  px-10 ${
        !isAvailable
          ? "bg-pink-500 hover:bg-pink-400"
          : "bg-green-400 hover:bg-green-300"
      }  py-2 rounded-3xl text-xl text-black  duration-200`}
    >
      {time}
    </button>
  );
}

export default AvailableTables;
