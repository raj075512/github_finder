import React from 'react'

function Header() {
  return (
    <div  className='  flex justify-between mx-4 my-5 '> 
          <div className="">
            <img src="\logo.png" alt="logo" />
          </div>
          <div className=''>
              <button className='bg-green-400 px-4 rounded-md py-2 m-auto border-2  text-center center'>
                  search history
              </button>
          </div>
    </div>
  )
}

export default Header
