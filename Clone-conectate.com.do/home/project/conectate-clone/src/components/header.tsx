"use client";

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/mobile-menu';

export const Header = () => {
  return (
    <div className="bg-[#dd4f2c] text-white w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <MobileMenu />

          <Link href="/" className="text-2xl font-bold text-white ml-2 md:ml-0">
            <div className="flex items-center space-x-1">
              <span className="text-white font-bold text-3xl tracking-tighter">CONECTATE</span>
              <span className="text-white text-sm mt-auto mb-1">.com.do</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex flex-wrap items-center">
          <ul className="flex space-x-4 text-sm">
            <li>
              <Link href="/loterias" className="hover:underline">Loterías</Link>
            </li>
            <li>
              <Link href="/estadisticas" className="hover:underline">Estadísticas</Link>
            </li>
            <li>
              <Link href="/cine" className="hover:underline">Cine</Link>
            </li>
            <li>
              <Link href="/eventos" className="hover:underline">Eventos</Link>
            </li>
            <li>
              <Link href="/populares" className="hover:underline">Populares</Link>
            </li>
            <li>
              <Link href="/turismo" className="hover:underline">Turismo</Link>
            </li>
          </ul>
        </nav>

        <div className="flex">
          <Input
            type="text"
            placeholder="Buscar"
            className="h-8 w-32 md:w-48 focus:outline-none text-black"
          />
          <Button
            variant="ghost"
            className="h-8 px-2 bg-orange-200 hover:bg-orange-300 text-[#dd4f2c]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
