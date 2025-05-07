
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  phone: z.string().min(10, {
    message: "Por favor ingresa un número de teléfono válido.",
  }),
});

const RiderSignup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "¡Cuenta creada!",
      description: "Revisa tu correo para verificar tu cuenta.",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Regístrate para viajar</h1>
            <p className="text-lg text-gray-600 mb-8">
              Crea una cuenta para comenzar a viajar con UDrive. Disfruta de viajes confiables, rápidos y seguros en cualquier momento.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-orange-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Viajes al instante</h3>
                  <p className="text-gray-600">Solicita un viaje con unos pocos toques y disfruta de un viaje en minutos, incluso a altas horas de la noche.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-orange-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Pagos sin efectivo</h3>
                  <p className="text-gray-600">Paga tus viajes fácilmente mediante tarjeta de crédito o efectivo. Sin complicaciones ni efectivo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-orange-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Seguridad confiable</h3>
                  <p className="text-gray-600">Supervisa tu viaje y comparte tu ubicación en tiempo real con amigos y familiares.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Crea tu cuenta</CardTitle>
                <CardDescription>Regístrate para comenzar a viajar con UDrive</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="email" className="w-full">
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="phone">Teléfono</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="email">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre</FormLabel>
                              <FormControl>
                                <Input placeholder="María González" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Correo electrónico</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="maria@ejemplo.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                          Crear cuenta
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                  
                  <TabsContent value="phone">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre</FormLabel>
                              <FormControl>
                                <Input placeholder="María González" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Número de teléfono</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                          Crear cuenta
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col text-center border-t pt-4">
                <div className="text-sm mb-4">
                  <span className="text-gray-600">¿Ya tienes una cuenta?</span>{" "}
                  <a href="/login" className="text-orange-500 hover:underline">Inicia sesión</a>
                </div>
                <p className="text-xs text-gray-500">
                  Al crear una cuenta, aceptas nuestros Términos de Servicio y Política de Privacidad.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RiderSignup;
