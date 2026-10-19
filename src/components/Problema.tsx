import React from 'react';
import { Layers, Crown, MapPin } from 'lucide-react';
import { trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

export const Problema: React.FC = () => {
  return (
    <section id="problema" className="py-20 sm:py-24 bg-[#F8F8F8] border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle decorative line */}
        <div className="w-16 h-0.5 bg-[#B1A25C] mx-auto mb-6" />

        <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl font-normal text-[#4B5F70] mb-6 leading-tight">
          Organizar un matri no debería quitarte el sueño
        </h2>

        <p className="font-opensans text-base sm:text-lg text-[#282828]/85 leading-relaxed max-w-2xl mx-auto mb-12">
          Cotizar lugar, banquetero, decoración, DJ, iluminación y sonido por separado es agotador.
          Además, siempre queda la duda de si todo va a calzar el día del matrimonio. En Torres de
          Paine lo resolvemos en un solo lugar, con un solo equipo y un solo valor por persona.
        </p>

        {/* 3 mini tarjetas con ícono */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 text-left">
          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-stone-200/70 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F8F8F8] border border-[#B1A25C]/30 flex items-center justify-center mb-5 text-[#B1A25C]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-garamond text-xl font-medium text-[#4B5F70] mb-2">
              Un solo proveedor
            </h3>
            <p className="text-sm text-[#282828]/80 leading-relaxed font-opensans">
              Lugar, comida, decoración y fiesta coordinados integralmente.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-stone-200/70 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F8F8F8] border border-[#B1A25C]/30 flex items-center justify-center mb-5 text-[#B1A25C]">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="font-garamond text-xl font-medium text-[#4B5F70] mb-2">
              Todo para ustedes
            </h3>
            <p className="text-sm text-[#282828]/80 leading-relaxed font-opensans">
              Reservamos un solo evento por día. Exclusividad total garantizada.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-stone-200/70 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F8F8F8] border border-[#B1A25C]/30 flex items-center justify-center mb-5 text-[#B1A25C]">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-garamond text-xl font-medium text-[#4B5F70] mb-2">
              Cerca de Santiago
            </h3>
            <p className="text-sm text-[#282828]/80 leading-relaxed font-opensans">
              A 45 km por Ruta 5 Sur, unos 40 minutos expeditos.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <a
            href={WA_PRIMARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('seccion_problema')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md hover:shadow-lg transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[48px]"
          >
            Agenda tu visita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
