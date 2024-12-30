import React from 'react'

const Contador = ({contador, sumaContador}) => {
  return (
    <div>
        <p>Contador: {contador} </p>
        <button onClick= {sumaContador}>+</button>
    </div>
  )
}

export default Contador