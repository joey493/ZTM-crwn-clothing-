import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

import { SelectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import {
    HeaderContainer,
    LogoContainer,
    Options,
    Option,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <Options>
            <Option to='/shop'>Shop</Option>
            {currentUser ? (
                <Option as='div' onClick={() => auth.signOut()}>
                    Sign Out
                </Option>
            ) : (
                <Option to='/SignIn'>Sign In</Option>
            )}
            <CartIcon />
        </Options>
        {hidden ? null : <CartDropDown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: SelectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
