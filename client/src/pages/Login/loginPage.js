import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/typography.css";
import "./loginPage.css";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loginFailed, setLoginFailed] = useState(false);

    const loginButton = async (e) => {
        try {
            const body = { email, password }
            const response = await fetch("https://tiba-tiba-ngoding.vercel.app/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });;

            if (response.status == 200) {
                const dataToken = await response.json();
                localStorage.setItem("token", dataToken.token);
                console.log(response);
                console.log(dataToken)
                navigate('/');
            } else {
                console.log(response);
                setLoginFailed(true);
            }

        } catch (error) {
            setLoginFailed(true);
            console.error(error.message);
            // Handle other errors here
        }
    }

    return (
        <div>
            <section className="login-first-section">
                <div className="login-card">
                    <p className="h5-white">Log Into Your Account</p>
                    <div className="input-section">
                        <div className="input-field">
                            <p className="p6-white">Email Address</p>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="name@email.com"
                                className="input-text-field"
                            />
                        </div>
                        <div className="input-field">
                            <p className="p6-white">Password</p>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="********"
                                className="input-text-field"
                            />
                        </div>
                    </div>
                    <button
                        onClick={loginButton}
                        class="custom-button">
                        <p className="p6-white">LOGIN</p>
                    </button>
                    {loginFailed && (
                        <div class="justify-center items-center text-[#B30000] font-dm-sans text-sm mt-2">
                            Login failed. Please check your email and password.
                        </div>
                    )}
                    <div class="text-card">
                        <div className="p7-white">
                            New to Gatherly?
                        </div>
                        <button class="p7-blue">
                            <Link to='/register'>Register</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginPage;