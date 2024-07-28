import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between px-10 border border-top">
        <div>© 2024 hack'ndore</div>
        <div className="gap-8 flex ">
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Policy</Link>
        </div>
    </div>
  )
}

export default Footer