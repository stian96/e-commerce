import React from 'react';
import { Product } from '../domain/types/cartTypes';

import '../styles/card.scss';

type CardProps = {
    product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {

    return (
        <div className='container'>
            <div className='container__card'>
                <span className='container__card-category'>{product.category}</span>
                <div className='product-info'>
                    <h2 className='container__card-title'>{product.title}</h2>
                    <p className='container__card-description'>{product.description}</p>
                    <p className='container__card-price'>{product.price}</p>
                    <button className='container__card-button' type='button'>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;