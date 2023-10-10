import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/PageNotFound';
import Policy from './pages/Policy';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
};

export default App;
