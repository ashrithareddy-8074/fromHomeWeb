import { useState } from 'react';
import './sign-up.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignUp = () => {

const [formFields, setFormFields] = useState(defaultFormFields);
const {email, password} = formFields;

const resetFormFields = () => {
    setFormFields(defaultFormFields);
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
}

const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name] : value});
};

    return (
        <div>
            <h1>Sign up form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name='email' value={email}/>
                <input type="password" onChange={handleChange} name='password' value={password}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignUp;