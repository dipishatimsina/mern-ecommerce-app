import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <div>
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="Search product here..."
            className="w-full outline-none"
          />

          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white cursor-pointer">
            <GrSearch />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* User Icon */}
          <div>
            <FaRegCircleUser className="text-3xl cursor-pointer" />
          </div>

          {/* Cart Icon */}
          <div className="text-2xl relative cursor-pointer">
            <FaShoppingCart />

            <div className="bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-3">
              <span className="text-xs">0</span>
            </div>
          </div>

          {/* Login Button */}
          <Link to="/login" className="px-4 py-1 bg-red-600 text-white rounded-full hover:bg-red-700">
            Login
          </Link>

        </div>

      </div>
    </header>
  );
};

export default Header;