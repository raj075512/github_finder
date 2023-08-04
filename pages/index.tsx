import Header from "./Main_lander_page/Header"
import LanderDefine from "./Main_lander_page/LanderDefine"
import Main_lander from "./Main_lander_page/Main_lander"

export default function Home() {
  return (
   <main className=" flex flex-col bg-gray-100  relative m-5 md:m-10 sm:m-0">
        <Header/>
        <LanderDefine/> 
   </main>
  )
}
