import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            {year} Art Database App
        </div>
    )
};

export default Footer;