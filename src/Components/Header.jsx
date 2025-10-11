import React from 'react'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="mt-20 flex flex-col justify-center items-center space-y-8">
         <div>
            <img src={Logo}  alt='logo'  />
         </div>
       <p className='mb-10'>Ask Our AI Anything</p>
    </header>
  )
}

export default Header
