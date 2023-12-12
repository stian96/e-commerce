"use client"
import { useCart } from "@/context/CartProvider"

type CartProps = {
    className?: string
}

const Cart = ({ className }: CartProps) => {
    const { cartItems, removeFromCart } = useCart()

    const handleRemoveFromCart = (productId: number) => {
        removeFromCart(productId)
    }

    return (
        <div className={className || 'cart'}>
            { cartItems.map((item) => (
                <div key={item.product.id}>
                    <h3 className="cart__product-name">
                        { item.product.title }
                    </h3>
                    <p className="cart__product-quantity">
                        Quantity: { item.quantity }
                    </p>
                    <button 
                        className="cart__remove-btn" 
                        onClick={() => handleRemoveFromCart(item.product.id)}
                    >
                        Remove from cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cart