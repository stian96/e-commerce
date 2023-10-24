'use client';

import React, { useState, useEffect } from "react";
import Card from '../../components/Card';
import { Product } from "../../domain/types/cartTypes";
import { generateRandomProductList } from '../../domain/product';
import Navigation from "@/components/Navigation";
import { useDarkMode } from '../../context/DarkModeContext';

import '../../styles/card.scss';

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        setProducts(generateRandomProductList())
    }, []);

    return (
        <>
        <Navigation />
        <div className={`outer-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="grid-container">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
        </>
    );
}

export default ProductPage;