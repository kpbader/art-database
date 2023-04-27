import './signup.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { firestore, createUserProfileDocument, auth } from '../../firebase/index';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helpers';

const SignUp = () => {

    // const form = useRef();
    // const [signUpForm, setSignUpForm] = useState({ firstName: '', lastName: '', location: '', email: '', password: '' });
    // const { firstName, lastName, location, email, password } = signUpForm; 
    // const [errorMessage, setErrorMessage] = useState('');

    const initialValues = {
        firstname: '',
        lastname:'',
        location:'',
        email: '',
        password: ''
    }

    const [error, setError] = useState(null);

    const handleSignUp = async (values, { setSubmitting }) => {
        const { firstname, lastname, location, email, password } = values;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // call createUserProfileDocument function 
            await createUserProfileDocument(user, values);
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
                <form id="sign-up-form">
                    <h1 id="sign-up-header">Sign Up</h1>
                    <input className="su-form-slot" placeholder="First Name" />
                    <input className="su-form-slot" placeholder="Last Name" />
                    <input className="su-form-slot" placeholder="Location" />
                    <input className="su-form-slot" placeholder="Email" />
                    <input className="su-form-slot" placeholder="Password" />
                    <div id="su-btn-cancel-opt">
                        <button id="sign-up-btn">Sign Up</button>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </Fade>
        </section>
    )
};

export default SignUp;