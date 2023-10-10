import { Product, Category } from './types/cartTypes';

const productCategories: Category[] = ['Electronic', 'Sport', 'Book', 'Furniture', 'Games']
const productData = {
    'Electronic': [
        { name: 'Smartphone', description: 'A high-end smartphone with a stunning display.' },
        { name: 'Laptop', description: 'A powerful laptop suitable for all your needs.' },
        { name: 'Headphones', description: 'Noise-cancelling headphones with deep bass.' },
        { name: 'Camera', description: 'A DSLR camera with 4K video recording.' }
    ],
    'Sport': [
        { name: 'Football', description: 'A durable football suitable for all weather conditions.' },
        { name: 'Tennis Racket', description: 'A lightweight racket for professional play.' },
        { name: 'Running Shoes', description: 'Comfortable and breathable running shoes.' },
        { name: 'Swimwear', description: 'Quick-drying swimwear with UV protection.' }
    ],
    'Book': [
        { name: 'Mystery Novel', description: 'A thrilling mystery that will keep you on the edge of your seat.' },
        { name: 'Science Fiction', description: 'A futuristic tale of space exploration.' },
        { name: 'Biography', description: 'The life story of a famous personality.' },
        { name: 'Cookbook', description: 'Delicious recipes from around the world.' }
    ],
    'Furniture': [
        { name: 'Sofa', description: 'A comfortable sofa made with premium materials.' },
        { name: 'Dining Table', description: 'A spacious dining table made of solid wood.' },
        { name: 'Wardrobe', description: 'A large wardrobe with ample storage space.' },
        { name: 'Bed', description: 'A king-size bed with a soft mattress.' }
    ],
    'Games': [
        { name: 'Board Game', description: 'A fun board game for the whole family.' },
        { name: 'Video Game', description: 'An action-packed video game with stunning graphics.' },
        { name: 'Card Game', description: 'A classic card game to enjoy with friends.' },
        { name: 'Puzzle', description: 'A challenging puzzle to test your brain.' }
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
const getRandomPrice = (min: number, max: number): number => {
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