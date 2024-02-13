import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'

const Header = () => {
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
                    <Link to="/" className="text-white hover:text-blue-500">
                        Login
                    </Link>
                    {/* Become a Seller */}
                    <Link to="/" className="text-white hover:text-blue-500">
                        Become a seller
                    </Link>
                    {/* Cart */}
                    <Link to="/" className="text-white hover:text-blue-500">
                        Cart
                    </Link>
                </nav>
            </header>
        </div>
        
    )
}

export default Header
