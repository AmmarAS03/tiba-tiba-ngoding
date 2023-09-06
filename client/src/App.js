import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import Navbar from './components/UI/Commons/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster />
        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/tesnavbar" element={<Navbar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
