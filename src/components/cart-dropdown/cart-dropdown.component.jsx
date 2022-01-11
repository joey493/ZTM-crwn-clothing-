import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import CustomBtn from '../custom-btn/custom-btn.component'
import './cart-dropdown.styles.scss'

const CartDropDown = ({ cartItems }) => {
    console.log(cartItems)
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem} />
                )}
            </div>
            <CustomBtn />
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems })

export default connect(mapStateToProps)(CartDropDown)
