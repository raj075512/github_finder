import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

import { Loader2 } from "lucide-react";

export const Icons = {
  spinner: Loader2,
};

function LanderDefine({ setUserData, setLoading }) {
  const [user, setUser] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    setUserData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();

      if (data.message === "Not Found") {
        toast.error("user is not available", {
          position: "bottom-center",
          autoClose: 3000,
        });
      } else {
        toast.success("user is found", {
          position: "top-center",
          autoClose: 3000,
        });
      }
      setUserData(data);
      addUserToLocalStorage(data, user);
    } catch (error) {
      if (error) {
        toast.error("username is not found ", {
          position: "top-center",
          autoClose: 3000,
        });
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addUserToLocalStorage = (data, userName) => {
    const users = JSON.parse(localStorage.getItem("github-users")) || [];
    const userExits = users.find((curr) => curr.id === userName);

    if (userExits) {
      users.splice(users.indexOf(userExits), 1);
    }

    users.unshift({
      id: userName,
      avatar_url: data.avatar_url,
      name: data.name,
      url: data.html_url,
    });
    localStorage.setItem("github-users", JSON.stringify(users));
  };
  

  return (
    <div className="  rounded-md text-center font-medium  my-5 m-3 ">
      <p className="font-medium text-2xl ">Search : github users</p>
      <div className="">
        <form action="" className="text-black  font-sm" onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=" "
            className="p-2 text-center rounded-md "
            placeholder="user.name  "
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
