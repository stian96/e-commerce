import { Product, Category } from './types/cartTypes';

const productCategories: Category[] = ['Electronic', 'Sport', 'Book', 'Furniture', 'Games']
const productData = {
    'Electronic': ['Smartphone', 'Laptop', 'Headphones', 'Camera'],
    'Sport': ['Football', 'Tennis Racket', 'Running Shoes', 'Swimwear'],
    'Book': ['Mystery Novel', 'Science Fiction', 'Biography', 'Cookbook'],
    'Furniture': ['Sofa', 'Dining Table', 'Wardrobe', 'Bed'],
    'Games': ['Board Game', 'Video Game', 'Card Game', 'Puzzle']
}

// Finds the total amount of products in 'productData'.
const numberOfProducts = Object.values(productData).reduce((sum, products) => sum + products.length, 0);

// Function to get a random category.
const getRandomItem = <T>(list: T[]): T => {
    const index: number = Math.floor(Math.random() * list.length)
    return list[index];
}

// Function to generate a random price between a min and max value.
const getRandomPrice = (min: number, max: number): number => {
    const number: string = (Math.random() * (max - min) + min).toFixed(2)
    return parseFloat(number);
}

// Function to generate one random product.
const generateRandomProduct = (id: number): Product => {
    const category: Category = getRandomItem(productCategories)
    const title: string = getRandomItem(productData[category])

    return {
        id: id,
        title: title,
        category: category,
        price: getRandomPrice(10, 1000)
    };
}

// Function to generate a random list of products. 
export const generateRandomProductList = (): Product[] => {
    const productList: Product[] = []
    let id = 0;

    while (productList.length < numberOfProducts) {
        const product: Product = generateRandomProduct(id);
        
        // Check if the product already exists in the list. 
        if (!productExists(productList, product)) {
            productList.push(product);
            id++;
        }
    }
    return productList;
}

// Helper function used to check if a product is already in the return list. 
const productExists = (productList: Product[], product: Product): boolean => {
    const doesExist: boolean = productList.some(p => p.title === product.title)
    return doesExist
}