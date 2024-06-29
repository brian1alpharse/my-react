import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.png';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex py-1 justify-between items-center">
      <Link to="/">
        <div className="flex flex-row items-center">
          <img src={logo} alt="Logo" className="h-16 w-16" />
          <h1 className="text-2xl font-bold text-blue-900 ml-4">TokoRoihan</h1>
        </div>
      </Link>

      <div>
        <div className="flex space-x-10">
          <Link to="/about">
            <h1 className="text-sky-700">About</h1>
          </Link>
          <Link to="/promo">
            <h1 className="text-sky-700">Promo</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
