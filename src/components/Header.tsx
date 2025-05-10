
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
      </div>
    </header>
  );
};

export default Header;
