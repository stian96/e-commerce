'use client';
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Product } from "../domain/types/cartTypes";
import { generateRandomProductList } from '../domain/product';

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(generateRandomProductList())
    }, []);

    return (
        <>
        <Navigation />
        <div>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default ProductPage;