import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"


function App() {
  
  return (
    <>

    <div className="flex items-center justify-center h-screen">
      <div className="relative flex flex-col justify-center items-center border-2 border-black h-[95%] w-[95%] p-4">
          <div className="absolute top-7 border-b-2 border-black w-full pb-5">
            <Nav/>
          </div>
          <div className=" h-[95%] w-[95%]">
            <Outlet/>
          </div>
      </div>
    </div>
      
    </>
  )
}

export default App
