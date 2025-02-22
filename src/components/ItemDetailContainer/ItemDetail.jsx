import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {

  const [showItemCount, setShowItemCount] = useState(true)
  const{addProduct} = useContext(CartContext)

  const addProductInCart = (count) => {

    const productCart = {...product, quantity: count}

    addProduct(productCart)
    setShowItemCount(false)
  }
  

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
        </div>
        <div className="main-image">
          <img src={product.img} alt="" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {
          showItemCount === true ? (
            <ItemCount stock={product.stock} addProductInCart={addProductInCart}/> ) : (
              <button className="button-ending-buys"><Link to="/cart">Terminar mi compra</Link></button>
            )
        }
      </div>
    </div>
  )
}
export default ItemDetail