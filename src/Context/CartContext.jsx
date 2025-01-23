import { createContext, useState, useEffect } from "react"

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart-ecommerce")) || []);

  useEffect(() => {
    localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
  }, [cart])

  const addProduct = (newProduct) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((productCart) => productCart.id === newProduct.id);
      if (index === -1) {
        return [...prevCart, newProduct];
      }
      const updatedCart = [...prevCart];
      updatedCart[index].quantity += newProduct.quantity;
      return updatedCart;
    })
  }

  const totalQuantity = () => {
    const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);
    return quantity
  }

  const totalPrice = () => {
    const price = cart.reduce((total, productCart) => total + productCart.quantity * productCart.price, 0)
    return price;
  }

  const deleteProductById = (idProduct) => {
    const filterProducts = cart.filter((productCart) => productCart.id !== idProduct);
    setCart(filterProducts);
  }

  const deleteCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        totalQuantity,
        totalPrice,
        deleteProductById,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider };