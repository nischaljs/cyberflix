import React, { useState, useRef } from "react";
import { validateLoginForm } from "../utils/siginvalidation";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import updateUserInStore from "../utils/updateUserInStore";
import Body from "./Body";

const Signin = () => {
  const [errors, setErrors] = useState({});
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(
      email.current.value,
      password.current.value
    );
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate('/home');
        })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode == "auth/invalid-credential"){
            setErrors({password:"No user found with such email and password"})
          }
        });
      }
  };
  
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/banner.jpg)" }}
    >
      <div className="bg-black bg-opacity-75 p-8 mt-20 rounded-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-8">Sign In</h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              ref={email}
              type="email"
              placeholder="Email or mobile number"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between items-center mt-4 text-gray-400">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-red-600"
            />
            <span className="ml-2">Remember me</span>
          </label>
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <div className="text-gray-400 mb-4">OR</div>
          <button
            type="button"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded mb-4"
          >
            Use a Sign-In Code
          </button>
          <div className="text-gray-400">
            New to our platform?{" "}
            <Link to="/" className="text-white hover:underline">
              Sign up now
            </Link>
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
