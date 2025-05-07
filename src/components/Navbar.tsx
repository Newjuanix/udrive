
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-orange-500">
              UDrive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/rider-signup" className="text-gray-700 hover:text-orange-500 font-medium">
              Viaja
            </Link>
            <Link to="/driver-signup" className="text-gray-700 hover:text-orange-500 font-medium">
              Conduce
            </Link>
            <Link to="/business" className="text-gray-700 hover:text-orange-500 font-medium">
              Para empresas
            </Link>
            <Link to="/safety" className="text-gray-700 hover:text-orange-500 font-medium">
              Seguridad
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" className="text-gray-800 hover:text-orange-500">
              ES
            </Button>
            <Button variant="ghost" className="text-gray-800 hover:text-orange-500">
              Ayuda
            </Button>
            <Button variant="ghost" className="text-gray-800 hover:text-orange-500">
              Iniciar sesión
            </Button>
            <Button className="text-white bg-orange-500 hover:bg-orange-600">
              Regístrate
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-4">
            <Link to="/rider-signup" className="text-gray-700 hover:text-orange-500 font-medium py-2">
              Viaja
            </Link>
            <Link to="/driver-signup" className="text-gray-700 hover:text-orange-500 font-medium py-2">
              Conduce
            </Link>
            <Link to="/business" className="text-gray-700 hover:text-orange-500 font-medium py-2">
              Para empresas
            </Link>
            <Link to="/safety" className="text-gray-700 hover:text-orange-500 font-medium py-2">
              Seguridad
            </Link>
            <Link to="/help" className="text-gray-700 hover:text-orange-500 font-medium py-2">
              Ayuda
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-orange-500 font-medium py-2">
              Iniciar sesión
            </Link>
            <Button className="text-white bg-orange-500 hover:bg-orange-600">
              Regístrate
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
