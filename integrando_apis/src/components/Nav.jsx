import { NavLink } from "react-router-dom";

function Nav() {
    return ( 
        <div className="flex justify-center gap-3">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='cep'>CEP's</NavLink>
            <NavLink to='naruto'>Naruto</NavLink>
        </div>
     );
}

export default Nav;