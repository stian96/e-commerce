"use client"
import { Dispatch, SetStateAction } from 'react'
import { useCart } from '@/context/CartProvider'
import '@/styles/cart.scss'

type CartProps = {
    isOpen: boolean
    closeCart: () => void
}

const Cart = ({ isOpen, closeCart }: CartProps) => {
    const { cartItems, removeFromCart } = useCart()

    const handleRemoveFromCart = (productId: number) => {
        removeFromCart(productId)
    }

    return (
        <div className={isOpen ? 'cart cart-visible' : 'cart'}>
            <button className='cart__close' onClick={closeCart}>
                X
            </button>
            { cartItems.map((item) => (
                <div className='cart__item-container' key={item.product.id}>
                    <h3 className="cart__product-name">
                       Product: { item.product.title }
                    </h3>
                    <p className="cart__product-quantity">
                        Quantity: { item.quantity }
                    </p>
                    <p>
                        Price: { item.product.price }
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