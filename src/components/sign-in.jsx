import { useState } from 'react'
import { googlSignIn, auth } from '../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'
import CustomBtn from './custom-btn'
import FormInput from './form-input'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password)
            setEmail('')
            setPassword('')
        } catch (error) {
            console.log("error at sign in with email and password", error)
        }
    }

    const handleInputChange = (e, name) => {
        const { value } = e.target

        if (name === 'email') setEmail(value)
        if (name === 'password') setPassword(value)
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email"
                    onChange={e => handleInputChange(e, 'email')} label='Email'
                    value={email} required />
                <FormInput type="password" name="password"
                    onChange={e => handleInputChange(e, 'password')} label='Password'
                    value={password} required />
                <div className="buttons">
                    <CustomBtn type='submit'>Sign In</CustomBtn>
                    <CustomBtn onClick={googlSignIn} isGoogleSignIn>Sign in with Google</CustomBtn>
                </div>
            </form>
        </div>
    )
}

export default SignIn
