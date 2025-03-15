"use client";

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex space-x-4 text-sm">
          <Link href="/contacto" className="hover:underline">
            Contacto
          </Link>
          <Link href="/nosotros" className="hover:underline">
            Nosotros
          </Link>
          <Link href="/politica-de-privacidad" className="hover:underline">
            Política de Privacidad
          </Link>
        </div>

        <div className="text-sm">
          ©2025 Derechos Reservados.{' '}
          <Link href="/" className="text-[#dd4f2c] hover:underline">
            Conectate.com.do
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-2">
        <button className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
          Add to home screen
        </button>
      </div>
    </footer>
  );
};
