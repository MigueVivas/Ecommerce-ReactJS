import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  
  return (
  <body className='container'>
    <NavBar />
    <ItemListContainer greeting= {<h1>BIENVENIDO A TIENDA ELIXIR</h1>}/> 
    <Footer />
  </body>
  )
}

export default App