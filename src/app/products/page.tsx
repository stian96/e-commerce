'use client';

import React, { useState, useEffect } from "react";
import Card from '../../components/Card';
import { Product } from "../../domain/types/cartTypes";
import Navigation from "@/components/Navigation";
import ProductModal from '../products/productModal';
import { useDarkMode } from '../../context/DarkModeContext';
import { fetchProducts } from '../../domain/service'

import '../../styles/card.scss';

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        fetchProducts()
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.error(error))
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
        { isModalOpen && <ProductModal product={selectedProduct!}  onClose={closeModal} /> }
        </>
    );
}

export default ProductPage;