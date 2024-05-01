"use client"
import { CartLabel } from './CartLabel'
import { CartItems } from './CartItem'
import { FaArrowLeft } from 'react-icons/fa'
import { useCart } from '@/context/CartProvider'
import '@/styles/cart.scss'
import { OrderSummary } from './OrderSummary'

type CartProps = {
    isOpen: boolean
    closeCart: () => void
}

const Cart = ({ isOpen, closeCart }: CartProps) => {
    const { cartItems } = useCart()

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
                    <>
                        <CartItems item={item} />
                        <span className='line-separator'></span>
                    </>
                ))}
            </div>
            <OrderSummary />
        </div>
    )
}

export default Cart