export type Product = {
    id: number,
    title: string,
    category: string,
    image: string | undefined,
    description: string,
    price: number
}

export type Category = 'PC' | 'Phone' | 'Audio' | 'Camera' | 'Games';