"use client"
import { CartItem } from "@/domain/types/cartItem"
import { useState } from "react"

const Cart = () => {
    const [cartItem, setCartItem] = useState<CartItem[]>([])

    const addToCart = () => {}
    const removeFromCart = () => {}
    const totalPrice = () => {}

    return (
        <div className="cart">
            { cartItem.map((item) => (
                <div key={item.product.id}>
                    <h3 className="cart__product-name">
                        { item.product.title }
                    </h3>
                    <p className="cart__product-quantity">
                        Quantity: { item.quantity }
                    </p>
                    <button className="cart__remove-btn">
                        Remove from cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cart