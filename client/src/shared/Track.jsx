import Link from 'next/link'
import React from 'react'

const Track = () => {
  return (
    <div className='h-[100vh] flex gap-2'>
        <div className='w-[25vw] h-[25vw] rounded bg-blue-300 overflow-hidden'>
            <img src="https://imgs.search.brave.com/hBYH6HGccqJTw2Ijov8-JgVJ0jxV_hBR3FIf_FRnBFc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/OC8xNS8xOC80Mi9z/Y2hvb2wtYnVzLTI2/NDUwODVfNjQwLmpw/Zw" className='image-cover' alt="" />
        </div>
        <div className=''>
            <h1 className='text-xl'>Asset Name</h1>
            <p className="">Employees : </p>
            <p className="">Location : </p>
            <p className="">Budget Allotment : </p>
            <p className="">Budget Spending : </p>
            <p className="">Rating : </p>
            <Link href="" className='px-1 bg-green-500 rounded'>Track</Link>
        </div>
        
    </div>
  )
}

export default Track