import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problema } from './components/Problema';
import { TodoIncluido } from './components/TodoIncluido';
import { Espacios } from './components/Espacios';
import { PruebaSocial } from './components/PruebaSocial';
import { ComoFunciona } from './components/ComoFunciona';
import { Nosotros } from './components/Nosotros';
import { Ubicacion } from './components/Ubicacion';
import { FAQ } from './components/FAQ';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#282828] selection:bg-[#B1A25C]/30 selection:text-[#4B5F70]">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Content Landmarks */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Problema Section */}
        <Problema />

        {/* 3. Programa Todo Incluido Section */}
        <TodoIncluido />

        {/* 4. Espacios Section */}
        <Espacios />

        {/* 5. Prueba Social Section */}
        <PruebaSocial />

        {/* 6. Cómo Funciona Section */}
        <ComoFunciona />

        {/* 7. Nosotros Section */}
        <Nosotros />

        {/* 8. Ubicación Section */}
        <Ubicacion />

        {/* 9. Preguntas Frecuentes Section */}
        <FAQ />

        {/* 10. CTA Final Section */}
        <CtaFinal />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
