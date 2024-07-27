import Link from 'next/link'
import React from 'react'

const Assets = () => {
  return (
    <>
    <div>
        <div className='border inline-block rounded border-black m-5'>
            <input type="text"  placeholder='serach for offices' className='outline-none px-1' /> 
            <button className='bg-green-400 px-1'>Search</button>   
        </div>
        {/* Main Page */}
        <div className='w-full h-[100vh] mt-1  flex flex-col'>
        <div className='flex items-center w-[40vw] rounded justify-between px-5 h-auto py-3 shadow-lg'>
        <div className=''>
            <h1 className='text-xl'>Office Name</h1>
            <p className="">Employees : </p>
            <p className="">Location : </p>
            <p className="">Budget Allotment : </p>
            <p className="">Budget Spending : </p>
            <p className="">Rating : </p>
        </div>
        <Link href="/assetdetails" className='bg-green-500 px-1 py-1 rounded '>Click to track</Link>
        </div>
        
        </div>
    </div>
    </>
  )
}

export default Assets