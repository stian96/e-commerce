"use client"
import { CartItem } from "@/domain/types/cartItem"
import { useState } from "react"

const Cart = () => {
    const [cartItem, setCartItem] = useState<CartItem[]>([])

    return (
        <div>This is the shopping cart!</div>
    )
}

export default Cart