import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from './pages/LandingPage/landingPage';
import LoginPage from './pages/Login/loginPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;