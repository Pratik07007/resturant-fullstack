import React, { useState } from 'react';
import { useRecoilState } from "recoil";
import { RecoilState } from 'recoil';

type CheckOutInfoProps = {
  noItems: number;
  totalPrice: RecoilState<number>;
};

function CheckOutInfo({ noItems = 0, totalPrice }: CheckOutInfoProps) {
  const [price, setPrice] = useRecoilState(totalPrice);
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleCheckout = () => {
    if (!address || !contactNumber) {
      alert('Please fill in all fields');
      return;
    }
    // Handle checkout logic here
    console.log('Proceeding to checkout with:', { address, contactNumber, noItems, price });
  };

  // Format the total price, handling undefined/null cases
  const formattedPrice = typeof price === 'number' 
    ? `$${price.toFixed(2)}` 
    : '$0.00';

  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="mb-4">
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Items</p>
          <p className="font-medium">{noItems ?? 0}</p>
        </div>

        <div className="space-y-4">
          <div>
            <label 
              htmlFor="address" 
              className="block text-sm text-gray-600 mb-2"
            >
              Delivery Address
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter delivery address"
            />
          </div>

          <div>
            <label 
              htmlFor="contact" 
              className="block text-sm text-gray-600 mb-2"
            >
              Contact Number
            </label>
            <input
              id="contact"
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter contact number"
              pattern="[0-9]*"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-lg mb-6">
        <p className="text-gray-900">Total</p>
        <p className="text-indigo-600">{formattedPrice}</p>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CheckOutInfo;