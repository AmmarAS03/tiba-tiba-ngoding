import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AboutUsPage from './pages/AboutUs';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import CreateProgramPage from './pages/CreateProgram';
import Navbar from './components/UI/Commons/Navbar';
import RegisterPage from './pages/Register';
import ProductPage from './pages/Product';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Leaderboard from './components/Leaderboard';




function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster />
        <Routes>
          <Route path="/aboutus" element={<AboutUsPage />}></Route>
          <Route index element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/tesnavbar" element={<Navbar />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/createprogram" element={<CreateProgramPage />}></Route>
          <Route path="/productdetails" element={<ProductDetailsPage />}></Route>
          <Route path="/leaderboard" element={<Leaderboard />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;