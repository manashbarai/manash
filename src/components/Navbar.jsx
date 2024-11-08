import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between w-1/2 mx-auto py-2 items-center bg-zinc-700 px-2 rounded-b-2xl sticky top-0 text-zinc-900 shadow shadow-zinc-600 font-semibold'>

        <h1>Home</h1>

        <ul className='flex gap-3 relative'>
            <li> <Link  to="" >About</Link> </li>
            <li> <Link to="#">Project</Link> </li>
            <li> <Link to="#">Contact</Link> </li>
            <li> <Link to="#">Resume</Link> </li>
        </ul>
      
    </div>
  )
}

export default Navbar
