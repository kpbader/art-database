import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/home';
import SignUp from './components/SignUp/signup';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';
// import Gallery from './components/gallery/gallery';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
