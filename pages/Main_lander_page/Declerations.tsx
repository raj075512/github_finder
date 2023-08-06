import React from 'react'
import Repo_list from './Repo_list'


function Declerations({userData}) {
  return (
    <div className='grid grid-cols-1 gap-4  justify-between m-4  font-medium    relative rounded-md '>

        
        <div className="p-4 bg-blue-200 text-blue-800 grid grid-cols-3 grid-rows-3 rounded-md gap-3">
    <div className="bg-blue-100 rounded p-5 text-red-600 font-medium">Followers: {userData.followers}
    <span className='flex center '>following: {userData.following}</span></div>
    <div className="row-span-2 bg-blue-100 rounded p-5"> <img src={userData.avatar_url} alt="avatar" className='rounded-full h-40 m-auto' /> </div>
    <div className="bg-blue-100 rounded p-3 font-medium text-red-500">Public_gists: {userData.public_gists}
    <span className='flex center '>Repos: {userData.public_repos} </span></div>
    <div className="row-span-2 bg-blue-100 rounded p-4">
       
      linkedin/Blog: {userData.blog ?<a href={userData.blog} >{userData.blog} </a>:"not specified" }
    
    <span className='flex center '>Email: {userData.email ?<a href={userData.email} >{userData.email} </a>:"not specified" } </span>
    
    </div>
    <div className="row-span-2 bg-blue-100 rounded p-3 "> 
         <div className='text-green-500'>UserId: <span className='text-red-500 '> {userData.login}</span></div>
         <div className='text-green-500'>Name: <span className='text-red-500'> {userData.name}</span></div>
         <div className='text-green-500'>Bio: <span className='text-red-500'> {userData.bio}</span></div>
         <div className='text-green-500'>Location: <span className='text-red-500'> {userData.location}</span></div>
         <div className='text-green-500'> Company Name:   <span className='text-red-500'> {userData.company ?userData.company:"not specified"}</span> </div>
         
     </div>
    <div className=" rounded p-5 m-auto"><button className="bg-green-400 px-4 rounded-md py-2  border-2  text-bold text-white text-center center m-auto hover:bg-green-300 hover:transition-shadow hover:text-black">
           <a href={`https://github.com/${userData.login}`}>view profile </a> 
          </button></div>
</div>

       
        
       
<Repo_list reposUrl={userData.repos_url} />
        
    </div>
  )
}

export default Declerations
