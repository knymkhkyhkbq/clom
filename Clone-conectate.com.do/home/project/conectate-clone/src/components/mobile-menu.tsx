"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Link {
  href: string;
  label: string;
}

interface MobileMenuItemProps {
  title: string;
  links: Link[];
}

const MobileMenuItem = ({ title, links }: MobileMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left font-medium"
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 py-2 bg-gray-50">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block p-2 text-sm text-gray-700 hover:text-[#dd4f2c]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const MobileMenu = () => {
  // Use client-side rendering to avoid hydration errors
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, return an empty button to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <span className="sr-only">Open Menu</span>
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Open Menu</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[90vw] max-w-sm rounded-lg p-0 overflow-hidden">
        <div className="grid divide-y">
          <div className="p-4 bg-[#dd4f2c] text-white">
            <h2 className="font-bold text-xl">Menú</h2>
          </div>

          <MobileMenuItem title="Loterías" links={[
            { href: '/loterias', label: 'Portada' },
            { href: '/loterias/nacional', label: 'Lotería Nacional' },
            { href: '/loterias/leidsa', label: 'Leidsa' },
            { href: '/loterias/loto-real', label: 'Lotería Real' },
            { href: '/loterias/loteka', label: 'Loteka' },
          ]} />

          <MobileMenuItem title="Estadísticas" links={[
            { href: '/loterias/estadisticas', label: 'Quinielas' },
            { href: '/loterias/resultados-anos-anteriores', label: 'Años Anteriores' },
            { href: '/loterias/numeros-calientes', label: 'Números Calientes' },
            { href: '/loterias/numeros-frios', label: 'Números Fríos' },
          ]} />

          <MobileMenuItem title="Cine" links={[
            { href: '/cartelera-de-cine', label: 'Cartelera' },
            { href: '/cartelera-de-cine/estrenos', label: 'Estrenos' },
            { href: '/cartelera-de-cine/proximamente', label: 'Próximamente' },
          ]} />

          <MobileMenuItem title="Eventos" links={[
            { href: '/eventos', label: 'Guía Local' },
            { href: '/articulo/premios-soberano', label: 'Premios Soberano 2025' },
          ]} />

          <MobileMenuItem title="Populares" links={[
            { href: '/articulo/canciones-mas-escuchadas-radio-republica-dominicana', label: 'Canciones Top en RD' },
            { href: '/articulo/codigos-postales-republica-dominicana', label: 'Códigos Postales' },
            { href: '/articulo/dias-feriados-republica-dominicana', label: 'Días Feriados' },
          ]} />

          <MobileMenuItem title="Turismo" links={[
            { href: '/articulo/atracciones-turisticas-de-la-republica-dominicana', label: 'República Dominicana' },
            { href: '/articulo/la-romana', label: 'La Romana' },
            { href: '/articulo/puerto-plata', label: 'Puerto Plata' },
            { href: '/articulo/punta-cana-la-altagracia-republica-dominicana', label: 'Punta Cana' },
            { href: '/articulo/santo-domingo', label: 'Santo Domingo' },
          ]} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
