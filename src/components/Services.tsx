
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkHref: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, linkText, linkHref }) => {
  return (
    <Card className="hover-lift border-none shadow-md h-full">
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 min-h-[80px]">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="p-0 text-orange-500 hover:text-orange-600" asChild>
          <a href={linkHref}>{linkText} →</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios de UDrive</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre todas las formas en que puedes moverte, ganar dinero o hacer crecer tu negocio con UDrive
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Viaja con UDrive"
            description="Solicita un viaje que te recoja en cuestión de minutos. Disponible las 24 horas, todos los días."
            icon={<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            linkText="Solicitar un viaje"
            linkHref="/rider-signup"
          />
          
          <ServiceCard
            title="Conduce con UDrive"
            description="Gana dinero en tu tiempo libre. Disfruta de la flexibilidad de ser tu propio jefe y establece tus propios horarios."
            icon={<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            linkText="Regístrate para conducir"
            linkHref="/driver-signup"
          />
          
          <ServiceCard
            title="UDrive Business"
            description="Administra viajes corporativos para tu equipo y clientes con nuestra plataforma diseñada para empresas."
            icon={<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            linkText="Ver soluciones"
            linkHref="/business"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
