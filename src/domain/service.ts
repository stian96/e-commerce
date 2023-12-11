import { Product } from "./types/cartTypes";

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('/app/api/products/getProducts')
        if (!response.ok) {
            throw new Error('Failed to fetch products from API')
        }
        return await response.json() as Product[]
    } catch (error) {
        console.error('Failed to fetch products:', error)
        return []
    }
} 