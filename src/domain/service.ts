import { Product } from "./types/cartTypes";

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('/api/products/getProducts', {
            method: "GET"
        })
        console.log(`Response from fetchProducts: ${response}`)
        if (!response.ok) {
            throw new Error('Failed to fetch products from API')
        }
        return await response.json() as Product[]
    } catch (error) {
        console.error('Failed to fetch products:', error)
        return []
    }
} 