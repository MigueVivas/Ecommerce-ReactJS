import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  
  return (
  <body className='container'>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting= {"BIENVENIDO A TIENDA ELIXIR"}/> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer greeting={"BIENVENIDO A TIENDA ELIXIR"} /> } />
        <Route path="/detail/:idProduct" element={ <ItemDetailContainer/> } />

        <Route path="*" element={ <div>Error 404 - Pagina no encontrada</div> } />
      </Routes>

      <Footer />

    </BrowserRouter>
  </body>
  )
}

export default App