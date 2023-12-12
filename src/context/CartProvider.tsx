import { createContext, useContext, useState } from "react"
import { CartItem } from "@/domain/types/cartItem"
import { Product } from "@/domain/types/product"


const CartContext = createContext({
    cartItems: [] as CartItem[],
    addToCart: (product: Product) => {},
    removeFromCart: (productId: number) => {},
    clearCart: () => {}
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {
        // TODO: Implement logic.
      };
    
      const removeFromCart = (productId: number) => {
        // TODO: Implement logic.
      };
    
      const clearCart = () => {
        setCartItems([]);
      };

      return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            { children }
        </CartContext.Provider>
      )
}

// Custom hook for using the cart context.
export const useCart = () => useContext(CartContext)