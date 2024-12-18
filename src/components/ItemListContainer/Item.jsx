import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <Link to={"/detail/"+product.id} className="item">
      <img src={product.img} className="img-item" alt="" width={100} />
      <p className="text-item">{product.drinkName}</p>
      <p className="text-item">${product.price}</p>
    </Link>
  )
}
export default Item