
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Map from '@/components/Map';

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
                  <Map />
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
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
