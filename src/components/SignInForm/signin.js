import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../firebase/index';
import { useState } from 'react';
import { Formik } from "formik";
import './signin.css';

// validation
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    } return errors;
}

const SignInForm = () => {
    const [error, setError] = useState(null);
    const nav = useNavigate();
    const initialValues = {
        email: '',
        password: ''
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        const { email, password } = values;
        try {
           await auth.signInWithEmailAndPassword(email, password);
            setSubmitting(false);
            nav("/gallery");
        } catch (error) {
            console.log(error);
            setSubmitting(false);
            setError(error)
        }
    };

    return (
        <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
            {
                ({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                    const { email } = errors;
                    return (
                        <form id="sign-in-form" onSubmit={handleSubmit}>
                            <h1 id="sign-in-header">Sign in</h1>
                            <input className={"si-form-slot" + (email ? 'error' : '')} type="email" placeholder="Email" name="email" onChange={handleChange} value={values.email} />
                            <input className="si-form-slot" type="password" placeholder="Password" name="password" onChange={handleChange} value={values.password} />
                            <button id="sign-in-btn" type="submit" disabled={isSubmitting}>Sign in</button>
                            <div id="sign-up-link">
                                <p>Don't have an account?</p>
                                <Link to="/sign-up">Sign up</Link>
                            </div>
                            <div className="error-message">
                                {
                                    error && <p>{error.message}</p>
                                }
                            </div>
                        </form>
                    );
                }
            }
        </Formik>
    );
};

export default SignInForm;