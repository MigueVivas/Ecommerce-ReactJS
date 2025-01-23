import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(false)

  const { idProduct } = useParams()

  const getProduct = async() => {
    try {
      const docRef = doc(db, "products", idProduct)
      const dataDb = await getDoc(docRef)

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data()}
        setProduct(data)
        setError(false)
       }else{
        setError(true)
       }

    } catch (error) {
      console.log("Error al obtener el producto:", error)
      setError(true)
    }
  }

  useEffect(()=> {
    getProduct()
   
  }, [idProduct])

  if (error) {
    return <div className="error-message">
              <h2>Error: El producto no existe o hubo un problema al cargar los detalles.</h2>
              <button><Link className="button-error-message" to="/">Volver al inicio</Link></button>
            </div>
  }

  if (!product) {
    return <p>Cargando detalles del producto...</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer