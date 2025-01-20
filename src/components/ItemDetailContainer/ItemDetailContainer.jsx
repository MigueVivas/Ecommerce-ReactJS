import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const { idProduct } = useParams()

  const getProduct = async() => {
    try {
      const docRef = doc(db, "products", idProduct)
      const dataDb = await getDoc(docRef)

      const data = { id: dataDb.id, ...dataDb.data()}

      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getProduct()
   
  }, [idProduct])

  if (!product) {
    return <p>Cargando detalles del producto...</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer