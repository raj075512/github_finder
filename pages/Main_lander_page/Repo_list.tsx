import React, { useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Loader2} from 'lucide-react';

export const Icons = {
  spinner: Loader2,
};


function Repo_list({reposUrl}) {

    const [repos,setRepos]=useState([]);
    const [loader,setLoader]=useState(true);


   useEffect(()=>{

   const fetchRepo=async()=>{
       
        try {
            const reponseRepo= await fetch(reposUrl);
            const repoData= await reponseRepo.json();
            if(repoData)
            {
                setRepos(repoData);
                setLoader(false);
               toast.success("get the repo lst" ,{position:"top-left", autoClose:3000});
            }

        } catch (error) {
            setLoader(false);
            toast.error("not get the repo data ",{position:"top-right",autoClose:4000});
        }
       
   }
//    fetchRepo();
   },[reposUrl,toast]) ;

  return (
    <div className='flex flex-col bg-green-100 rounded-md  relative m-10 md:m-2 sm:m-0 '>
        <span className='center text-center text-green-500 font-bold'>Reposetories
            {
                loader && <Icons.spinner className=" animate-spin" />
            }
         </span>
          <td className=''>
             <tr></tr>
          </td>
    </div>
  )
}

export default Repo_list
