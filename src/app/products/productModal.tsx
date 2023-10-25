import { Product } from '../../domain/types/cartTypes';
import Card from '../../components/Card';

import '../../styles/modal.scss';

type modalProps = {
    product: Product,
    onClose: () => void,
    isModalOpen: boolean

}

const ProductModal: React.FC<modalProps> = ({ product, onClose, isModalOpen}) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
            <button className='modal-button' onClick={onClose}>X</button>
                <Card product={product} /> 
            </div>
        </div>
    );
};

export default ProductModal;