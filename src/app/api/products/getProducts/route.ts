import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"


export const GET = async () => {
    try {
        const products = await prisma.product.findMany()

        if (products) {
            return NextResponse.json({ status: 200, message: products })
        } 
        else {
            return NextResponse.json({ status: 404, message: "No products found." })
        }
    } catch (error) {
        return NextResponse.json({ status: 500, message: "Error fetching products" })
    }
}