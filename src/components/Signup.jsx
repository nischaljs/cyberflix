import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import passowordvalidation from "../utils/passowordvalidation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Signup = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const fullNameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setEmailSubmitted(true);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const password = passwordRef.current.value;
    const errors = passowordvalidation(password);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: "/user-icon.png",
          })
            .then(() => {
              const currentUser = auth.currentUser;
              dispatch(
                addUser({
                  uid: currentUser.uid,
                  email: currentUser.email,
                  displayName: currentUser.displayName,
                  photoURL: currentUser.photoURL,
                })
              );
            })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + ":" + errorMessage);
        });
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-70"></div>
      <div className="relative text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-2xl text-white mb-4">
          Watch anywhere. Cancel anytime.
        </h2>
        {!emailSubmitted && (
          <p className="text-lg text-white mb-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        )}
        <form
          className="flex justify-center items-center flex-col"
          onSubmit={emailSubmitted ? handleFinalSubmit : handleEmailSubmit}
        >
          {!emailSubmitted && (
            <div className="flex items-center border border-gray-400 rounded overflow-hidden mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="p-3 text-lg text-black flex-grow"
                ref={emailRef}
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6"
              >
                Get Started
              </button>
            </div>
          )}
          {emailSubmitted && (
            <>
              <div className="flex items-center border border-gray-400 rounded overflow-hidden mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 text-lg text-black flex-grow"
                  ref={fullNameRef}
                />
              </div>
              <div className="flex items-center border border-gray-400 rounded overflow-hidden mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 text-lg text-black flex-grow"
                  ref={passwordRef}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6"
              >
                Complete Signup
              </button>
            </>
          )}
        </form>
        <div className="mt-4 text-white">
          Already have an account?
          <Link to="/signin" className="text-white ml-2 hover:underline">
            Sign in now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
