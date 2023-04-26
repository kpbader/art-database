// import Hero from '../hero/hero';
import './home.css';
import SignInForm from '../SignInForm/signin';

const Home = () => {

    return (
        <section id="home-page">
            <div id="home-logo">
                <h1>Art Database App</h1>
                <h3>An app designed for users to track and inventory their art collection</h3>
            </div>
            <SignInForm />
        </section>
    );
};

export default Home;