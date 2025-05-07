
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Users, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Safety = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Banner de Seguridad */}
        <div className="bg-orange-50 py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900">Tu seguridad es nuestra prioridad</h1>
              <p className="text-xl text-gray-600">
                En UDrive, construimos tecnología pensando en la seguridad de todos nuestros usuarios.
              </p>
            </div>
          </div>
        </div>

        {/* Características de Seguridad */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="hover-lift">
                <CardHeader>
                  <ShieldCheck className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle>Verificación de Identidad</CardTitle>
                  <CardDescription>Todos los conductores pasan por una verificación de identidad y antecedentes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Utilizamos tecnología avanzada para verificar la identidad de los conductores y revisar su historial para garantizar un servicio seguro.</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Users className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle>Comunidad Confiable</CardTitle>
                  <CardDescription>Creamos una comunidad basada en el respeto y la confianza mutua.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Nuestros sistemas de calificación y retroalimentación aseguran que tanto conductores como pasajeros mantengan altos estándares.</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Info className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle>Información en Tiempo Real</CardTitle>
                  <CardDescription>Comparte tu viaje y ubicación con amigos y familiares.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Nuestras funciones de seguimiento en tiempo real permiten compartir detalles del viaje para mayor tranquilidad.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Compromiso de Seguridad */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center">Nuestro Compromiso</h2>
              <p className="text-lg text-gray-600">
                Estamos comprometidos a mejorar continuamente nuestras medidas de seguridad. Trabajamos con expertos en seguridad, autoridades y nuestra comunidad para desarrollar nuevas funciones y políticas que ayuden a que todos se sientan seguros.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tecnologías de seguridad</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Verificación de antecedentes de conductores</li>
                  <li>Verificación de identidad mediante reconocimiento facial</li>
                  <li>Monitoreo de velocidad y comportamiento de conducción</li>
                  <li>Botón de emergencia integrado en la aplicación</li>
                  <li>Centro de seguridad 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Safety;
