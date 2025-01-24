import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../Context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  })

  const [orderId, setOrderId] = useState(null)

  const { cart, totalPrice } = useContext(CartContext)

  const handleChangeInput = (event) => {
    
    setDataForm( { ...dataForm, [event.target.name] : event.target.value } )
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()
    const order = { 
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
      date: Timestamp.fromDate( new Date() )
     }

     await uploadOrder(order) 

  }

  const uploadOrder = async(newOrder) => {
    try {
      const ordersRef = collection(db, "orders")
      const response = await addDoc(ordersRef, newOrder)
      setOrderId(response.id )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {
        orderId ? (
          <div>
            <p>Orden cargada correctamente, su número de seguimiento es:</p>
            <h3>{orderId}</h3>
          </div>
        ) : (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>
        )
      }
    </div>
  )
}

export default Checkout
