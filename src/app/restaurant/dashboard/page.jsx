
'use client'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter();

  function handleClick(){
    // console.log('hello');
    router.push('/restroAddItems')
  }

  
  return (
    <div>
    <h1> this is dashboard</h1>
      <button onClick={handleClick}>add Your information</button>
      <button onClick={handleClick}>add new Item</button>
      <button onClick={handleClick}>setting with your item</button>
    </div>
  )
}

export default page
