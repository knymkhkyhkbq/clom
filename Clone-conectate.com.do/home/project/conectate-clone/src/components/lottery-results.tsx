"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LotteryNumber {
  number: string;
}

interface LotteryDraw {
  id: string;
  title: string;
  logoUrl: string;
  numbers: LotteryNumber[];
  date: string;
  link: string;
}

const sampleDraws: LotteryDraw[] = [
  {
    id: 'loteria-nacional',
    title: 'Lotería Nacional',
    logoUrl: 'https://ext.same-assets.com/2809112539/1044702717.png',
    numbers: [{ number: '82' }, { number: '86' }, { number: '47' }],
    date: '14-03',
    link: '/loterias/nacional/quiniela'
  },
  {
    id: 'anguila-9pm',
    title: 'Anguila 9:00 PM',
    logoUrl: 'https://ext.same-assets.com/1536422485/3552862155.png',
    numbers: [{ number: '25' }, { number: '60' }, { number: '04' }],
    date: '14-03',
    link: '/loterias/anguilla/anguila-9-pm'
  },
  {
    id: 'quiniela-leidsa',
    title: 'Quiniela Leidsa',
    logoUrl: 'https://ext.same-assets.com/70382409/246645272.png',
    numbers: [{ number: '32' }, { number: '42' }, { number: '84' }],
    date: '14-03',
    link: '/loterias/leidsa/quiniela-pale'
  },
  {
    id: 'pega-3-mas',
    title: 'Pega 3 Más',
    logoUrl: 'https://ext.same-assets.com/352315233/2065708827.png',
    numbers: [{ number: '35' }, { number: '44' }, { number: '47' }],
    date: '14-03',
    link: '/loterias/leidsa/pega-3-mas'
  },
  {
    id: 'primera-noche',
    title: 'Primera Noche',
    logoUrl: 'https://ext.same-assets.com/2653992822/2246788821.png',
    numbers: [{ number: '02' }, { number: '48' }, { number: '23' }],
    date: '14-03',
    link: '/loterias/la-primera/quiniela-noche'
  },
  {
    id: 'quiniela-loteka',
    title: 'Quiniela Loteka',
    logoUrl: 'https://ext.same-assets.com/917937438/3231121308.png',
    numbers: [{ number: '02' }, { number: '72' }, { number: '96' }],
    date: '14-03',
    link: '/loterias/loteka/quiniela-mega-decenas'
  }
];

export const LotteryResults = () => {
  // Use client-side rendering to avoid hydration errors
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, render placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-t-4 border-t-[#dd4f2c] bg-white rounded-lg h-80"></div>
        <div className="border-t-4 border-t-blue-500 bg-white rounded-lg h-80"></div>
        <div className="border-t-4 border-t-purple-500 bg-white rounded-lg h-80"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-t-4 border-t-[#dd4f2c]">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Loterías</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {sampleDraws.map((draw) => (
            <Link href={draw.link} key={draw.id}>
              <div className="border-t py-2 px-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-800">{draw.title}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {draw.numbers.map((num, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 text-sm"
                    >
                      {num.number}
                    </div>
                  ))}
                  <span className="text-gray-500 text-xs ml-2">{draw.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card className="border-t-4 border-t-blue-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">República Dominicana</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 rounded overflow-hidden">
              <img
                src="https://ext.same-assets.com/2937128547/3616954014.jpeg"
                alt="Juan Dolio"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-sm">Juan Dolio: Popular Destino Turístico de la Provincia San Pedro de Macorís</h3>
            <Link href="#" className="block text-sm text-blue-600 hover:underline">
              Visita la Provincia La Romana: Altos de Chavón, La Ciudad de los Artistas
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="border-t-4 border-t-purple-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Música</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 rounded overflow-hidden">
              <img
                src="https://ext.same-assets.com/4154972467/4124831615.jpeg"
                alt="Música Dominicana"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-sm">Canciones Más Escuchadas en la Radio Dominicana</h3>
            <Link href="#" className="block text-sm text-blue-600 hover:underline">
              Top 15: ¿Cuáles Fueron los Mejores One Hit Wonders de la Década de 1980?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
