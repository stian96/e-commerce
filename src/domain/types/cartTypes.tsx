export type Product = {
    id: number,
    title: string,
    image: string | undefined,
    description: string,
    price: number
    category: Category
}

export type Category = {
    id: number;
    name: string;
}