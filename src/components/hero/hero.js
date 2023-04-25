import './hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const nav = useNavigate();

    return (
        <section className="hero-banner">
            <button className="hero-btn" onClick={() => nav('/sign-up')}>Sign Up</button>
        </section>
    )
};

export default Hero;