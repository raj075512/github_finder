import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Loader2 } from "lucide-react";

export const Icons = {
  spinner: Loader2,
};

function Repo_list({ reposUrl }) {

  const [repos, setRepos] = useState([]);
  const [loader, setLoader] = useState(false);

  console.log(repos);

  useEffect(() => { 
    const fetchRepo = async () => {
  
      try {
        setLoader(true);
        const reponseRepo = await fetch(reposUrl);
        const repoData = await reponseRepo.json();
         if(repoData.message)
         {
           
         throw new Error(repoData.message);
          
        }
        setRepos(repoData);
      } catch (error) {
        toast.error("not get the repo data ", {
          position: "top-right",
          autoClose: 4000,
        });
      } finally {
        setLoader(false);
      }
    };
       fetchRepo();
  }, [reposUrl, toast]);

  return (
    <div className="flex flex-col  rounded-md  relative m-10 md:m-2 sm:m-0 ">
      <span className="center text-center text-green-500  font-medium text-2xl">
        Repositories
        {loader && <Icons.spinner className=" animate-spin" />}
      </span>
        
    
    

<div>
      { repos.map((repo)=>(
                
                <tr key={repo.id} className=" flex  justify-evenly m-4 bg-gray-200 center text-center m-1 rounded-md border-1  ">
          <div className="flex flex-col ">
          <button className=" bg-green-300  rounded-md  border-2  my-1  text-bold text-black text-center center hover:bg-green-200  hover:transition-shadow hover:text-black">
             <a href={repo.html_url}>{repo.name}</a> 
            </button>
            <span className="text-center ">language used: {repo.language} </span>
          </div>
          <div className="flex flex-row justify-evenly text-center">
            <span className="bg-blue-200 p-2 text-black rounded-md  border-2  text-bold text-center center m-2 ">
              stars:{repo.stargazers_count} 
            </span>
            <span className="bg-blue-200 p-2 text-black text-center rounded-md  border-2  text-bold text-center center m-2">
              Forks:{repo.forks_count}
            </span>
            <span className="bg-blue-200 p-2 text-black rounded-md  border-2  text-bold text-center center m-2 ">
              watchers:{repo.watchers_count}
            </span>
          </div>
        </tr>
            ))
        }
        </div>
       
    
    </div>
  );
}

export default Repo_list;
