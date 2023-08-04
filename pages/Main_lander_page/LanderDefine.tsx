import React, { useState } from "react";

function LanderDefine() {
  
  
  const [user, setUser] = useState("")
  const handleSubmit = async (e)=>{
    e.preventDefault();
     if(!user)
     {
       return ;
     }else{
      try {
        const res=await fetch(`https://api.github.com/users/${user}`)
        const data= await res.json();
        console.log(data,"data is coming from github api ");
      } catch (error) {
        console.log(error);
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
            className="p-2 text-center "
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
