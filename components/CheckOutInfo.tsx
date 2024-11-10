import React from "react";

function CheckOutInfo({
  noItems,
  totalPrice,
}: {
  noItems: string;
  totalPrice: string;
}) {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>
      <div className="mb-4">
        <div className="flex justify-between mb-4">
          <p>Items</p>
          <p>{noItems}</p>
        </div>

        <label className="block text-sm text-gray-600 mb-2">
          Delivery Address
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter address"
        />
        <label className="block text-sm text-gray-600 mb-2">
          Contact Number
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter contact number"
        />
      </div>

      <div className="flex justify-between font-semibold text-lg mb-4">
        <p>Total</p>
        <p className="text-indigo-600">{totalPrice}</p>
      </div>
      <button className="w-full py-2 bg-indigo-600 text-white rounded-lg">
        Checkout
      </button>
    </div>
  );
}

export default CheckOutInfo;
