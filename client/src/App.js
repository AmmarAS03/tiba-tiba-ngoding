import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from './pages/LandingPage/LandingPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;