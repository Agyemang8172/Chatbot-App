import React from 'react'

const Header = () => {
  return (
    <header className="mt-20 flex flex-col justify-center items-center">
      <div className=' space-y-15'>
        <img src='/assets/Logo.png' className='' />
        <p className='text-2xl'> Ask our AI anything</p>
      </div>
    </header>
  )
}

export default Header
