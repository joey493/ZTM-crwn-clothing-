import { Component } from 'react'
import { googlSignIn, auth } from '../../firebase/firebase.utils.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import './sign-in.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error)
        }

    }

    handleInputChange = (e) => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email"
                        onChange={this.handleInputChange} label='Email'
                        value={this.state.email} required />
                    <FormInput type="password" name="password"
                        onChange={this.handleInputChange} label='Password'
                        value={this.state.password} required />
                    <div className="buttons">
                        <CustomBtn type='submit'>Sign In</CustomBtn>
                        <CustomBtn onClick={googlSignIn} isGoogleSignIn>Sign in with Google</CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
