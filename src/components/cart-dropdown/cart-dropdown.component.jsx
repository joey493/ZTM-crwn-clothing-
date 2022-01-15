import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItems } from '../../redux/cart/cart.selector'
import CartItem from '../cart-item/cart-item.component'
import CustomBtn from '../custom-btn/custom-btn.component'
import './cart-dropdown.styles.scss'

const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {cartItems.length ?
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                    : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomBtn onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
            </CustomBtn>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default withRouter(connect(mapStateToProps)(CartDropDown))
