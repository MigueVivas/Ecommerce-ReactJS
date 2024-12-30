import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const { idProduct } = useParams()

  useEffect(()=> {

    getProducts()
      .then( (data) => {
        const productFind = data.find( (dataProduct) => dataProduct.id === Number(idProduct))
        setProduct(productFind)
      })

      .catch((error) => {
        console.error("Error fetching product:", error)
      })

  }, [idProduct])

  if (!product) {
    return <p>Cargando detalles del producto...</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer