import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AboutUsPage from './pages/AboutUs';


function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster />
        <Routes>
          <Route path="/aboutus" element={<AboutUsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;