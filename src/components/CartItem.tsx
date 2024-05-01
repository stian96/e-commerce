import { CartItem } from "@/domain/types/cartItem";
import '@/styles/cart.scss'

type CartItemProps = {
    item: CartItem
    removeFromCart: (productId: number) => void
}

export const CartItems = ({ item, removeFromCart }: CartItemProps) => {

    return (
        <div className='cart__item-container' key={item.product.id}>
            <p className="cart__item-container__product-name">{item.product.title}</p> 
            <p className="cart__item-container__product-quantity">{item.quantity}</p>
            <p className="cart__item-container__product-price">{item.product.price}</p>
            <button 
                className="cart__item-container__remove-btn" 
                onClick={() => removeFromCart(item.product.id)}
            >
                X
            </button>
        </div>
    );
};