
'use client';
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const assetDetails = {
  imageUrl:
    "/Assets/car.jpg",
  assetName: "garbage cart",
  employees: "23",
  location: "Downtown Office",
  budgetAllotment: "$100,000",
  budgetSpending: "$75,000",
  rating: "4.5/5",
};

const Track = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-2xl mx-auto">
        {/* Back Button and Asset Name */}
        <div className="flex items-center justify-start mb-4">
          <button
            onClick={handleBackClick}
            className="text-blue-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
          >
            <FaArrowLeft className="inline-block text-xl mr-2" />
            Back
          </button>
        </div>

        {/* Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full h-64 lg:h-auto overflow-hidden">
            <img
              src={assetDetails.imageUrl}
              alt={assetDetails.assetName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 w-full p-6">
            <h1 className="text-2xl font-semibold mb-4">{assetDetails.assetName}</h1>

            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="font-medium text-gray-600">Employees:</label>
                <input
                  type="text"
                  value={assetDetails.employees}
                  readOnly
                  className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-gray-100 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-600">Location:</label>
                <input
                  type="text"
                  value={assetDetails.location}
                  readOnly
                  className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-gray-100 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-600">Budget Allotment:</label>
                <input
                  type="text"
                  value={assetDetails.budgetAllotment}
                  readOnly
                  className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-gray-100 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-600">Budget Spending:</label>
                <input
                  type="text"
                  value={assetDetails.budgetSpending}
                  readOnly
                  className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-gray-100 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-600">Rating:</label>
                <input
                  type="text"
                  value={assetDetails.rating}
                  readOnly
                  className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-gray-100 focus:outline-none"
                />
              </div>

              {/* Track Button */}
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 mt-4">
                Track Asset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
