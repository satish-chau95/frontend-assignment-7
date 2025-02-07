import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex space-x-4 absolute top-4 left-4">
        <li>
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Create
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
