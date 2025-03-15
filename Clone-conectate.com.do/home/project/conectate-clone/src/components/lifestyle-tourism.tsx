"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

const lifestyleArticles: Article[] = [
  {
    id: 'plantas',
    title: 'Decora la Casa con Plantas: Dale Nuevos Aires a tu Hogar',
    imageUrl: 'https://ext.same-assets.com/68800981/3674486811.jpeg',
    link: '/articulo/como-decorar-la-casa-con-plantas-consejos-tips/'
  }
];

const miscArticles: Article[] = [
  {
    id: 'baez',
    title: 'Buenaventura Báez Méndez (1812-1884): Político y Militar Dominicano',
    imageUrl: 'https://ext.same-assets.com/2526855042/2119169658.jpeg',
    link: '/articulo/biografia-buenaventura-baez/'
  }
];

const directoryArticles: Article[] = [
  {
    id: 'supermercados',
    title: 'Principales Supermercados de la República Dominicana',
    imageUrl: 'https://ext.same-assets.com/3430229183/1742098590.jpeg',
    link: '/articulo/supermercados-republica-dominicana/'
  }
];

export const LifestyleSection = () => {
  // Use client-side rendering to avoid hydration errors
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, render placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="border-t-4 border-t-green-600 bg-white rounded-lg h-80"></div>
        <div className="border-t-4 border-t-gray-600 bg-white rounded-lg h-80"></div>
        <div className="border-t-4 border-t-yellow-600 bg-white rounded-lg h-80"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <Card className="border-t-4 border-t-green-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Estilo de Vida</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 rounded overflow-hidden">
              <img
                src={lifestyleArticles[0].imageUrl}
                alt={lifestyleArticles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-sm">{lifestyleArticles[0].title}</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-blue-600 hover:underline">
                ¿Cómo Atraer Colibríes al Jardín? Sigue estos Consejos.
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Cuídate de las Personas Posesivas
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                ¿Cómo Mejorar la Calidad del Sueño? Sigue estos Consejos.
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                ¿Sabes lo que es el «Síndrome del Ratón»?
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-t-4 border-t-gray-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Misceláneos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 rounded overflow-hidden">
              <img
                src={miscArticles[0].imageUrl}
                alt={miscArticles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-sm">{miscArticles[0].title}</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-blue-600 hover:underline">
                Top 5: Lugares Turísticos para Visitar en Guatemala, El País de la Eterna Primavera
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Los Apodos Más Famosos de los Peloteros Dominicanos
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Moab: Un Patio de Recreo para Excursionistas, Ciclistas, Escaladores y Campistas
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-t-4 border-t-yellow-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Directorios Dominicanos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 rounded overflow-hidden">
              <img
                src={directoryArticles[0].imageUrl}
                alt={directoryArticles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-sm">{directoryArticles[0].title}</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-blue-600 hover:underline">
                Top 10: ¿Cuáles son los Mejores Hoteles de Santo Domingo?
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Bebidas Alcohólicas de República Dominicana
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Centros y Plazas Comerciales en Santo Domingo
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Couriers Dominicanos - Compañías de Envíos en la República Dominicana
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
