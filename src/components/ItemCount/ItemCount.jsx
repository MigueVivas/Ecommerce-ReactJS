import { useState } from "react"
import "./itemcount.css"

const ItemCount = ({ stock, AddProductInCart }) => {
  const [count, setCount] = useState(1)

  const handleClickRemove = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleClickAdd = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  return (
    <div className="item-count">
      <div className="controls-count">
        <button onClick={handleClickRemove} >-</button>
        <p>{count}</p>
        <button onClick={handleClickAdd} >+</button>
      </div>
      <button className="button-add-count" onClick={() => AddProductInCart(count)} >Agregar producto</button>
    </div>
  )
}
export default ItemCount