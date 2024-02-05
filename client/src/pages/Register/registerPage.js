import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/typography.css";
import "./registerPage.css";
import logo from "../../assets/images/logoGR.png";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [nama, setNama] = useState("");
    const [lokasi, setLokasi] = useState("");
    const [notelp, setNotelp] = useState("");
    const [ig, setIg] = useState("");
    const navigate = useNavigate();
  
    const [showPassword, setShowPassword] = useState(false);
    const [registerFailed, setRegisterFailed] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
  
    // TODO: Integrate this function with the backend (DONE)
    const signUpButton = async (e) => {
      try {
        const body = { email, username, password, nama, lokasi, notelp, ig };
        const response = await fetch("https://tiba-tiba-ngoding.vercel.app/users/register", {
          //by default fetch itu methodnya get
          method: "POST", //diganti dari get ke post
          headers: { "Content-Type": "application/json" }, //untuk mengatur header dalam permintaan fetch, membantu server dalam memahami jenis konten yang diterima.
          body: JSON.stringify(body), //untuk mengubah objek body menjadi string JSON yang akan dikirimkan
        });
        if (response.status == 200) {
          console.log(response);
          navigate('/login');
        } else{
          console.log(response);
          setRegisterFailed(true);
        }
      } catch (error) {
        setRegisterFailed(true);
        console.error(error.message);
      }
    };
  
  
    //ini gausa integrate ke BE, ini harusnya di FE nya redirect to Login Page
    // TODO: Integrate this function with the backend
    const ToLoginButton = () => {
      console.log("register");
    };
  
    return (
      <div className="wrapper">
        <section className="register-section">
            <img src={logo}></img>
        </section>
        <section className="register-section">
            <div className="register-card">
                <p className="h5-white">Create Your Account</p>
                <div className="input-section">
                    <div className="input-field">
                        <p className="p6-white">Username</p>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="enter your username here.."
                            className="input-text-field"
                        />
                    </div>
                    <div className="input-field">
                        <p className="p6-white">Name</p>
                        <input
                            type="text"
                            id="name"
                            value={nama}
                            onChange={e => setNama(e.target.value)}
                            placeholder="enter your name here.."
                            className="input-text-field"
                        />
                    </div>
                    <div className="input-field">
                        <p className="p6-white">Email</p>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            className="input-text-field"
                        />
                    </div>
                    <div className="input-password">
                        <p className="p6-white">Password</p>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="******"
                            className="input-text-field"
                        />
                        <button
                            className="p7-white"
                            onClick={togglePasswordVisibility}
                            >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <div className="input-field">
                        <p className="p6-white">Phone Number</p>
                        <input
                            type="text"
                            id="notelp"
                            value={notelp}
                            onChange={e => setNotelp(e.target.value)}
                            placeholder="08XXXX"
                            className="input-text-field"
                        />
                    </div>
                    <div className="input-field">
                        <p className="p6-white">Instagram Account</p>
                        <input
                            type="text"
                            id="ig"
                            value={ig}
                            onChange={e => setIg(e.target.value)}
                            placeholder="@example123"
                            className="input-text-field"
                        />
                    </div>
                    <div className="input-field">
                        <p className="p6-white">City of Residence</p>
                        <select
                            id="lokasi"
                            value={lokasi}
                            onChange={(e) => setLokasi(e.target.value)}
                            className="selectLokasi"
                            >
                                <option value="DKI Jakarta">DKI Jakarta</option>
                                <option value="Banten">Banten</option>
                                <option value="Jawa Barat">Jawa Barat</option>
                                <option value="Jawa Tengah">Jawa Tengah</option>
                                <option value="Jawa Timur">Jawa Timur</option>
                                <option value="Daerah Istimewa Yogyakarta">
                                    Daerah Istimewa Yogyakarta
                                </option>
                                <option value="Bali">Bali</option>
                        </select>
                    </div>
                </div>
                <button
                    onClick={signUpButton}
                    class="custom-button">
                    <p className="p6-white">REGISTER</p>
                </button>
                {registerFailed && (
                    <div class="justify-center text-center items-center text-[#B30000] font-dm-sans text-sm mt-2">
                        Register failed.<br/>
                        Please check your form.
                    </div>
                )}
                <div class="text-card">
                    <div className="p7-white">Have an account?</div>
                    <button class="p7-blue">
                        <Link to='/login'>Login</Link>
                    </button>
                </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default RegisterPage;