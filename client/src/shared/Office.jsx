"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Office = () => {
  const [office, setOffice] = useState("");
  const [showOfficeForm, setShowOfficeForm] = useState(false);
  const [showAssetForm, setShowAssetForm] = useState(false);

  const handleOfficeFormToggle = () => {
    setShowOfficeForm(!showOfficeForm);
  };

  const handleAssetFormToggle = () => {
    setShowAssetForm(!showAssetForm);
  };

  return (
    <div className="p-4">
      <div className='flex gap-2 border-b pb-1 border-black mb-4'>
        <button onClick={() => setOffice("office")} className='bg-green-400 px-2 py-1 rounded'>Office</button>
        <button onClick={() => setOffice("assets")} className='bg-blue-400 px-2 py-1 rounded'>Assets</button>
      </div>
      {office === "office" ? (
        <div>
          <div className='flex items-center justify-between'>
            <div className='border inline-block rounded border-black m-5'>
              <input type="text" placeholder='search for offices' className='outline-none px-1' />
              <button className='bg-green-400 px-1'>Search</button>
            </div>
            <div>
              <button onClick={handleOfficeFormToggle} className='bg-blue-400 px-1 rounded'>Create Office +</button>
            </div>
          </div>
          <div className='w-full h-[100vh] mt-1 flex flex-col'>
            <div className='flex items-center w-[40vw] rounded justify-between px-5 h-auto py-3 shadow-lg'>
              <div className=''>
                <h1 className='text-xl'>Office Name</h1>
                <p className="">Employees : </p>
                <p className="">Location : </p>
                <p className="">Budget Allotment : </p>
                <p className="">Budget Spending : </p>
                <p className="">Rating : </p>
                <p>More fields related to assets</p>
              </div>
            </div>
          </div>
        </div>
      ) : office === "assets" ? (
        <div>
          <div className='flex items-center justify-between'>
            <div className='border inline-block rounded border-black m-5'>
              <input type="text" placeholder='search for assets' className='outline-none px-1' />
              <button className='bg-green-400 px-1'>Search</button>
            </div>
            <div>
              <button onClick={handleAssetFormToggle} className='bg-blue-400 px-1 rounded'>Create Asset +</button>
            </div>
          </div>
          <div className='w-full h-[100vh] mt-1 flex flex-col'>
            <div className='flex items-center w-[40vw] rounded justify-between px-5 h-auto py-3 shadow-lg'>
              <div className=''>
                <h1 className='text-xl'>Asset Name</h1>
                <p>Office name : </p>
                <p className="">Employees : </p>
                <p className="">Location : </p>
                <p className="">Budget Allotment : </p>
                <p className="">Budget Spending : </p>
                <p className="">Rating : </p>
                <p className=''>Asset type : </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-gray-200 rounded">Please select an option</div>
      )}

      {showOfficeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Create Office</h2>
              <button onClick={handleOfficeFormToggle} className="text-red-500">X</button>
            </div>
            <form>
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">Office Name</label>
                  <input
                    placeholder="Office Name"
                    type="text"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    name="officeName"
                    required
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Location</label>
                  <input
                    placeholder="Location"
                    type="text"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    name="location"
                    required
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Budget Allotment</label>
                  <input
                    placeholder="Budget Allotment"
                    type="number"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    name="budgetAllotment"
                    required
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Employees</label>
                  <input
                    placeholder="Employees"
                    type="number"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    name="employees"
                    required
                  />
                </div>
                <div>
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-500"
                    type="submit"
                  >
                    Create Office
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAssetForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Create Asset</h2>
              <button onClick={handleAssetFormToggle} className="text-red-500">X</button>
            </div>
            <form>
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">Asset Name</label>
                  <input
                    placeholder="Asset Name"
                    type="text"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    name="assetName"
                    required
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Office Name</label>
                  <input
                    placeholder="Office Name"
                    type="text"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    name="officeName"
                    required
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Budget Allotment</label>
                  <input
                    placeholder="Budget Allotment"
                    type="number"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    name="budgetAllotment"
                    required
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Employees</label>
                  <input
                    placeholder="Employees"
                    type="number"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    name="employees"
                    required
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">Asset Type</label>
                  <input
                    placeholder="Asset Type"
                    type="text"
                    className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    name="assetType"
                    required
                  />
                </div>
                <div>
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-500"
                    type="submit"
                  >
                    Create Asset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Office;
