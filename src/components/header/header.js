// import React, { useContext } from 'react';
// import { auth } from '../../firebase/index';
// import { UserContext } from '../../context/user-context';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    // const { user } = useContext(UserContext);

    return (
        <nav>
            <div className="nav-logo">
                <Link to="/">Art Database App</Link>
            </div>
            <ul>
                {
                    // !user &&
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                }
                {
                    // user &&
                    // <li onClick={() => auth.signOut()}>
                    <li>
                        Sign Out
                    </li>
                }
                {
                    // !user &&
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                }
            </ul>
        </nav>
    );
};

export default Header;