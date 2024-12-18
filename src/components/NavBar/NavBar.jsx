import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.scss"

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar">
            
            <button onClick={ () => navigate(-1) } >Ir hacia atras</button>

            <div>
                <ul className="categories">
                    <img src="https://miguevivas.github.io/Tienda-Elixir--CODER-Javascript-V6/img/elixir-main.png" alt="Logo Tienda" />
                    <ul className="categories">
                        <NavLink to="/category/ron" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Ron</NavLink>
                        <NavLink to="/category/gaseosas" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Gaseosas</NavLink>
                        <NavLink to="/category/varias" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Varias</NavLink>
                    </ul>
                </ul>
            </div>

            <Link to="/" className="brand primary-font-color">
                <BsBox className="icon-brand" />
                <p className="title-brand ">Box Ecommerce</p>
            </Link>

        
            <CartWidget />
            
        </nav>
    )
}
export default NavBar