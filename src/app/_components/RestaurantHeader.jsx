
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RestaurantHeader = () => {
  return (
    <div className='flex justify-between items-center w-full pr-5 pl-5 '>

        <div>
          <Link href={'/'}><Image 
  src="/images/foodLogo2.png"
  alt="logo"
  width={100}
  height={100}
  priority
/></Link>
       
        </div>
        <ul className='flex justify-between items-center gap-10'>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/'}>Login/Signup</Link>
            </li>
            <li>
                <Link href={'/'}>Profile</Link>
            </li>
        </ul>

    </div>
  )
}

export default RestaurantHeader

