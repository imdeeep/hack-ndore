import Link from "next/link";
import React from "react";


const AssetsDetails = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-5 px-1 ">Office Name</h1>

      {/* Movable */}
      <div className=" w-full h-[100vh] flex gap-2">
        <div className="w-[50%] h-[100vh] overflow-auto border-r border-black">
          <div className="flex items-center justify-between px-2 sticky top-0 bg-white ">
            <h1 className="text-lg">Movable Assests</h1>
            <div className="border inline-block rounded border-black m-5">
              <input
                type="text"
                placeholder="serach for assets"
                className="outline-none px-1"
              />
              <button className="bg-green-400 px-1">Search</button>
            </div>
          </div>
          {/* Main Contents */}
          <div className="flex justify-between px-5 border-b my-1 pb-1">
            <p>Movable Asset Name</p>
            <Link href="/track" className="bg-blue-400 px-1 rounded">Track</Link>
          </div>
          <div className="flex justify-between px-5 border-b my-1 pb-1">
            <p>Movable Asset Name</p>
            <Link href="/track" className="bg-blue-400 px-1 rounded">Track</Link>
          </div>
        </div>

        {/* Non Movable */}
        <div className="w-[50%] h-[100vh] overflow-auto">
          <div className="flex items-center justify-between px-2 sticky top-0 bg-white ">
            <h1 className="text-lg">Non-movable Assests</h1>
            <div className="border inline-block rounded border-black m-5">
              <input
                type="text"
                placeholder="serach for assets"
                className="outline-none px-1"
              />
              <button className="bg-green-400 px-1">Search</button>
            </div>
          </div>
          {/* Main Contents */}
          <div className="flex justify-between px-5 border-b my-1 pb-1">
            <p>Non-movable Asset Name</p>
            <Link href="/track" className="bg-blue-400 px-1 rounded">Track</Link>
          </div>
          <div className="flex justify-between px-5 border-b my-1 pb-1">
            <p>Non-movable Asset Name</p>
            <Link href="/track" className="bg-blue-400 px-1 rounded">Track</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsDetails;
