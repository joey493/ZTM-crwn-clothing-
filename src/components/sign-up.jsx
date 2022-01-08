import { useState } from 'react'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import CustomBtn from './custom-btn'
import FormInput from './form-input'

const SignUp = () => {
    const [signUpState, setSignUpState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = signUpState;


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) return alert("password don't match")

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await createUserProfileDocument(user, { displayName });
            setSignUpState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setSignUpState({
            ...signUpState,
            [name]: value
        });
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                {/*Display Name*/}
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Display Name'
                    onChange={handleChange}
                    required
                />

                {/*email*/}
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                {/*Password*/}
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    onChange={handleChange}
                    required
                />

                {/*confirmPassword*/}
                <FormInput
                    name='confirmPassword'
                    type='password'
                    label='Confirm Password'
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <CustomBtn type='submit'>SIGN UP</CustomBtn>
            </form>
        </div>
    )
}

export default SignUp

