import { Product } from '../../domain/types/cartTypes';
import Card from '../../components/Card';
import { useDarkMode } from '../../context/DarkModeContext';

import '../../styles/modal.scss';

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
                <Card product={product} /> 
            </div>
        </div>
    );
};

export default ProductModal;