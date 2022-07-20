import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';
import { MdShoppingBag } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const [showNotification , setShowNotification] = useState(false)


  const handleShowNav= () =>{
    setShowNav(!showNav)
  }

  const handleShowNotfication =()=>{
    setShowNotification(!showNotification)
  }
  return (
    <div>
      <nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        {showNav ? <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={handleShowNav}><IoClose /></button> : <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={handleShowNav}>
          <span className="sr-only">Open main menu</span>
          {/*<!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->*/}
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" aria-hidden="true">
            <path  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/*<!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->*/}
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" aria-hidden="true">
            <path  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> }
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
            <Link href="/"><a className=" text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a></Link>
            <Link href="/Contact"><a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a></Link>
            <Link href="/shop"><a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shop</a></Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={handleShowNotfication} >
          <span className="sr-only">View notifications</span>
          <div className='border bg-orange-500 h-6 w-6 rounded-full text-white'>
            2
          </div>
          <MdShoppingBag  />
        </button>

        {/*<!-- Profile dropdown -->*/}
        <div className="ml-3 relative">
          <div>
            <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <Image className="h-8 w-8 rounded-full" width={35} height={35} src="/Person.avif" alt="unplash" />
            </button>
          </div>
          {/*<!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->*/}
          {showNotification ? 
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
            {/*<!-- Active: "bg-gray-100", Not Active: "" -->*/}
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</a>
          </div> 
          : ""
           }
  
        </div>
      </div>
    </div>
  </div>

  {/*<!-- Mobile menu, show/hide based on menu state. -->*/}
  {showNav ?  
  <div className="sm:hidden" id="mobile-menu">
  <div className="px-2 pt-2 pb-3 space-y-1">
      <Link href="/"><a className="  text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium block" aria-current="page" onClick={()=>setShowNav(false)}>Home</a></Link>
      <Link href="/Contact"><a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 block rounded-md text-base  font-medium" onClick={()=>setShowNav(false)}>Contact</a></Link>
      <Link href="/shop"><a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 block rounded-md text-base font-medium" onClick={()=>setShowNav(false)}>Shop</a></Link>
  </div>
</div> 
:
""
}
 
  
</nav>
    </div>
  )
}

export default Navbar
