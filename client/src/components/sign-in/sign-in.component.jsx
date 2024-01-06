import { useState } from 'react';
import { registerApi, loginApi, testApi } from '../../services/auth';
import './sign-in.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {

const [formFields, setFormFields] = useState(defaultFormFields);
const {email, password} = formFields;

const resetFormFields = () => {
    setFormFields(defaultFormFields);
}

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitted');
    await testApi();
}

const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name] : value});
};

    return (
        <div>
            <h1>Sign in form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name='email' value={email}/>
                <input type="password" onChange={handleChange} name='password' value={password}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignIn;