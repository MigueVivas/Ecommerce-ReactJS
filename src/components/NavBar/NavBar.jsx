import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
    return (
        <nav className="navbar">
            
            <div>
                <ul className="categories">
                    <img src="https://miguevivas.github.io/Tienda-Elixir--CODER-Javascript-V6/img/elixir-main.png" alt="Logo Tienda" />
                    <li>Tienda</li>
                    <li>Contacto</li>
                    <li>Blog</li>
                </ul>
            </div>

        
            <CartWidget />
            
        </nav>
    )
}
export default NavBar