import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"

const Cart = () => {

  const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)

  if(cart.length === 0){
    return(
        <div className="empty-cart">
           <h3 className="title-empty-cart"> No hay artículos en tu carrito</h3> 
           <Link to="/" className="button-home-empty-cart">Ir al inicio</Link>
        </div>
    )
  }

  return (
    <div className="cart">
        <h1>Carrito de compras</h1> 
        <ul>
            {
                cart.map((productCart) => (
                    <div className="item-cart" key={productCart.id}>
                        <img className="img-item-cart" src={productCart.img} alt="" />
                        <p className="text-item-cart">{productCart.name}</p>
                        <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
                        <p className="text-item-cart">Precio x Unidad: ${productCart.price}</p>
                        <button className="delete-item-cart" onClick={() => deleteProductById(productCart.id)} >Eliminar</button>
                    </div>

                ))
            }
        </ul>  
        
        <div className="info-cart">
            <h3>Precio total: ${totalPrice()}</h3>
            <button className="end-shop"><Link to={"/checkout"}>Facturar compra</Link></button>
            <button className="button-delete-cart" onClick={deleteCart} >Vaciar carrito</button>
        </div>
    </div>
  )
}

export default Cart