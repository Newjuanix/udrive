
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

// Add Google Maps type definitions
declare global {
  interface Window {
    google: any;
  }
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState('ride');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const mapRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para solicitar un viaje
    console.log('Solicitud de viaje:', { pickup, destination });
  };

  useEffect(() => {
    // Cargar la API de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (mapRef.current && window.google) {
      // Inicializar el mapa centrado en Bogotá
      const bogota = { lat: 4.6097, lng: -74.0817 }; // Coordenadas de Bogotá
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: bogota,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
      });

      // Añadir un marcador en el centro de Bogotá
      new window.google.maps.Marker({
        position: bogota,
        map: mapInstance,
        title: "Bogotá, Colombia"
      });
    }
  };

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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Ingresa la ubicación de recogida"
                      className="h-12"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                    <Input
                      placeholder="Ingresa tu destino"
                      className="h-12"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white w-full h-12 text-base"
                    >
                      Solicitar viaje ahora
                    </Button>
                  </form>
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
            <div 
              ref={mapRef} 
              className="w-full h-[400px] rounded-lg shadow-xl"
            ></div>
            <div className="text-xs text-gray-500 text-center mt-2">
              <p>Para visualizar el mapa completo necesita una API key de Google Maps.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
