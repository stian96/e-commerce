import { createContext, useContext, useState } from "react"
import { CartItem } from "@/domain/types/cartItem"
import { Product } from "@/domain/types/product"


const CartContext = createContext({
    cartItems: [] as CartItem[],
    addToCart: (product: Product) => {},
    removeFromCart: (productId: number) => {},
    clearCart: () => {},
    increaseQuantity: (productId: number) => {},
    decreaseQuantity: (productId: number) => {},
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {
        const existingItem = cartItems.find((item) => item.product.id === product.id)
        
        // If item exists, only increase quantity.
        if (existingItem) {
            const increasedItems = cartItems.map((item) => (
                item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ))
            setCartItems(increasedItems)
        }
        else {
            // Add new product to cart.
            setCartItems([ ...cartItems, { product, quantity: 1 }])
        }
      }
    
      const removeFromCart = (productId: number) => {
        const existingItem = cartItems.find((item) => item.product.id === productId)

        if (existingItem && existingItem.quantity > 1) {
            // Reduce quantity.
            setCartItems(cartItems.map((item) => (
                item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            )))
        }
        else {
            // Remove product completely
            setCartItems(cartItems.filter((item) => item.product.id !== productId))
        }
      }

      const increaseQuantity = (productId: number) => {
        const updatedItems = cartItems.map(item => (
            item.product.id === productId ? {...item, quantity: item.quantity + 1} : item
        ));
        setCartItems(updatedItems);
      }

      const decreaseQuantity = (productId: number) => {
        const updatedItems = cartItems.map(item => (
            item.product.id === productId ? {...item, quantity: item.quantity - 1} : item
        ));
        setCartItems(updatedItems);

      }

      const clearCart = () => {
        setCartItems([]);
      }

      return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            increaseQuantity, 
            decreaseQuantity 
        }}>
            { children }
        </CartContext.Provider>
      )
}

// Custom hook for using the cart context.
export const useCart = () => useContext(CartContext)