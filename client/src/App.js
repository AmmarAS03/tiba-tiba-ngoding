import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from './pages/LandingPage/landingPage';
import ActivityPage from './pages/ActivityPage/activityPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;