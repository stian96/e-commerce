'use client';

import React, { useState, useEffect } from "react";
import Card from '../../components/Card';
import { Product } from "../../domain/types/cartTypes";
import { generateRandomProductList } from '../../domain/product';
import Navigation from "@/components/Navigation";
import ProductModal from '../products/productModal';
import { useDarkMode } from '../../context/DarkModeContext';

import '../../styles/card.scss';

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        setProducts(generateRandomProductList())
    }, []);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <>
        <Navigation />
        <div className={`outer-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="grid-container">
                {products.map(product => (
                    <Card key={product.id} product={product} onClick={() => openModal(product)}/>
                ))}
            </div>
        </div>
        { isModalOpen && <ProductModal product={selectedProduct!}  onClose={closeModal} isModalOpen={isModalOpen}/> }
        </>
    );
}

export default ProductPage;