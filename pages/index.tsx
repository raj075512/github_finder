import Header from "./Main_lander_page/Header";
import LanderDefine from "./Main_lander_page/LanderDefine";
import Declarations from "./Main_lander_page/Declerations";
import {useState } from "react"


export default function Home() {
  // before decleration of data in decleration section adding check for these data //
  const [Loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  
  console.log(userData);

  return (
    <>
      <main className=" flex flex-col bg-green-100 rounded-md  relative m-10 md:m-2 sm:m-0">
        <Header />
        <LanderDefine setUserData={(res)=>setUserData(res)} setLoading={setLoading} />
      </main>
     { userData &&  <Declarations userData={userData}  />}
     
    </>
  );
}
