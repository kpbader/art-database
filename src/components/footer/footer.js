import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            {year} Art Database 
        </div>
    )
};

export default Footer;