import { Product, Category } from './types/cartTypes';

const productCategories: Category[] = ['PC', 'Phone', 'Audio', 'Camera', 'Games']
const productData = {
    'PC': [
        { name: 'Laptop', image: '/laptop.png', description: 'A powerful laptop suitable for all your needs.' },
        { name: 'Desktop', image: '/desktop.png', description: 'A high-performance desktop for professional use.' },
        { name: 'Tablet', image: '/tablet.png', description: 'A lightweight tablet with a vibrant display.' }
    ],
    'Phone': [
        { name: 'Smartphone', image: '/phone.png', description: 'A high-end smartphone with a stunning display.' },
        { name: 'Smartwatch', image: '/watch.png', description: 'A stylish smartwatch with health tracking features.' }
    ],
    'Audio': [
        { name: 'Headphones', image: '/headphone.png', description: 'Noise-cancelling headphones with deep bass.' },
        { name: 'Portable Speaker', image: '/speaker.png', description: 'A Bluetooth speaker with clear sound and deep bass.' }
    ],
    'Camera': [
        { name: 'DSLR Camera', image: '/camera.png', description: 'A DSLR camera with 4K video recording.' },
        { name: 'Action Camera', image: '/compact_camera.png', description: 'A compact camera for capturing adventures.' }
    ],
    'Games': [
        { name: 'Gaming Console', image: '/gaming_console.png', description: 'A next-gen gaming console with 4K gaming support.' },
        { name: 'VR Headset', image: '/vr_headset.png', description: 'A virtual reality headset for immersive experiences.' },
        { name: 'Video Game', image: '/game.png', description: 'An action-packed video game with stunning graphics.' }
    ]
};


// Finds the total amount of products in 'productData'.
const numberOfProducts = Object.values(productData).reduce((sum, products) => sum + products.length, 0) - 2;

// Function to get a random category.
const getRandomItem = <T>(list: T[]): T => {
    const index: number = Math.floor(Math.random() * list.length)
    return list[index];
}

// Function to generate a random price between a min and max value.
export const getRandomPrice = (min: number, max: number): number => {
    const number: string = (Math.random() * (max - min) + min).toFixed(2)
    return parseFloat(number);
}

// Function to generate one random product.
const generateRandomProduct = (id: number): Product => {
    const category: Category = getRandomItem(productCategories)
    const productInfo = getRandomItem(productData[category])

    return {
        id: id,
        title: productInfo.name,
        image: productInfo.image,
        description: productInfo.description,
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