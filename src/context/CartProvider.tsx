import { createContext, useContext, useState } from "react"
import { CartItem } from "@/domain/types/cartItem"
import { Product } from "@/domain/types/product"


const CartContext = createContext({
    cartItems: [] as CartItem[],
    addToCart: (product: Product) => {},
    removeFromCart: (productId: number) => {},
    clearCart: () => {}
})

export const CartProvider = () => {
    
}