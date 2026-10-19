import React from 'react';
import { MapPin, Navigation, FileText, Clock, ExternalLink } from 'lucide-react';
import { trackWazeClick, trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

export const Ubicacion: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-16 h-0.5 bg-[#B1A25C] mx-auto mb-4" />
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl font-normal text-[#4B5F70] leading-tight mb-4">
            Casona de campo en Paine, a 40 minutos de Santiago
          </h2>

          {/* GEO / AI Citation Summary Paragraph */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F8F8] border border-stone-200 text-stone-700 text-sm sm:text-base font-opensans leading-relaxed mb-6 text-left sm:text-center shadow-xs">
            <p>
              <strong>Eventos Torres de Paine</strong> es una casona de campo para matrimonios y
              eventos exclusivos en Paine, Región Metropolitana (km 45 de la Ruta 5 Sur, a unos 40
              minutos de Santiago). Ofrece un <strong>Programa Todo Incluido</strong> desde{' '}
              <strong>2,27 UF + IVA</strong> por persona para matrimonios de 100 a 350 invitados,
              con reserva de <strong>un solo evento por día</strong>.
            </p>
          </div>

          <p className="text-stone-600 text-base font-opensans">
            Estamos en el km 45 de la Ruta 5 Sur, en Paine, Región Metropolitana. Es fácil llegar
            desde la carretera, y disponemos de amplio estacionamiento para todos tus invitados.
          </p>
        </div>

        {/* Details & Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-stone-200/80 shadow-xs">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#4B5F70]/10 text-[#4B5F70] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#8E8061]" />
                </div>
                <div>
                  <h3 className="font-garamond text-xl font-medium text-[#4B5F70] mb-1">
                    Dirección exacta
                  </h3>
                  <p className="text-sm text-[#282828] font-opensans leading-snug">
                    Pdte. Gabriel González Videla (G540) Parcela 54, Paine, Región Metropolitana,
                    Chile.
                  </p>
                  <p className="text-xs text-stone-500 font-mono mt-1">
                    Coordenadas: -33.8342623, -70.7642228
                  </p>
                </div>
              </div>

              {/* Hours note */}
              <div className="pt-3 border-t border-stone-200/70 flex items-center gap-2 text-xs text-stone-600">
                <Clock className="w-4 h-4 text-[#B1A25C] flex-shrink-0" />
                <span className="text-stone-500">Horario de visitas:</span>
                <span className="text-stone-700 font-medium font-opensans">
                  Coordinación previa de lunes a domingo por WhatsApp
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-3">
              <a
                href="https://waze.com/ul/h63vxt8x7f"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWazeClick}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#4B5F70] hover:bg-[#435F71] text-white rounded-xl font-semibold text-sm transition-colors shadow-sm active:scale-[0.99] min-h-[48px]"
              >
                <Navigation className="w-4 h-4 text-[#B1A25C]" />
                <span>Abrir en Waze</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://www.eventostorresdepaine.cl/plano-nuevo-torres-de-paine-2-1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-stone-100 hover:bg-stone-200 text-[#4B5F70] rounded-xl font-semibold text-sm transition-colors border border-stone-200 active:scale-[0.99] min-h-[48px]"
              >
                <FileText className="w-4 h-4 text-[#8E8061]" />
                <span>Descargar plano para invitados</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-100 relative">
              <iframe
                title="Mapa de ubicación Eventos Torres de Paine"
                src="https://maps.google.com/maps?q=-33.8342623,-70.7642228&hl=es&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <a
            href={WA_PRIMARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md hover:shadow-xl transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[48px]"
          >
            Agenda tu visita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
