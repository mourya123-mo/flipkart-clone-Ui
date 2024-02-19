import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Header = () => {
    const [showLoginDropdown, setShowLoginDropdown] = useState(false);

    const LoginDropdown = () => {
        setShowLoginDropdown(!showLoginDropdown);
    };

    return (
        <div>
            <header className='bg-slate-400 h-20 flex items-center justify-between px-8'>
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} height={100} width={100} alt="Logo" className="mr-2" />
                </Link>
                {/* Search Bar */}
                <div className='w-1/3'>
                    <input type="text"
                        className='w-full h-10 pl-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
                        placeholder='Search for products, categories, etc...' />
                </div>
                {/* Navigation Links */}
                <nav className='space-x-6'>
                    {/* Login */}
                    <div className="relative inline-block text-left">
                       <Link to="/login">
                       <button onClick={LoginDropdown} className="text-white hover:text-blue-500 bg-sky-700 p-2 rounded">
                            Login
                        </button>
                       </Link>
                        {showLoginDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded ">
                                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign-up</Link>
                                {/* <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 2</Link> */}
                                {/* <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 3</Link> */}
                            </div>
                        )}
                    </div>
                    {/* Become a Seller */}
                    <Link to="/" className="text-white hover:text-blue-500 bg-sky-700 p-2 rounded">
                        Become a seller
                    </Link>
                    {/* Signup */}
                    {/* <Link to="/" className="text-white hover:text-blue-500 bg-sky-700 p-2 rounded">
                        Signup
                    </Link> */}
                    {/* Cart */}
                    <Link to="/" className="text-white hover:text-blue-500 bg-sky-700 p-2 rounded">
                        Cart
                    </Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;
