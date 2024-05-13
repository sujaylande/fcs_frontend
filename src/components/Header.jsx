import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
const Header = () => {
  const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userDetailsCookie = Cookies.get("userDetails");
    if (!userDetailsCookie) {
      navigate("/");
    } else {
      const userDetails = JSON.parse(userDetailsCookie);
      setIsLoggedIn(!!userDetails.token);
    }
  }, [navigate]);


  const handleLogout = () => {
    Cookies.remove("userDetails");
    setIsLoggedIn(false);
    navigate("/login");
  };

  console.log("isLoggedIn:", isLoggedIn);

  return (
    <div className="flex justify-between items-center bg-gray-400 py-3 px-5">
      <h1 className="text-[#fff] capitalize text-xl font-bold">
        NITK - Food Court
      </h1>

      {isLoggedIn ? (
        <div className="flex flex-row gap-5">
          <Link
            to="/"
            className="px-2 py-1 bg-red-700 text-[#fff] rounded-md shadow-lg text-sm uppercase font-medium"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="px-2 py-1 bg-blue-700 text-[#fff] rounded-md shadow-lg text-sm uppercase font-medium"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="px-2 py-1 bg-black text-[#fff] rounded-md shadow-lg text-sm uppercase font-medium"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="px-2 py-1 bg-black text-[#fff] rounded-md shadow-lg text-sm uppercase font-medium"
        >
          Admin Login
        </Link>
      )}
    </div>
  );
}

export default Header;