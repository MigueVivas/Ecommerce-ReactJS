import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {

  const{addProduct} = useContext(CartContext)

  const AddProductInCart = (count) => {

    const productCart = {...product, quantity: count}

    addProduct(productCart)
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
        <ItemCount stock={product.stock} AddProductInCart={AddProductInCart}/>
      </div>
    </div>
  )
}
export default ItemDetail