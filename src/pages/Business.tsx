
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BriefcaseBusiness, Building, Building2 } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Business = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Banner principal */}
        <div className="bg-orange-50 py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900">UDrive para Empresas</h1>
              <p className="text-xl text-gray-600">
                Replanteando nuestra vida!, contactanos empresas
              </p>
              <div className="inline-block">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 px-8 rounded-lg">
                  Estamos trabajando en esto
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de desarrollo */}
        <div className="py-16 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Próximamente</h2>
              <p className="text-xl text-gray-600">
                Estamos trabajando para conectar con empresas y ofrecer soluciones de movilidad personalizadas para sus necesidades.
              </p>
              <div className="pt-6">
                <div className="animate-pulse flex space-x-4 justify-center">
                  <div className="rounded-full bg-orange-200 h-3 w-3"></div>
                  <div className="rounded-full bg-orange-300 h-3 w-3"></div>
                  <div className="rounded-full bg-orange-400 h-3 w-3"></div>
                  <div className="rounded-full bg-orange-500 h-3 w-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios potenciales */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Servicios que estamos desarrollando</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="hover-lift">
                <CardHeader>
                  <BriefcaseBusiness className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle>Cuentas corporativas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Administra los viajes de tu equipo desde una plataforma centralizada, con reportes detallados y control de gastos.</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">En desarrollo</p>
                </CardFooter>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Building className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle>Transporte para empleados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Soluciones para el traslado de empleados desde y hacia el trabajo, con rutas programadas y vehículos compartidos.</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">En desarrollo</p>
                </CardFooter>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Building2 className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle>Eventos empresariales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Organiza el transporte para conferencias, reuniones y eventos corporativos con facilidad y eficiencia.</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">En desarrollo</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">¿Interesado en colaborar?</h2>
              <p className="text-lg text-gray-600">
                Estamos buscando establecer alianzas con empresas de todos los tamaños. Suscríbete para ser de los primeros en conocer cuando lancemos nuestros servicios empresariales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" disabled>
                  Contáctanos pronto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Business;
