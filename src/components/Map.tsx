
import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Add Google Maps type definitions
declare global {
  interface Window {
    google: any;
  }
}

const Map = ({ onPickupChange, onDestinationChange }: { 
  onPickupChange?: (address: string) => void, 
  onDestinationChange?: (address: string) => void 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any | null>(null);
  const [directionsService, setDirectionsService] = useState<any | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<any | null>(null);
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

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
      // Inicializar el mapa
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 19.4326, lng: -99.1332 }, // Centro en Ciudad de México
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
      });
      setMap(mapInstance);

      // Inicializar servicios de direcciones
      setDirectionsService(new window.google.maps.DirectionsService());
      const rendererInstance = new window.google.maps.DirectionsRenderer({
        map: mapInstance,
        suppressMarkers: false,
      });
      setDirectionsRenderer(rendererInstance);
    }
  };

  const calculateRoute = () => {
    if (!directionsService || !directionsRenderer) return;

    directionsService.route(
      {
        origin: pickup,
        destination: destination,
        travelMode: window.google?.maps?.TravelMode?.DRIVING,
      },
      (response: any, status: any) => {
        if (status === window.google?.maps?.DirectionsStatus?.OK && response) {
          directionsRenderer.setDirections(response);
        } else {
          console.error(`Error al calcular la ruta: ${status}`);
        }
      }
    );
  };

  const handlePickupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickup(e.target.value);
    onPickupChange?.(e.target.value);
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
    onDestinationChange?.(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    calculateRoute();
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <Input 
          placeholder="Ingresa la ubicación de recogida" 
          className="h-12" 
          value={pickup}
          onChange={handlePickupChange}
        />
        <Input 
          placeholder="Ingresa tu destino" 
          className="h-12" 
          value={destination}
          onChange={handleDestinationChange}
        />
        <Button 
          type="submit" 
          size="lg" 
          className="bg-orange-500 hover:bg-orange-600 text-white w-full h-12 text-base"
        >
          Solicitar viaje ahora
        </Button>
      </form>
      <div 
        ref={mapRef} 
        className="w-full h-[300px] rounded-lg shadow-lg border border-gray-200"
      ></div>
      <div className="text-xs text-gray-500 text-center">
        <p>Esta es una demostración. Para usar este mapa necesita una API key de Google Maps.</p>
      </div>
    </div>
  );
};

export default Map;
