import { CartItem } from "@/domain/types/cartItem";
import '@/styles/cart.scss'

type CartItemProps = {
    item: CartItem
    removeFromCart: (productId: number) => void
}

export const CartItems = ({ item, removeFromCart }: CartItemProps) => {

    return (
        <div className='cart__item-container' key={item.product.id}>
            <h3 className="cart__product-name">{item.product.title}</h3>
            <p className="cart__product-quantity">{item.quantity}</p>
            <p>{item.product.price}</p>
            {/*
            <button 
                className="cart__remove-btn" 
                onClick={() => removeFromCart(item.product.id)}
            >
                Remove from cart
            </button>
            */}
        </div>
    );
};