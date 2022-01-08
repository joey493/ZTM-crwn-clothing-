import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'

const Header = ({ currentUser }) => {
    return (
        <header className="header">
            <Link to='/' className="logo-container">
                <Logo className='logo' />
            </Link>
            <nav className="options">
                <Link to='/shop' className="option">Shop</Link>
                {currentUser
                    ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    : <Link className='option' to='SignIn'>Sign In</Link>
                }
            </nav>
        </header>
    )
}

export default Header
