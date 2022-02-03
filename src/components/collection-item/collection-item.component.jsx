import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import CustomBtn from '../custom-btn/custom-btn.component';
import './collection-item.style.scss';

const CollectionItem = ({ item, addCartItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomBtn inverted onClick={() => addCartItem(item)}>
                ADD TO CART
            </CustomBtn>
        </div>
    );
};

const mapStateDispatchToProps = (dispatch) => ({
    addCartItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapStateDispatchToProps)(CollectionItem);
