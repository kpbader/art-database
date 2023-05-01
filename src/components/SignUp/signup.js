import './signup.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { firestore, createUserProfileDocument, auth } from '../../firebase/index';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

// validation
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.userName) {
        errors.userName = "Required";
    }
    if (!values.password) {
        errors.password = "Required";
    }

    return errors;
};

const SignUp = () => {

    const initialValues = {
        userName: '',
        email: '',
        password: ''
    }

    const [error, setError] = useState(null);

    const handleSignUp = async (values, { setSubmitting }) => {
        const { userName, email, password } = values;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // call createUserProfileDocument function 
            await createUserProfileDocument(user, { displayName: userName });
            nav('/gallery');
            setSubmitting(false);
        } catch (err) {
            console.log(err);
            setSubmitting(false);
            setError(err);
        }
    }

    const nav = useNavigate();

    return (
        <section id="sign-up-page">
            <Fade up>
                <Formik initialValues={initialValues} validate={validate} onSubmit={handleSignUp}>
                    {
                        ({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                            const { userName, email, password } = errors;
                            return (
                                <form id="sign-up-form" onSubmit={handleSubmit}>
                                    <h1 id="sign-up-header">Sign Up</h1>
                                    <input className={ "su-form-slot" + (userName ? "error" : "")} placeholder="User Name" type="text" name="userName" onChange={handleChange} value={values.userName} />
                                    <input className={ "su-form-slot" + (email ? "error" : "")} placeholder="Email" type="email" name="email" onChange={handleChange} value={values.email} />
                                    <input className={ "su-form-slot" + (password ? "error" : "")} placeholder="Password" type="password" name="password" onChange={handleChange} value={values.password} />

                                    <div id="su-btn-cancel-opt">
                                        <button id="sign-up-btn" type="submit" disabled={isSubmitting}>Sign Up</button>
                                        <div className="error-message">
                                            {
                                                error && <p>{error.message}</p>
                                            }
                                        </div>
                                        <Link to="/">Cancel</Link>
                                    </div>
                                </form>
                            );
                        }
                    }
                </Formik>
            </Fade>
        </section>
    )
};

export default SignUp;