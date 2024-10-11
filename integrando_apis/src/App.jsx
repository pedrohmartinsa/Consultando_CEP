import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"


function App() {
  
  return (
    <>

    <div className="h-screen">
      <div className="relative flex justify-center items-center border-2 border-black h-[95%] m-4 p-4">
          <div className="absolute top-7 border-b-2 border-black w-full pb-5">
            <Nav/>
          </div>
          <Outlet/>
      </div>
    </div>
      
    </>
  )
}

export default App
