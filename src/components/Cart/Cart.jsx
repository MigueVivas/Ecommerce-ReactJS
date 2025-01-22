import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {

  const {cart, totalPrice} = useContext(CartContext)

  return (
    <div>
        <ul>
            {
                cart.map((productCart) => (
                    <li key={productCart.id}>
                        <img src={productCart.img} alt="" />
                        <p>{productCart.name}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Precio x Unidad: ${productCart.price}</p>
                    </li>

                ))
            }
        </ul>  

        <h3>Precio total: ${totalPrice()}</h3> 
    </div>
  )
}

export default Cart