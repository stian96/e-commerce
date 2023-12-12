import { PrismaClient } from "@prisma/client"
import { getRandomPrice } from '../src/domain/product'


const prisma = new PrismaClient()

const productCategories: string[] = ['PC', 'Phone', 'Audio', 'Camera', 'Games']
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

async function main() {
  console.log("Start seeding the database.")

  // Inserting categories into the database.
  for (const categoryName of productCategories) {
    const category = await prisma.category.create({
      data: { name: categoryName },
    })

    // Inserting products into the database.
    const products = productData[categoryName as keyof typeof productData]
    for (const product of products) {
      await prisma.product.create({
        data: {
          title: product.name,
          image: product.image,
          description: product.description,
          price: getRandomPrice(100, 1000),
          category: {
            connect: { id: category.id }
          }
        }
      })
    }
  }
  console.log("Seeding ended.")
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
