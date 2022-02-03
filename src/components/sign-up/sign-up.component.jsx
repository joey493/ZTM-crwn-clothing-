import { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    {/*Display Name*/}
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        onChange={this.handleChange}
                        required
                    />

                    {/*email*/}
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    {/*Password*/}
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />

                    {/*confirmPassword*/}
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomBtn type='submit'>SIGN UP</CustomBtn>
                </form>
            </div>
        );
    }
}

export default SignUp;
