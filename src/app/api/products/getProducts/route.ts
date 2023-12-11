import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GET = async () => {
    try {
        const products = await prisma.product.findMany({
            include: {
                category: true,
            }
        })

        if (products.length === 0) {
            console.log("No products exists.")
            return NextResponse.json({ status: 404, message: "No products found." })
        }

        console.log(`${products.length} products found!`)
        return NextResponse.json({ status: 200, message: JSON.stringify(products) })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500, message: `Internal server error..` })
    }
}