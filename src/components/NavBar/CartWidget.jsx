import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    let quantity = totalQuantity()

     return (
        <Link to="/cart" className="cartwidget">
            <RiShoppingCart2Line size={25} color="#f4f0e0" />
            <p>{ quantity !== 0 && quantity }</p>
        </Link>
    )
}
export default CartWidget