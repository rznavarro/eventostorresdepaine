import React from 'react';
import { Check, Sparkles, Gift } from 'lucide-react';
import { trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

export const TodoIncluido: React.FC = () => {
  const checklistItems = [
    'Lugar con uso exclusivo',
    'Banquetería completa',
    'Bar abierto de cóctel y fiesta',
    'Bebestibles de cena',
    'Decoración personalizada',
    'Montaje de ceremonia',
    'Música en vivo y amplificación para la ceremonia',
    'DJ y sonidista',
    'Pista de baile y efectos de fiesta',
    'Iluminación interior y exterior',
    'Guardarropía',
    'Generador',
  ];

  const photoCards = [
    {
      title: 'Banquetería',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/IMG_0274-1024x683.jpg',
      alt: 'Banquetería para matrimonios en Eventos Torres de Paine',
      description:
        'Cocina chilena, internacional, de fusión y de autor, con menús vegetarianos, veganos, celíacos, diabéticos e infantiles.',
    },
    {
      title: 'Decoración',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/IMG_20231206_001601-1024x737.jpg',
      alt: 'Decoración personalizada campestre en Casona Torres de Paine',
      description:
        'Decoración personalizada a tu estilo, de la casona a la explanada.',
    },
    {
      title: 'Ceremonia',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/ManachayGonza-0206-1024x683.jpg',
      alt: 'Música en vivo y montaje de ceremonia al aire libre en Paine',
      description:
        'Montaje, música en vivo y amplificación para que cada palabra se escuche.',
    },
    {
      title: 'Fiesta',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/MG_7437-1024x683.jpg',
      alt: 'DJ, iluminación y pista de baile en Torres de Paine',
      description:
        'DJ incluido, pista de baile y efectos para que nadie se siente.',
    },
  ];

  return (
    <section id="todo-incluido" className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="w-16 h-0.5 bg-[#B1A25C] mx-auto mb-4" />
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl font-normal text-[#4B5F70] leading-tight mb-4">
            Todo Incluido: tu matrimonio listo por un valor por persona
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-opensans">
            Olvídate de coordinar decenas de proveedores individuales. Nuestro programa integral
            cubre todo lo esencial para vivir un día inolvidable sin sorpresas de presupuesto.
          </p>
        </div>

        {/* Featured Price Card */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="relative bg-gradient-to-br from-stone-50 via-white to-stone-50 rounded-2xl p-6 sm:p-8 border-2 border-[#B1A25C] shadow-md text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B1A25C]/15 text-[#8E8061] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B1A25C]" />
              Valor transparente
            </div>

            <p className="font-garamond text-2xl sm:text-3xl md:text-4xl font-medium text-[#4B5F70] mb-3">
              Desde <span className="text-[#8E8061] font-semibold">2,27 UF + IVA</span> por persona
            </p>
            <p className="text-sm sm:text-base text-stone-600 mb-4 font-opensans">
              (hasta 3,14 UF + IVA según el programa que elijan)
            </p>

            {/* Note & Promotional Gift */}
            <div className="pt-4 border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-stone-700">
              <span className="font-medium">Para 100 a 350 invitados.</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <div className="inline-flex items-center gap-1.5 text-[#8E8061] bg-[#B1A25C]/15 px-3 py-1 rounded-full font-medium">
                <Gift className="w-4 h-4 text-[#B1A25C]" />
                <span>Hoy con regalos especiales al contratar el Todo Incluido</span>
              </div>
            </div>
          </div>
        </div>

        {/* Checklist Grid */}
        <div className="mb-16">
          <h3 className="font-garamond text-2xl font-medium text-[#4B5F70] text-center mb-8">
            ¿Qué incluye exactamente el programa?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F8F8] border border-stone-200/60 hover:bg-[#B1A25C]/5 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B1A25C]/20 text-[#8E8061] flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-[#8E8061] stroke-[2.5]" />
                </div>
                <span className="text-sm font-medium text-[#282828] leading-snug font-opensans">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {photoCards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-[#F8F8F8] rounded-2xl overflow-hidden border border-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-garamond text-2xl font-medium text-[#4B5F70] mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed font-opensans">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href={WA_PRIMARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('seccion_todo_incluido')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md hover:shadow-xl transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[48px]"
          >
            Pide tu cotización por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
