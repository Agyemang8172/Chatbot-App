import React from 'react'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center space-y-4">
      <div>
        <img src={Logo} alt='logo' className="h-16" />
      </div>
      <p className='text-gray-600 text-lg'>Ask Our AI Anything</p>
    </header>
  );
}

export default Header;