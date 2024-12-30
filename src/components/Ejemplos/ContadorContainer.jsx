import useState from 'react'

const Contador = () => {

    const [ contador, setContador] = useState(0)
    const sumaContador = () => {
        setContador(contador + 1)
    }

  return (
    <div>
        <p>Contador: {contador} </p>
        <button onClick= {sumaContador}>+</button>
    </div>
  )
}

export default Contador