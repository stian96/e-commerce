"use client"
import { CartLabel } from './CartLabel'
import { CartItems } from './CartItem'
import { FaArrowLeft } from 'react-icons/fa'
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
            <div className='cart__header'>
                <button className='cart__header-close' onClick={closeCart}>
                    <FaArrowLeft />
                </button>
                <h1 className='cart__header-title'>Shopping Cart</h1>
            </div>
            <div className='cart__product-container'>
                <div className='cart__title-container'>
                    <CartLabel array={['Product', 'Quantity', 'Price']}/>
                </div>
                {cartItems.map((item) => (
                    <CartItems item={item} removeFromCart={handleRemoveFromCart}/>
                ))}
            </div>
        </div>
    )
}

export default Cart