import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <div className="logo-container">
            <img
              src="https://buyerintent.infojoy.com/assets/img/web/logo.png"
              alt="InfoJoy Logo"
              className="logo"
            />
          </div>
          <img
            src="https://buyerintent.infojoy.com/assets/img/web/login-bg-1.svg"
            alt="Login Illustration"
            className="login-illustration"
          />
        </div>
        <div className="login-form">
          <div className="signup-link">
            <p>
              New User? <a href="#">Sign Up</a>
            </p>
          </div>
          <h2>Welcome Back!</h2>
          <p>Login to Continue</p>
          <form>
            <div className="form-group">
              <label htmlFor="email">
                <i className="icon-email"></i>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                defaultValue="Simran@infojoy.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <i className="icon-password"></i>
              </label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn-login">
              Sign in
            </button>
            <div className="login-with">
              <p>Login with:</p>
              <div className="social-buttons">
                <button type="button" className="btn-social btn-google">
                  <img
                    src="https://buyerintent.infojoy.com/assets/img/web/google.png"
                    alt="Google"
                  />
                </button>
                <button type="button" className="btn-social btn-linkedin">
                  <img
                    src="https://buyerintent.infojoy.com/assets/img/web/linkedin.png"
                    alt="LinkedIn"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
