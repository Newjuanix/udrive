
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const FooterSection = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => (
  <div className="space-y-4">
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-extrabold text-orange-500">UDrive</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Transporte confiable, rápido y seguro que conecta pasajeros con conductores en toda la ciudad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <FooterSection 
              title="Empresa"
              links={[
                { label: "Acerca de", href: "/about" },
                { label: "Cómo funciona", href: "/how-it-works" },
                { label: "Empleo", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Prensa", href: "/press" }
              ]}
            />
            
            <FooterSection 
              title="Servicios"
              links={[
                { label: "Viaja", href: "/rider-signup" },
                { label: "Conduce", href: "/driver-signup" },
                { label: "Empresas", href: "/business" },
                { label: "Restaurantes", href: "/restaurants" },
                { label: "Ciudades", href: "/cities" }
              ]}
            />
            
            <FooterSection 
              title="Información"
              links={[
                { label: "Seguridad", href: "/safety" },
                { label: "Términos y condiciones", href: "/terms" },
                { label: "Privacidad", href: "/privacy" },
                { label: "Accesibilidad", href: "/accessibility" },
                { label: "Ayuda", href: "/help" }
              ]}
            />
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">Descarga la app</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100 hover:text-orange-500">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5781 12.0074C17.5423 9.3071 19.4385 7.9802 19.5065 7.9379C18.2801 6.1566 16.3693 5.9547 15.6952 5.9326C14.0622 5.7923 12.4886 6.8923 11.6619 6.8923C10.8148 6.8923 9.52713 5.9539 8.16058 5.9775C6.41466 6.0011 4.7862 7.0486 3.8975 8.6989C2.06466 12.0625 3.45373 17.0251 5.20479 19.6821C6.09466 21.0118 7.14319 22.5183 8.54839 22.4711C9.92085 22.42 10.4437 21.6112 12.0884 21.6112C13.7141 21.6112 14.2032 22.4711 15.6294 22.4475C17.0949 22.4278 17.9965 21.0905 18.8512 19.7479C19.8763 18.2179 20.2889 16.7135 20.3071 16.6387C20.2715 16.6269 17.618 15.626 17.5781 12.0074Z" />
                    <path d="M15.0169 4.1153C15.7459 3.21454 16.2233 1.98876 16.0914 0.75C14.9956 0.79558 13.6655 1.4584 12.9022 2.33675C12.2273 3.1117 11.6478 4.37749 11.799 5.57206C13.0245 5.65322 14.2614 5.00288 15.0169 4.1153Z" />
                  </svg>
                  App Store
                </Button>
                <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100 hover:text-orange-500">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.60701 2.43109C3.22201 2.82509 3.00001 3.42909 3.00001 4.20509V19.7951C3.00001 20.5711 3.22201 21.1751 3.60701 21.5681L3.73001 21.6801L13.792 11.6241V11.3761L3.73001 1.31909L3.60701 2.43109Z" />
                    <path d="M18.228 16.073L13.793 11.624V11.376L18.229 6.92701L18.383 7.01401L23.675 9.98401C25.032 10.749 25.032 12.001 23.675 12.767L18.383 15.986L18.228 16.073Z" />
                    <path d="M18.3831 15.9861L13.7931 11.5001L3.60712 21.5691C4.09412 22.0951 4.91112 22.1581 5.84112 21.6321L18.3831 15.9861Z" />
                    <path d="M18.3831 7.01412L5.84112 1.36812C4.91112 0.84212 4.09412 0.90512 3.60712 1.43112L13.7931 11.5001L18.3831 7.01412Z" />
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} UDrive Technologies Inc. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
