import React from 'react'
import Logo from '../Logo'   
import Nav from './Nav'

const Navbar = () => {
  return (
    <header className='bg-orange-600 sticky top-0 flex-wrap z-[20] flex mx-auto w-full items-center justify-between rounded-lg'>
        <Logo/>
        <Nav/>
        {/* <h1>Header</h1> */}
    </header>
  )
}

export default Navbar