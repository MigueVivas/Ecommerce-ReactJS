import CartWidget from "./CartWidget"
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css"

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar">
            
            <button className="backButton" onClick={ () => navigate(-1) } > Atras</button>

            <div className="categories">
                          
                <Link to="/">
                    <img src="https://miguevivas.github.io/Tienda-Elixir--CODER-Javascript-V6/img/elixir-main.png" alt="Logo Tienda" />
                </Link>
                    
                    <ul className="categoriesLink">
                        <NavLink to="/category/Ron" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Ron</NavLink>
                        <NavLink to="/category/Gaseosas" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Gaseosas</NavLink>
                        <NavLink to="/category/Varias" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Varias</NavLink>
                    </ul>
               
            </div>

                    
            <CartWidget />
            
        </nav>
    )
}
export default NavBar