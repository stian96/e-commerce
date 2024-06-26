'use client';

import React, { useState, useEffect } from "react";
import Card from '@/components/Card';
import { Product } from '@/domain/types/product';
import ProductModal from '../products/productModal';
import ItemsCount from "@/components/ItemsCount";
import Sidebar from "@/components/Sidebar";
import { useDarkMode } from '@/context/DarkModeContext';
import { fetchProducts } from '@/domain/service'

import '@/styles/card.scss';
import '@/styles/products.scss';
import Navigation from "@/components/Navigation";
import Cart from "@/components/Cart";

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const { isDarkMode } = useDarkMode();
    const [isCartVisible, setIsCartVisible] = useState(false)

    const toggleVisibillity = () => {
        console.log("Icon clicked!")
        setIsCartVisible(!isCartVisible)
    }

    useEffect(() => {
        fetchProducts()
            .then(data => {
                setProducts(data)
                setFilteredProducts(data)
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

    const handleCategorySelection = (category: string) => {
        if (category === 'All') {
            setFilteredProducts(products)
        }
        else {
            const filtered = products.filter(product => product.category.name === category)
            setFilteredProducts(filtered)
        }
    }

    return (
        <>
            <Navigation onCartIconClicked={toggleVisibillity} />
            <div className={`product-content ${isDarkMode ? 'dark-mode' : ''}`}>
                <Sidebar onCategoryselected={handleCategorySelection} />
                <div className='outer-container'>
                <ItemsCount count={ filteredProducts.length }/>
                    <div className="grid-container">
                        {filteredProducts.map(product => (
                            <Card key={product.id} product={product} onClick={() => openModal(product)}/>
                        ))}
                    </div>
                </div>
            </div>
            { isModalOpen && <ProductModal product={selectedProduct!}  onClose={closeModal} /> }
            <Cart isOpen={isCartVisible} closeCart={toggleVisibillity} />
        </>
    );
}

export default ProductPage;