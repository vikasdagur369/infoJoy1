import React, { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      window.location.href = "/";
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastname: lname,
          phone: phone,
        });
      }
      console.log("user registered successfully !!");
      toast.success("User registered Successfully !!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message),
        {
          position: "top-center",
        };
    }
  };

  return (
    <div className="app">
      <header className="app-header"></header>
      <div className="app-main">
        <img
          src="https://buyerintent.infojoy.com/assets/img/web/logo.png"
          className="logo"
          alt="Logo"
        />
        <div className="illustration-section">
          <img
            src="https://buyerintent.infojoy.com/assets/img/web/login1.png"
            className="main-image"
            alt="Illustration"
          />
          <h2 className="main-text">
            Scale Your Business with Reliable B2B Data
          </h2>
          <p className="sub-text">Get Ready for your Presence to make Sense.</p>
        </div>
        <div className="form-section">
          <h1>Welcome</h1>
          <h2>Sign Up</h2>
          <form className="signup-form" onSubmit={handleRegister}>
            <label className="input-label">
              First Name<span className="red-asterisk">*</span>
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <label className="input-label">
              Last Name<span className="red-asterisk">*</span>
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
              required
            />
            <label className="input-label">
              Phone<span className="red-asterisk">*</span>
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label className="input-label">
              Email<span className="red-asterisk">*</span>
            </label>
            <input
              type="email"
              className="input-field"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="input-label">
              Password<span className="red-asterisk">*</span>
            </label>
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="submit-button">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
