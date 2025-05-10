
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img 
              src="https://scotiabank-thumbnails.streamlit.app/scotiabank_thumbnail.png"
              alt="Scotiabank Logo"
              className="h-8"
            />
            <img 
              src="https://www.scotiabank.com.pe/content/dam/scotiabank/peru/images/corp/scotia-en-linea-logo.png"
              alt="Scotia en Línea Logo"
              className="h-6"
            />
          </div>
          <div className="flex space-x-4 text-sm text-scotiabank-gray">
            <a href="#" className="hover:underline">Términos y Condiciones</a>
            <a href="#" className="hover:underline">Políticas de Privacidad</a>
            <a href="#" className="hover:underline">Seguridad</a>
            <a href="#" className="hover:underline">Contáctenos</a>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-between items-center mt-6 border-t border-gray-100 pt-6">
          <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
            <img 
              src="https://www.scotiabank.com.pe/content/dam/scotiabank/peru/images/corp/sbs-logo.png"
              alt="SBS Logo"
              className="h-10"
            />
            <img 
              src="https://www.scotiabank.com.pe/content/dam/scotiabank/peru/images/corp/asbanc-logo.png"
              alt="Asbanc Logo"
              className="h-10"
            />
            <img 
              src="https://www.scotiabank.com.pe/content/dam/scotiabank/peru/images/corp/idecopi-logo.png"
              alt="Indecopi Logo"
              className="h-10"
            />
          </div>
        </div>
        
        <div className="text-xs text-center md:text-left text-scotiabank-gray mt-6">
          <p>© {new Date().getFullYear()} Scotiabank Perú S.A.A. Todos los derechos reservados.</p>
          <p className="mt-2">Scotiabank Perú S.A.A. Av. Dionisio Derteano 102, San Isidro, Lima - Perú</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
