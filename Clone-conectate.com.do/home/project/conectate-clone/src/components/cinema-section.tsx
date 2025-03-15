"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

const movieReleases: Movie[] = [
  {
    id: 'novocaine',
    title: 'Novocaine, Better Man y Rule Breakers Estrenan en Nuestros Cines',
    imageUrl: 'https://ext.same-assets.com/4185077207/2299999245.jpeg',
    link: '/articulo/estrenos-de-cine-republica-dominicana/'
  }
];

const movieListings: Movie[] = [
  {
    id: 'movie1',
    title: 'Cuando el Demonio Llama',
    imageUrl: 'https://ext.same-assets.com/3297873792/1706532699.jpeg',
    link: '/cartelera-de-cine/name-the-demon-2024'
  },
  {
    id: 'movie2',
    title: 'Un Dolor Real',
    imageUrl: 'https://ext.same-assets.com/3768518616/2300276103.jpeg',
    link: '/cartelera-de-cine/a-real-pain-2024'
  },
  {
    id: 'movie3',
    title: 'Operación Panda: Misión Rescate',
    imageUrl: 'https://ext.same-assets.com/4284374632/1427696947.jpeg',
    link: '/cartelera-de-cine/panda-plan-2024'
  },
  {
    id: 'movie4',
    title: 'Capitán América: Un Nuevo Mundo',
    imageUrl: 'https://ext.same-assets.com/4204610190/3785807894.jpeg',
    link: '/cartelera-de-cine/captain-america-brave-new-world-2025'
  },
];

export const CinemaSection = () => {
  // Use client-side rendering to avoid hydration errors
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, render placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="border-t-4 border-t-blue-700 bg-white rounded-lg h-80"></div>
        <div className="border-t-4 border-t-indigo-500 bg-white rounded-lg h-80"></div>
        <div className="border-t-4 border-t-cyan-500 bg-white rounded-lg h-80"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <Card className="border-t-4 border-t-blue-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Cine</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 rounded overflow-hidden">
              <img
                src={movieReleases[0].imageUrl}
                alt={movieReleases[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-sm">{movieReleases[0].title}</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-blue-600 hover:underline">
                Nuevos Trailers de Películas Próximamente en Cines
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Las Mejores Películas de Billy Crystal: Ícono de la Comedia Estadounidense
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-t-4 border-t-indigo-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Cartelera de Cine</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <select className="w-full p-2 border rounded text-sm" defaultValue="">
              <option value="" disabled>Seleccione un Cine</option>
              <option value="caribbean">Caribbean Cinemas</option>
              <option value="palacio">Palacio del Cine</option>
              <option value="cinema">Cinema Centro</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {movieListings.map((movie) => (
              <Link href={movie.link} key={movie.id} className="block">
                <div className="border rounded overflow-hidden">
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-t-4 border-t-cyan-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Televisión</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 rounded overflow-hidden">
              <img
                src="https://ext.same-assets.com/1311181415/1311181415.jpeg"
                alt="Telesistema Canal 11"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-sm">Telesistema Canal 11, un Canal de Emociones</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-blue-600 hover:underline">
                ¿Qué Significa «Jump the Shark» o «Saltar el Tiburón»?
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Listado de Series de Televisión Renovadas
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
