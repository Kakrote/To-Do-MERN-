import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll'

// Profile Component
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-img relative bg-slate-800 p-3 py-2 border border-gray-900 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white">
        A
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const navigate=useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState(false);

  const toggelPorfile=()=>{
    setShowProfile(!showProfile)
    console.log(showProfile)
  }


  return (
    <nav className="flex  justify-between items-center border  border-gray-900 shadow-lg shadow-sky-400/20 p-3  w-[70%] rounded-2xl mt-1 mx-auto">
      {/* Logo */}
      <div className="Logo flex items-center">
        <span className="text-xl text-white">YOUR TASK</span>
        <span className="text-4xl font-bold text-green-400">'S</span>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <ul className="flex gap-6 justify-center items-center">
          {isAuthenticated ? (
            <>
              <li>
                <NavLink
                  to="/todos"
                  className={({ isActive }) =>
                    `text-[20px] transition-all ${isActive ? "text-green-400 font-bold" : "text-white hover:text-green-400"}`
                  }
                >
                  Todos
                </NavLink>
              </li>
              <li className="relative">
               <button className=" cursor-pointer   rounded-full" onClick={toggelPorfile}><Profile/></button>
               {showProfile && <div className="absolute  mt-3   w-fit text-white  rounded-lg">
                  <ul className="flex flex-col gap-2">
                    <li>
                     <button className="cursor-pointer  rounded-full px-2" onClick={()=>{
                      dispatch(logout())
                      navigate('/login');
                     }}>Logout</button>
                    </li>
                  </ul>
                </div>}
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `transition-all ${isActive ? "text-red-500 font-bold" : "text-white hover:text-red-500"}`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `transition-all ${isActive ? "text-red-500 font-bold" : "text-white hover:text-red-500"}`
                  }
                >
                  Register
                </NavLink>
              </li>
              {/* <li>
                <Link to="aboutapp"
                smooth={true}
                duration={800}
                className={({isActive})=>`transition-all text-white ${isActive ? 'text-red-500 font-bold':'text-white hover:text-red-500'}`}>
                  about app
                </Link>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
