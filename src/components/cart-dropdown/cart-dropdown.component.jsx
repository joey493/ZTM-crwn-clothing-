import CustomBtn from '../custom-btn/custom-btn.component'
import './cart-dropdown.styles.scss'

const CartDropDown = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items" />
            <CustomBtn />
        </div>
    )
}

export default CartDropDown
