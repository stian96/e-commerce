'use client';

import React, { useState, useEffect } from "react";
import Card from '../../components/Card';
import { Product } from "../../domain/types/cartTypes";
import { generateRandomProductList } from '../../domain/product';
import Navigation from "@/components/Navigation";

import '../../styles/card.scss';

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(generateRandomProductList())
    }, []);

    return (
        <div className="outer-container">
            <Navigation />
            <div className="grid-container">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductPage;