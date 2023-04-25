import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home-page/home-page';
import SignIn from './components/sign-in/sign-in';
import SignUp from './components/sign-up/sign-up';
// import Gallery from './components/gallery/gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sing-in" element={<SignIn />} />

      </Routes>
    </Router>
  );
}

export default App;
