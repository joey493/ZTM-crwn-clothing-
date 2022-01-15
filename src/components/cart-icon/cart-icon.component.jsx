import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemCount } from '../../redux/cart/cart.selector'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ toggleCartHidden, cartItems }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{cartItems}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItemCount
})
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
