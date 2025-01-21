import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.css"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
 
    const { idCategory } = useParams()
    const collectionName = collection(db, "products")

    const getProducts = async() => {
      setLoading(true)
      try {
        const dataDb = await getDocs(collectionName)
        const data = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })
        setProducts(data)
      } catch (error){
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
 
    const getProductsByCategory = async() => {
      setLoading(true)
      try {
        const q = query(collectionName, where("category", "==", idCategory))
        const dataDb = await getDocs(q)
        const data = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })
        setProducts(data)
      } catch(error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
   
    useEffect(() => {
      if(idCategory){
        getProductsByCategory() // Se estaba olvidando llamar a la función con ()
      } else {
        getProducts()
      }
    }, [idCategory])

    if (loading) {
      return <div>Cargando productos...</div>
    }

    return (
      <div className="itemlistcontainer">
        <h1>{greeting}</h1>
        <ItemList products={products} />
      </div>
    )
}

export default ItemListContainer