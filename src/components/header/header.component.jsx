import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import { createStructuredSelector } from 'reselect'

import { SelectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import './header.style.scss'

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link to='/' className="logo-container">
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to='/shop' className="option">Shop</Link>
                {currentUser
                    ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    : <Link className='option' to='SignIn'>Sign In</Link>
                }
                <CartIcon />
            </div>
            {hidden ? null
                : <CartDropDown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: SelectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
