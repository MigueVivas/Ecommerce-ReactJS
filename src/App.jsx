import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Footer from './components/Footer/Footer'
import { CartProvider } from './Context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css'

function App() {
  
  return (
  <div className='container-app'>
    <BrowserRouter>
    <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={   <ItemListContainer greeting= {"BIENVENIDO A TIENDA ELIXIR"}/> } />
          <Route path="/category/:idCategory" element={ <ItemListContainer greeting={"BIENVENIDO A TIENDA ELIXIR"} /> } />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer/> } />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>

          <Route path="*" element={ <div>Error 404 - Pagina no encontrada</div> } />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  </div>
  )
}

export default App