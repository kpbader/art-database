import './gallery.css';
import GalleryModal from '../GalleryModal/modal';
import { auth } from '../../firebase/index';
// import { UserContext } from '../../context/user-context';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const nav = useNavigate();
    const [logged, setLogged] = useState(false)
    // const { user } = useContext(UserContext);
    const { currentUser } = auth
    console.log(auth);

    function logOut() {
        auth.signOut()
        setLogged(true)
        nav("/");
    };

    useEffect(() => {
        setLogged(false)
    }, [logged])

    return (
        <>
            <section id="gallery-page">
                <GalleryModal />
                {
                    currentUser ? (
                        <button id="sign-out-btn" onClick={() => logOut()}>Sign Out</button>
                    ) : ''
                }
            </section>
        </>
    );

};

export default Gallery;