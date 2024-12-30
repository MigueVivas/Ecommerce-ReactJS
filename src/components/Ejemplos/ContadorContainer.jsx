import useState from 'react'
import Contador from './Contador'

const Contador = () => {

    const [ contador, setContador] = useState(0)
    const sumaContador = () => {
        setContador(contador + 1)
    }

  return (
    <Contador contador={contador} sumaContador={sumaContador} />
  )
}

export default ContadorContainer