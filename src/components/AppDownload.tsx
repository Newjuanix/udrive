
import React from 'react';
import { Button } from '@/components/ui/button';

const AppDownload = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[500px] md:h-[600px] w-full max-w-md mx-auto">
              <div className="absolute top-0 right-0 w-3/4 h-5/6 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg"></div>
              <div className="absolute bottom-0 left-0 w-3/4 h-5/6 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center rounded-lg shadow-lg"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Descarga la app de UDrive</h2>
            <p className="text-lg text-gray-600">
              Escanea el código para descargar la app de UDrive. También está disponible en App Store y Google Play.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="bg-black hover:bg-gray-800 text-white" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5781 12.0074C17.5423 9.3071 19.4385 7.9802 19.5065 7.9379C18.2801 6.1566 16.3693 5.9547 15.6952 5.9326C14.0622 5.7923 12.4886 6.8923 11.6619 6.8923C10.8148 6.8923 9.52713 5.9539 8.16058 5.9775C6.41466 6.0011 4.7862 7.0486 3.8975 8.6989C2.06466 12.0625 3.45373 17.0251 5.20479 19.6821C6.09466 21.0118 7.14319 22.5183 8.54839 22.4711C9.92085 22.42 10.4437 21.6112 12.0884 21.6112C13.7141 21.6112 14.2032 22.4711 15.6294 22.4475C17.0949 22.4278 17.9965 21.0905 18.8512 19.7479C19.8763 18.2179 20.2889 16.7135 20.3071 16.6387C20.2715 16.6269 17.618 15.626 17.5781 12.0074Z" />
                  <path d="M15.0169 4.1153C15.7459 3.21454 16.2233 1.98876 16.0914 0.75C14.9956 0.79558 13.6655 1.4584 12.9022 2.33675C12.2273 3.1117 11.6478 4.37749 11.799 5.57206C13.0245 5.65322 14.2614 5.00288 15.0169 4.1153Z" />
                </svg>
                App Store
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.60701 2.43109C3.22201 2.82509 3.00001 3.42909 3.00001 4.20509V19.7951C3.00001 20.5711 3.22201 21.1751 3.60701 21.5681L3.73001 21.6801L13.792 11.6241V11.3761L3.73001 1.31909L3.60701 2.43109Z" />
                  <path d="M18.228 16.073L13.793 11.624V11.376L18.229 6.92701L18.383 7.01401L23.675 9.98401C25.032 10.749 25.032 12.001 23.675 12.767L18.383 15.986L18.228 16.073Z" />
                  <path d="M18.3831 15.9861L13.7931 11.5001L3.60712 21.5691C4.09412 22.0951 4.91112 22.1581 5.84112 21.6321L18.3831 15.9861Z" />
                  <path d="M18.3831 7.01412L5.84112 1.36812C4.91112 0.84212 4.09412 0.90512 3.60712 1.43112L13.7931 11.5001L18.3831 7.01412Z" />
                </svg>
                Google Play
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Tu seguridad es nuestra prioridad</h3>
              <p className="text-gray-600">
                En UDrive trabajamos constantemente para hacer que cada viaje sea seguro, cómodo y confiable. Implementamos tecnología avanzada para la seguridad de todos nuestros usuarios.
              </p>
              <Button variant="link" className="mt-4 text-orange-500 hover:text-orange-600 p-0">
                <a href="/safety">Conoce nuestras medidas de seguridad →</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
