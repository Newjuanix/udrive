
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('ride');

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-20">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Pide un viaje, llega a tu destino con <span className="text-orange-500">UDrive</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600">
              Solicita un viaje, conduce o conviértete en socio de restaurante.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Tabs defaultValue="ride" onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="ride" className="text-base">Viaja</TabsTrigger>
                  <TabsTrigger value="drive" className="text-base">Conduce</TabsTrigger>
                </TabsList>
                
                <TabsContent value="ride" className="space-y-4">
                  <div className="flex flex-col gap-4">
                    <Input placeholder="Ingresa la ubicación de recogida" className="h-12" />
                    <Input placeholder="Ingresa tu destino" className="h-12" />
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full h-12 text-base">
                      Solicitar viaje ahora
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="drive" className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Gana dinero conduciendo</h3>
                    <p className="text-gray-600">Sé tu propio jefe y gana dinero cuando quieras.</p>
                    <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white w-full h-12 text-base">
                      <a href="/driver-signup">Regístrate para conducir</a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-[400px] rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-75 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/50 to-transparent text-white">
                <p className="text-2xl font-semibold">UDrive te lleva a donde necesites ir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
