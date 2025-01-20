const products = [
    { 
        id: 1,
        img: "https://res.cloudinary.com/dg4h1v2ol/image/upload/v1737320359/havanaespecial_wm6v2k.png",
        category: "Ron", 
        name: "Havana Club",
        description: "Un ron joven y ligero con un sabor equilibrado y ligeramente dulce. Ideal para cócteles como el clásico Cuba Libre.",
        price: 10000,
    },
    { 
        id: 2,
        img: "https://res.cloudinary.com/dg4h1v2ol/image/upload/v1737320358/havana7anios_rfsyhj.png",
        category: "Ron",
        name: "Havana 7 años",
        description: "Un ron envejecido que destaca por sus notas de cacao, vainilla y frutas tropicales. Perfecto para tomar solo o con hielo.",
        price: 13000,
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dg4h1v2ol/image/upload/v1737320358/havana15anios_ovrhf2.png",
        category: "Ron",
        name: "Havana 15 años",
        description: "Un ron premium de larga maduración con sabores profundos de caramelo, miel y especias. Un deleite para disfrutar solo en momentos especiales.",
        price: 18000,
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dg4h1v2ol/image/upload/v1737320358/havanaseleccion_uzzi5r.png",
        category: "Ron",
        name: "Havana Selección de Maestros",
        description: "Un ron de alta gama con una mezcla de rones añejos seleccionados, ofreciendo un perfil sofisticado con notas de frutos secos y madera.",
        price: 25000,
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/dg4h1v2ol/image/upload/v1737320359/aguavillavicencio_hrhjfu.jpg",
        category: "Varias",
        name: "Agua sin gas 500 ml",
        description: "Agua mineral natural argentina, conocida por su pureza y equilibrio de minerales. Ideal para refrescarse y acompañar cualquier comida.",
        price: 1000,
    },
    { 
        id: 6,
        img: "https://res.cloudinary.com/dg4h1v2ol/image/upload/v1737320358/cocacola175_vg6cb1.png",
        category: "Gaseosas",
        name: "Coca Cola 1.5 Lts",
        description: "Un refresco icónico con un sabor dulce y burbujeante. Perfecto para disfrutar solo o como mezclador en bebidas.",
        price: 3500,
    },
    { 
        id: 7,
        img: "https://res.cloudinary.com/dg4h1v2ol/image/upload/v1737320357/cepitanaranja_t3ovsm.webp",
        category: "Varias",
        name: "Jugo de Naranja 1 Lt",
        description: "Bebida elaborada con jugo de naranja pasteurizado, con un sabor dulce y cítrico. Ideal para acompañar comidas o como base para cócteles, con la conveniencia de su formato listo para consumir.",
        price: 2500,
    },
]

const getProducts = () => {
    return new Promise( (resolve, reject) => {
          setTimeout(()=>{
          resolve(products)
        }, 2000)
      })
}

export { getProducts }