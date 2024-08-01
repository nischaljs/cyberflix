import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("some error occured while signing out..");
      });
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-gradient-to-b from-black z-50 flex items-center justify-between px-5 py-2">
      <img src="/Netflix_Logo_PMS.png" alt="Logo" className="h-12 ml-36" />
      {user && (
        <div className="flex items-center">
          <div className="relative">
            <div
              className="logout p-1 rounded-full border-2 border-black w-fit bg-red-500 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={user.photoURL} alt="User" className="h-7" />
            </div>
            {dropdownVisible && (
              <div
                className="absolute right-0 w-36 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Settings
                </a>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
          <p className="p-2 text-white font-bold">{user.displayName? user.displayName :"guest"}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
