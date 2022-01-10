import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.style.scss'

const Header = (props) => {
    return (
        <div className='header'>
            <Link to='/' className="logo-container">
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to='/shop' className="option">Shop</Link>
                {props.currentUser
                    ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    : <Link className='option' to='SignIn'>Sign In</Link>
                }
            </div >
        </div >
    )
}

const mapStateToProps = (({ user }) => ({ currentUser: user.currentUser }))

export default connect(mapStateToProps)(Header);
