import { Link } from "react-router-dom";

import './signin.css';

const SignInForm = () => {
    // const nav = useNavigate();
    return (
        <form id="sign-in-form">
            <h1 id="sign-in-header">Sign in</h1>
            <input className="si-form-slot" placeholder="Email" />
            <input className="si-form-slot" placeholder="Password" />
            <button id="sign-in-btn">Sign in</button>
            <div id="sign-up-link">
                <p>Don't have an account?</p>
                <Link to="/sign-up">Sign up</Link>
            </div>
        </form>
    );
};

export default SignInForm;