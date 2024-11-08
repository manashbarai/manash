import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between w-1/2 mx-auto  items-center bg-zinc-700  rounded-b-2xl sticky top-0 text-zinc-900  font-semibold overflow-hidden'>

        <h1 className='ml-2 '>Home</h1>

        <ul className='flex  relative nav'>
            <li>About </li>
            <li>Project </li>
            <li>Contact </li>
            <li>Resume </li>
        </ul>
      
    </div>
  )
}

export default Navbar
