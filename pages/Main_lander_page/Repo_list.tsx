import React, { useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Repo_list({reposUrl}) {

    const [repos,setRepos]=useState([]);
    const [loader,setLoader]=useState(false);


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
   fetchRepo();
   },[reposUrl,toast]) ;

  return (
    <div>
      this is repo url  -> {reposUrl }
    </div>
  )
}

export default Repo_list
