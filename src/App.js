import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/home';
import Footer from './components/footer/footer';
// import Gallery from './components/gallery/gallery';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
