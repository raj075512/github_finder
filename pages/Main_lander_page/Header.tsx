import React ,{useState} from 'react'
import HistoryDeclare from './HistoryDeclare'
import Image from 'next/image';

function Header({}) {
  // to store for the history //

  const [searchFlag,setSearchFlag]=useState(false);

const handleTheHistory=()=>{

  setSearchFlag(true);
}
  return (
    <>
    
    <div  className='flex align-center  justify-between mx-16 my-2 '> 
          <div className="">
            <Image src="\logo.png" alt="logo" className=' h-20 cursor-pointer  '/>
          </div>
          <div className=''>
              <button className='bg-red-400 px-4 rounded-md py-2 border-2  text-bold text-white text-center center m-2 hover:bg-gray-300 hover:transition-shadow hover:text-black'
              onClick={()=>(handleTheHistory())}>
                  search history
              </button>
              { 
              searchFlag && 
              <HistoryDeclare  /> 
               }  
          </div>
          
          
    </div>
    
    </>
  )
}

export default Header
