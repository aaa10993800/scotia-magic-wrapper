
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ChevronDown, Info } from "lucide-react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { username, password });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-scotiabank-red border-t-4">
        <CardHeader className="bg-scotiabank-lightgray pb-2">
          <CardTitle className="text-xl font-semibold text-scotiabank-darkgray flex justify-between items-center">
            Ingresar a mi Scotia <span className="text-sm text-scotiabank-gray">Banca por Internet</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Usuario o Tarjeta</Label>
                <Input
                  id="username"
                  placeholder="Ingresa tu usuario o tarjeta"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="border-scotiabank-gray"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Clave</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Ingresa tu clave"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-scotiabank-gray"
                />
              </div>
              
              <div>
                <Button
                  type="submit"
                  className="w-full bg-scotiabank-red hover:bg-red-700"
                >
                  Ingresar
                </Button>
              </div>

              <div className="text-center">
                <Button variant="link" className="text-scotiabank-red">
                  ¿Olvidaste tu clave?
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Button 
              variant="outline" 
              className="w-full justify-between border-scotiabank-gray" 
              onClick={() => setShowHelp(!showHelp)}
            >
              <div className="flex items-center">
                <Info className="h-4 w-4 mr-2" />
                <span>Ayuda de seguridad</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>

            {showHelp && (
              <div className="mt-4 bg-scotiabank-lightgray p-4 text-sm text-gray-600 rounded">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nunca compartas tu clave ni información personal.</li>
                  <li>Scotiabank nunca te solicitará tus claves por correo electrónico o teléfono.</li>
                  <li>Verifica que la dirección web comience con https://.</li>
                  <li>Utiliza equipos y redes seguras para acceder a tu cuenta.</li>
                </ul>
              </div>
            )}

            <div className="mt-6">
              <Button variant="outline" className="w-full border-scotiabank-red text-scotiabank-red">
                Quiero ser cliente
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
