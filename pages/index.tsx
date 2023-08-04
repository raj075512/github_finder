
import Header from "./Main_lander_page/Header"
import LanderDefine from "./Main_lander_page/LanderDefine"
import Declarations from  "./Main_lander_page/Declerations"



export default function Home() {
  return (
    <>
   
   <main className=" flex flex-col bg-green-100 rounded-md  relative m-5 md:m-10 sm:m-0">
        <Header/>
        <LanderDefine/> 
        
   </main>
     <Declarations/>
   </>
  )
}
