import React from 'react';
import { Sparkles, Church, Trees, Car } from 'lucide-react';
import { trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

interface EspacioItem {
  name: string;
  desc: string;
  image: string;
  alt: string;
  colSpan?: string;
}

export const Espacios: React.FC = () => {
  const espacios: EspacioItem[] = [
    {
      name: 'Explanada',
      desc: 'Ceremonias al aire libre rodeadas de naturaleza y aire puro.',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/2-Ceremonia-Foto-Alteral-izq-a-texto-scaled.webp',
      alt: 'Explanada para ceremonias al aire libre en Paine',
      colSpan: 'md:col-span-2 md:row-span-2',
    },
    {
      name: 'Casona',
      desc: 'Construcción original del campo familiar con arquitectura tradicional.',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/Casona-Eventos-Torres-de-Paine-vista-area-copia-1024x593.webp',
      alt: 'Casona Eventos Torres de Paine vista aérea',
    },
    {
      name: 'Salón-carpa',
      desc: '600 m², laterales transparentes y hasta 320 personas con vista a los jardines.',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/Espacio-foto-menu-eventos-torres-de-paine.webp',
      alt: 'Salón-carpa de 600m2 con laterales transparentes',
      colSpan: 'md:col-span-2',
    },
    {
      name: 'Cóctel Lounge',
      desc: 'Recepción acogedora con barra exterior y mobiliario distendido.',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/resumen-8651.webp',
      alt: 'Cóctel Lounge exterior en casona de campo',
    },
    {
      name: 'Bar',
      desc: 'Bar abierto durante todo el cóctel y la fiesta con coctelería de primer nivel.',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/T-25.webp',
      alt: 'Bar abierto y coctelería para matrimonios',
    },
    {
      name: 'Pista de baile',
      desc: 'Iluminación robotizada, sonidista profesional y efectos de fiesta incluidos.',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/SANDRA_CAMILO-605-768x512.jpg',
      alt: 'Novia y novio en pista de baile animada',
    },
    {
      name: 'Jardines y alamedas',
      desc: 'Fuentes de agua, senderos sombreados, huerto de ciruelos y parronales.',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/Resumen-3690-scaled.webp',
      alt: 'Jardines antiguos y alamedas en Paine',
    },
    {
      name: 'Rincones para fotos',
      desc: 'Pensados para capturar sus mejores recuerdos con luz natural y fondos verdes.',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/DSC-256.webp',
      alt: 'Rincones fotográficos románticos en casona de campo',
    },
    {
      name: 'Quincho-cocina',
      desc: 'Cocina completamente equipada para el servicio impecable del banquetero.',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/MG_8318-scaled.webp',
      alt: 'Quincho y cocina para montaje gastronómico',
    },
  ];

  return (
    <section id="espacios" className="py-20 sm:py-28 bg-[#F8F8F8] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-16 h-0.5 bg-[#B1A25C] mx-auto mb-4" />
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl font-normal text-[#4B5F70] leading-tight mb-4">
            Una casona, jardines antiguos y un salón{' '}
            <span className="italic text-[#8E8061]">con vista al campo</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-opensans">
            Tendrán el campo completo para ustedes: desde la ceremonia al aire libre hasta el último
            baile.
          </p>
        </div>



        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {espacios.map((espacio, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-stone-900 min-h-[220px] sm:min-h-[260px] shadow-sm hover:shadow-lg transition-all duration-300 ${
                espacio.colSpan || ''
              }`}
            >
              <img
                src={espacio.image}
                alt={espacio.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-colors" />

              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-wider text-[#B1A25C] font-semibold mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Espacio exclusivo
                </span>
                <h3 className="font-garamond text-2xl sm:text-3xl font-medium text-white mb-1.5 drop-shadow-sm">
                  {espacio.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 font-opensans drop-shadow">
                  {espacio.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Lines & Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Mini bloque Ceremonia */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#4B5F70]/10 text-[#4B5F70] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Church className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-garamond text-lg font-medium text-[#4B5F70] mb-1">
                Ceremonia en el lugar
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-opensans leading-relaxed">
                Ceremonia outdoor en nuestra explanada con vista campestre o religiosa en iglesias
                históricas de la zona.
              </p>
            </div>
          </div>

          {/* Comodidad y niños */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#8E8061]/15 text-[#8E8061] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-garamond text-lg font-medium text-[#4B5F70] mb-1">
                Comodidad para tus invitados
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-opensans leading-relaxed">
                También disponemos de amplio estacionamiento privado y una plaza de juegos segura
                para los niños.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={WA_PRIMARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('seccion_espacios')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md hover:shadow-xl transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[48px]"
          >
            Agenda tu visita y conócelos en persona
          </a>
        </div>
      </div>
    </section>
  );
};
