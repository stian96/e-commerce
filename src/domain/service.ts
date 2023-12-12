import { Product } from "./types/product";

type ResponseType = {
    status: number,
    message: string
}

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('/api/products/getProducts', {
            method: "GET"
        })
        if (!response.ok) {
            throw new Error('Failed to fetch products from API')
        }
        
        const data = await response.json() as ResponseType
        return JSON.parse(data.message) as Product[]
    } catch (error) {
        console.error('Failed to fetch products:', error)
        return []
    }
} 