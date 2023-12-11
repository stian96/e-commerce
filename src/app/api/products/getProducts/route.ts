import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const products = await prisma.product.findMany();

        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ message: "No products found." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
}

export default handler
