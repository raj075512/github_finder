import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";



function LanderDefine({setUserData,setLoading}) {
  
  
  const [user, setUser] = useState("")
  const handleSubmit = async(e)=>{
    e.preventDefault();
     if(!user)
     {
      setLoading(true);
      setUserData(null);
       return ;
     }else{
      try {
        const res=await fetch(`https://api.github.com/users/${user}`)
        const data= await res.json();
        console.log(data,"data is coming from github api ");
        if(data.message==="Not Found")
        {
         toast.error("user is not available",{position:"bottom-center", autoClose:3000 })
        }else{
          toast.success("user is found",{position:"top-center",autoClose:3000 })
        }
        setUserData(data);
      } catch (error) {
        if(error)
        {
          toast.error("username is not found ",{position:"top-center",autoClose:3000})
        }
        console.log(error);
      }
        
      finally{
        setLoading(false);
        
      }
      }
  }
   
 


  
  

  return (
    <div className="  rounded-md text-center font-medium  my-5 m-3 ">
      <p className="font-medium text-2xl ">Search for github users</p>
      <div className="">
        <form action="" className="text-black  font-sm" onSubmit={handleSubmit} >
          <input
            type="text"
            name=""
            id=" "
            className="p-2 text-center rounded-md "
            placeholder="user.name  "
            value={user}
            onChange={(e)=>setUser(e.target.value)}
/>
          <button className="bg-green-400 px-4 rounded-md py-2  border-2  text-bold text-white text-center center m-2 hover:bg-green-300 hover:transition-shadow hover:text-black">
            search
          </button>
        </form>
      </div>
    </div>
  );
}

export default LanderDefine;
