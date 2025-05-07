
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Building, MapPin, ShieldCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Banner principal */}
        <div className="bg-orange-50 py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900">Sobre Nosotros</h1>
              <p className="text-2xl font-semibold text-orange-500">
                "Juntos llegamos más lejos y pagamos menos."
              </p>
            </div>
          </div>
        </div>

        {/* Nuestra historia */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold">Nuestra Historia</h2>
              <p className="text-lg text-gray-600">
                UDrive nació de una idea simple pero poderosa: ¿qué pasaría si los estudiantes pudieran compartir viajes en su camino a la universidad, ahorrando dinero y reduciendo la contaminación?
              </p>
              <p className="text-lg text-gray-600">
                Fundada en 2025 por un grupo de estudiantes universitarios frustrados por los altos costos de transporte y la ineficiencia de tener múltiples vehículos dirigiéndose al mismo destino, UDrive se ha convertido en una solución innovadora para la movilidad urbana centrada en las comunidades estudiantiles.
              </p>
              <p className="text-lg text-gray-600">
                Nuestra plataforma conecta a conductores con estudiantes que comparten rutas similares, optimizando cada viaje para maximizar la eficiencia y minimizar los costos y el impacto ambiental.
              </p>
            </div>
          </div>
        </div>

        {/* Nuestra misión */}
        <div className="py-16 bg-orange-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl font-bold">Nuestra Misión</h2>
              <p className="text-xl text-gray-700">
                Transformar la movilidad estudiantil a través de la colaboración, haciendo que los traslados diarios sean más económicos, sostenibles y socialmente enriquecedores.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
                  <p>Construimos una comunidad donde estudiantes pueden conectarse, compartir experiencias y ayudarse mutuamente en sus trayectos diarios.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Eficiencia</h3>
                  <p>Optimizamos rutas para que un conductor pueda recoger a varios estudiantes en el camino, maximizando cada viaje.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-12">
              <h2 className="text-3xl font-bold text-center">Beneficios de UDrive</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-orange-100 p-4 rounded-full">
                    <div className="text-orange-500 text-2xl font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ahorro económico</h3>
                    <p className="text-gray-600">Los estudiantes comparten los costos del viaje, lo que resulta en un ahorro significativo para todos. Los conductores reciben compensación por sus gastos y los pasajeros pagan mucho menos que con servicios tradicionales.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-orange-100 p-4 rounded-full">
                    <div className="text-orange-500 text-2xl font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Impacto ambiental positivo</h3>
                    <p className="text-gray-600">Al reducir el número de vehículos en circulación, contribuimos a disminuir las emisiones de CO2, el tráfico y la contaminación en nuestras ciudades.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-orange-100 p-4 rounded-full">
                    <div className="text-orange-500 text-2xl font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Conexiones sociales</h3>
                    <p className="text-gray-600">UDrive fomenta la creación de vínculos entre estudiantes con intereses comunes, fortaleciendo el sentido de comunidad universitaria.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Llamado a la acción */}
        <div className="py-16 bg-orange-500 text-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Únete al movimiento UDrive</h2>
              <p className="text-xl">
                Ya sea como conductor o como pasajero, forma parte de nuestra comunidad y comienza a experimentar una nueva forma de movilidad estudiantil.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/rider-signup" className="bg-white text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-lg font-medium">Viaja con nosotros</a>
                <a href="/driver-signup" className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-2 rounded-lg font-medium">Conviértete en conductor</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
