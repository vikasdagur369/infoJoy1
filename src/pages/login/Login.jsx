// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import "./Login.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in Successfully", { position: "top-center" });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", {
        position: "top-center",
      });
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastname: lname,
          phone: phone,
        });
      }
      toast.success("User registered Successfully!", {
        position: "top-center",
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-image">
          <div className="logo-container">
            <img
              src="https://buyerintent.infojoy.com/assets/img/web/logo.png"
              alt="InfoJoy Logo"
              className="logo"
            />
          </div>
          <img
            src={
              isLogin
                ? "https://buyerintent.infojoy.com/assets/img/web/login-bg-1.svg"
                : "https://app.infojoy.com/assets/img/web/login1.png"
            }
            alt="Auth Illustration"
            className="auth-illustration"
          />
          <div className="auth-image-text">
            <h3>
              {isLogin
                ? "Scale Your Business with Reliable B2B Data"
                : "Get Ready for your Presence to make Sense."}
            </h3>
            <p>{isLogin ? "" : "Sign Up to Get Started"}</p>
          </div>
        </div>

        <div className="auth-form">
          <h2>{isLogin ? "Welcome Back!" : "Sign Up"}</h2>
          <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    placeholder="First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    placeholder="Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isLogin && (
              <div className="form-extras">
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
            )}
            <button type="submit" className="btn-auth">
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="auth-switch">
            <p>
              {isLogin ? "New User? " : "Already have an account? "}
              <span
                className="toggle-link"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Log In"}
              </span>
            </p>
          </div>
          <div className="social-login">
            <p>Or login with:</p>
            <div className="social-icons">
              <button onClick={() => handleSocialLogin("Google")}>
                <FaGoogle />
              </button>
              <button onClick={() => handleSocialLogin("LinkedIn")}>
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
