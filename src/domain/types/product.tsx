import { Category } from "./category"

export type Product = {
    id: number,
    title: string,
    image: string | undefined,
    description: string,
    price: number
    category: Category
}
