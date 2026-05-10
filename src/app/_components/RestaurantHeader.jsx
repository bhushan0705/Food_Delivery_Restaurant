
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const RestaurantHeader = () => {

    const [details, setDetails] = useState();
    const router = useRouter();

    useEffect(()=>{
        const data = localStorage.getItem('restroData')
        if(data){
            setDetails(JSON.parse(data))
        }
    },[])

    function logout(){
        localStorage.removeItem('restroData');
        router.push('/restaurant')
    }



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
                <Link href={'#'}>Home</Link>
            </li>
            {
                details ?  (
                    <>
                    <li>
                        <Link href={'/restaurant/dashboard'}>
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <button onClick={logout}>
                            Logout
                        </button>
                    </li>
                    </>
                )
                :
                (
                          <li>
                        <Link href={'/restaurant'}>
                            Login/Signup
                        </Link>
                    </li>
                )
            }
            {/* <li
                <Link href={'/'}>Login/Signup</Link>
            </li>
            <li>
                <Link href={'/'}>Profile</Link>
            </li> */}
        </ul>

    </div>
  )
}

export default RestaurantHeader

