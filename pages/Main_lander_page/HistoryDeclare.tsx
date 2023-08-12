import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import  {BsFillXSquareFill } from "react-icons/bs"

function HistoryDeclare() {
  const [userHis, setUserHis] = useState([]);
 
  const [loadHistory ,setLoadHistory]=useState(false);

  useEffect(() => {
    const userHist = JSON.parse(localStorage.getItem("github-users")) || [];
    setUserHis(userHist);
  }, []);

  const handleDelete=(currD)=>{
            if(userHis.length===0) 
            {
              alert("user not searched yet" );
            }
      const userHist=JSON.parse(localStorage.getItem("github-users"))||[];
      const userToDelete=userHist.find((cur)=>cur.id===currD);
      if(userToDelete) userHist.splice(userHist.indexOf(userToDelete,1));
     

      localStorage.setItem("github-users" ,JSON.stringify(userHist));
      setUserHis(userHist);
       toast.success("user is deleted ",{position:"bottom-left",autoClose:1000 })
  
      }

 

  return (
    <div   > 
     
      <td className=" flex flex-col h-1/2  rounded-md  text-center center  overflow-scroll  overflow-x-hidden   m-auto absolute ">
        {  userHis &&   userHis.map((data) => (
          <tr key={data.id} className="flex flex-row rounded-md bg-green-300 m-1  gap-5 ">
            <div className="flex m-1  flex-row justify-between">
                 <div > <Image src={data.avatar_url} className="rounded-full h-10 m-auto" alt="" /> 
                 </div>
                 <div className="flex flex-col text-center  justify-center ">
                     <span className="text-center text-xs font-medium ">
                     {data.id}
                     </span>
                     <span className="">
                         <button className=" border-2 border-green-500 rounded-md   text-bold text-black text-center center hover:bg-green-200  hover:transition-shadow hover:bg-green text-sm px-1 "> <a href={data.url} >visit </a> </button>
                     </span>
                 </div>
            </div>
            <div  className="flex  justify-center  m-auto p-1 ">
                <button className=" flex justify-centertext-center align-center rounded-md  bg-red-500 text-white " onClick={()=>handleDelete(data.id)}>
                     <BsFillXSquareFill className="hover:bg-red-100" /></button>
            </div>
          </tr>
        ))}
       
      </td>
      </div>
  );
}

export default HistoryDeclare;
