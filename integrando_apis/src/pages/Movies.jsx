import { NavLink, Outlet } from "react-router-dom";

export default function Movies() {

    return(
        <>
        <div className="relative flex flex-col items-center gap-8 h-[90%] mt-16">
            <div className="fixed top-[5.688rem]">
                <NavLink to='top_rated'>Melhores Avaliados</NavLink>
                <NavLink to='populares'>Mais Populares</NavLink>
                
            </div>
            <div className="flex flex-col">
                <Outlet/>
            </div>
        </div>
        </>
    )
}
