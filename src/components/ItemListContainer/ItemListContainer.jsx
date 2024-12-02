const ItemListContainer = ({ greeting }) => {
    return (
        <main>
            <h1>{ greeting}</h1>
            <h2>Tu tienda de bebidas premium online.</h2>
             <div className='mainText'>
                <p>Explora nuestro amplio catálogo de bebidas alcohólicas y no alcohólicas, cuidadosamente seleccionadas para cada ocasión. Desde refrescantes jugos y sodas hasta los licores más exquisitos, en Elixir encontrarás todo lo que necesitas para disfrutar con amigos, familia o simplemente darte un gusto especial.</p>
                
                <p> Elige tus productos favoritos y crea la combinación perfecta. Nuestro sistema de compra en línea es fácil de usar, permitiéndote calcular el precio total de tu pedido en solo unos clics. En Elixir, cada compra es una experiencia única.</p>
                
                <p> Disfruta de nuestras bebidas con moderación y asegura momentos inolvidables sin excesos. Y recuerda, si eres menor de edad, no consumas bebidas alcohólicas.</p>
            </div>
        </main>
    )
}

export default ItemListContainer