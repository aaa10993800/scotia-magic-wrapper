
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-scotiabank-lightgray">
      <Header />
      
      <main className="flex-grow py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 text-scotiabank-darkgray">Bienvenido a Scotia en Línea</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-scotiabank-red">Avisos importantes</h2>
              <div className="space-y-4 text-sm">
                <p>
                  <strong>Seguridad:</strong> Recuerda que Scotiabank nunca te enviará correos solicitando 
                  verificar o actualizar tus datos personales a través de enlaces.
                </p>
                <p>
                  <strong>Protección contra fraudes:</strong> Te recomendamos actualizar regularmente 
                  tu software de seguridad y nunca compartir tus claves de acceso.
                </p>
                <p>
                  <strong>Información legal:</strong> Este sitio web está dirigido únicamente a usuarios 
                  que mantienen una relación comercial con Scotiabank Perú S.A.A.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <LoginForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
