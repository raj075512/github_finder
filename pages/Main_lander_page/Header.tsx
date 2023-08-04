import React from 'react'

function Header() {
  return (
    <div  className='flex align-center  justify-between mx-10 my-5 '> 
          <div className="">
            <img src="\logo.png" alt="logo" className=' h-20 cursor-pointer  '/>
          </div>
          <div className=''>
              <button className='bg-green-400 px-4 rounded-md py-2 m-auto border-2  text-bold text-white text-center center m-2 hover:bg-green-300 hover:transition-shadow hover:text-black'>
                  search history
              </button>
          </div>
    </div>
  )
}

export default Header
