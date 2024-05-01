import { CartItem } from "@/domain/types/cartItem";
import { useCart } from "@/context/CartProvider";
import { FaMinus, FaPlus } from "react-icons/fa";
import '@/styles/cart.scss'

type CartItemProps = {
    item: CartItem
}

export const CartItems = ({ item }: CartItemProps) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <div className='cart__item-container' key={item.product.id}>
            <p className="cart__item-container__product-name">{item.product.title}</p> 
            <div className="cart__item-container__quantity-control">
                <button onClick={() => decreaseQuantity(item.product.id)}><FaMinus /></button>
                <p className="cart__item-container__product-quantity">{item.quantity}</p>
                <button onClick={() => increaseQuantity(item.product.id)}><FaPlus /></button>
            </div>
            <p className="cart__item-container__product-price">
                {(item.product.price * item.quantity).toFixed(2)}
            </p>
            <button 
                className="cart__item-container__remove-btn" 
                onClick={() => removeFromCart(item.product.id)}
            >
                X
            </button>
        </div>
    );
};