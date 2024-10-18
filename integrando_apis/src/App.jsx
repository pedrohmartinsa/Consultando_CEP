import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"


function App() {

  return (
    <>

    <div className="flex items-center justify-center h-screen">
      <d iv className="relative flex flex-col justify-center items-center border-2 border-black h-[95%] w-[95%] p-4">
          <div className="absolute top-7 border-b-2 border-black w-full pb-5">
            <Nav/>
          </div>
          <div className="overflow-auto mt-20">
            <Outlet/>
          </div>
      </d>
    </div>
      
    </>
  )
}

export default App
