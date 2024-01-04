import { Product } from '@/domain/types/product';
import Image from 'next/image';

import '@/styles/productView.scss'

type ViewProps = {
    product: Product
}

const ProductView = ({ product }: ViewProps) => {

    return (
        <div className='view'>
            <Image className='view__image' src={`${product.image}`} alt='Product Image' width={450} height={500} />
            <section className='view__info'>
                <h1 className='view__info-title'>{product.title}</h1>
                <span className='view__info-product'>DELL XPS 13</span>
                <span className='view__info-price'>{product.price} $</span>
            </section>
        </div>
    )
}

export default ProductView