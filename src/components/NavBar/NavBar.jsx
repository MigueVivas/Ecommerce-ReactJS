import CartWidget from "./CartWidget"
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.scss"

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar">
            
            <button className="backButton" onClick={ () => navigate(-1) } > Atras</button>

            <div>
                <ul className="categories">
                    <img src="https://miguevivas.github.io/Tienda-Elixir--CODER-Javascript-V6/img/elixir-main.png" alt="Logo Tienda" />
                    <ul className="categoriesLink">
                        <NavLink to="/category/ron" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Ron</NavLink>
                        <NavLink to="/category/gaseosas" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Gaseosas</NavLink>
                        <NavLink to="/category/varias" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Varias</NavLink>
                    </ul>
                </ul>
            </div>

                    
            <CartWidget />
            
        </nav>
    )
}
export default NavBar