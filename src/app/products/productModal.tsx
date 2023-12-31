import { Product } from '../../domain/types/product';
import ProductView from '@/components/ProductView';
import { useDarkMode } from '../../context/DarkModeContext';

import '@/styles/modal.scss';

type modalProps = {
    product: Product,
    onClose: () => void,
}

const ProductModal: React.FC<modalProps> = ({ product, onClose}) => {
    const { isDarkMode } = useDarkMode();
    

    return (
        <div className='modal-overlay'>
            <div className={`modal-content ${isDarkMode ? 'dark-mode' : ''}`}>
            <button className='modal-button' onClick={onClose}>X</button>
                <ProductView product={product} /> 
            </div>
        </div>
    );
};

export default ProductModal;