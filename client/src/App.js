import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AboutUsPage from './pages/AboutUs';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import CreateProgramPage from './pages/CreateProgram';
import Navbar from './components/UI/Commons/Navbar';
import RegisterPage from './pages/Register';
import ProductPage from './pages/Product';
import ProductDetailsPage from './pages/ProductDetailsPage'
import Leaderboard from './components/Leaderboard';
import MyActivity from './components/MyActivity';
import Attendance from './components/Attendance';
import Footer from './components/UI/Commons/Footer';
import DashboardPage from './pages/Dashboard';
import EditProgramPage from './components/EditProgram';
import EnrolledProgramPage from './pages/EnrolledProgram';
import AboutUsNotLoginPage from './pages/AboutUsNotLogin';
import ProductByID from './components/ProductByID';




function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Link path="/tesnavbar" element={<Navbar />}></Link>
        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="/aboutus" element={<AboutUsPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
         
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/createprogram" element={<CreateProgramPage />}></Route>
          <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
          <Route path="/leaderboard" element={<Leaderboard />}></Route>
          <Route path="/myactivity" element={<MyActivity />}></Route>
          <Route path="/attendance/:id" element={<Attendance />}></Route>
          <Route path="/tesfooter" element={<Footer />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/editprogram/:id" element={<EditProgramPage />}></Route>
          <Route path="/enrolledprogram" element={<EnrolledProgramPage />}></Route>
          <Route path="/about" element={<AboutUsNotLoginPage />}></Route>

        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;