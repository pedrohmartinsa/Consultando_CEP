import { NavLink, Outlet } from "react-router-dom";

export default function Movies() {

    return(
        <>
        <div className="flex flex-col items-center h-[90%] mt-16">
            <div className="">
                <NavLink to='top_rated'>Melhores Avaliados</NavLink>
            </div>
            <div className="flex flex-col overflow-auto">
                <Outlet/>
            </div>
        </div>
        </>
    )
}
