import React from 'react';
import { Product } from '../domain/types/product';
import { useCart } from '@/context/CartProvider';
import Image from 'next/image';

import '@/styles/card.scss';

type CardProps = {
    product: Product;
    onClick?: () => void
}

const Card: React.FC<CardProps> = ({ product, onClick }) => {
    const { addToCart } = useCart()

    const handleAddToCart = () => addToCart(product)

    return (
        <div className='container' onClick={onClick}>
            <div className='container__card'>
                <span className='container__card-category'>{product.category.name}</span>
                <div className='product-info'>
                    <h2 className='container__card-title'>{product.title}</h2>
                    <Image className='container__card-image' src={`${product.image}`} alt='Product Image' width={300} height={320} />
                    <p className='container__card-description'>{product.description}</p>
                    <p className='container__card-price'>{`${product.price} $`}</p>
                    <button className='container__card-button' type='button' onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;