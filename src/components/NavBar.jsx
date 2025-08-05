import React from 'react'
import { HiBars3 } from 'react-icons/hi2'

export function NavBar() {
  return (
    <>
    <header className='w-full h-15 bg-[#77A5A2] text-[#F6E8CD]'>
      <nav className='w-full h-15 fixed bg-[#77A5A2]/50 border-b border-b-[#77A5A2]/50 flex items-center justify-center px-5'>
        {/* LOGO */}
        <h2 className='font-serif font-bold text-2xl'>MONMAT</h2>
        {/* Drop Down */}
        <div className='fixed top-0 right-0 w-15 h-15 flex items-center justify-center'>
          <div className='p-1 border-[0.2px] rounded'>
            <HiBars3 className='text-xl' />
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
