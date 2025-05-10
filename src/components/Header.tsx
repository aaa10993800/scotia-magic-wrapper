
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex-1">
          <img 
            src="https://scotiabank-thumbnails.streamlit.app/scotiabank_thumbnail.png"
            alt="Scotiabank Logo"
            className="h-10"
          />
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-scotiabank-gray">
          <a href="#" className="hover:text-scotiabank-red">Personas</a>
          <a href="#" className="hover:text-scotiabank-red">Empresas</a>
          <a href="#" className="hover:text-scotiabank-red">Acerca de</a>
          <a href="#" className="hover:text-scotiabank-red">Ayuda</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <img 
            src="https://www.scotiabank.com.pe/content/dam/scotiabank/peru/images/corp/logo-felaban-header.png" 
            alt="Felaban Logo" 
            className="h-8"
          />
          <img 
            src="https://www.scotiabank.com.pe/content/dam/scotiabank/peru/images/corp/logo-asb-header.png" 
            alt="ASB Logo" 
            className="h-8"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
