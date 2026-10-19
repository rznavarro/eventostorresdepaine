import React from 'react';
import { Phone, Heart } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

export const Nosotros: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-[#F8F8F8] border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-100 aspect-[4/5] max-w-md mx-auto">
              <img
                src="https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/ConstanzayJose-11-1.webp"
                alt="Matrimonio campestre en Eventos Torres de Paine"
                className="w-full h-full object-cover"
                loading="lazy"
                width="500"
                height="625"
              />

            </div>

            {/* Accent badge */}
            <div className="hidden sm:flex absolute -bottom-5 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-stone-200 items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B1A25C]/20 text-[#8E8061] flex items-center justify-center">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  Atención directa
                </p>
                <p className="font-garamond text-base font-semibold text-[#4B5F70]">
                  Por sus propios dueños
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7">
            <div className="w-16 h-0.5 bg-[#B1A25C] mb-4" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8E8061] mb-2 block">
              Nuestra Historia
            </span>
            <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl font-normal text-[#4B5F70] leading-tight mb-6">
              Un campo familiar que abrió sus puertas a las parejas en 2009
            </h2>

            <div className="space-y-4 text-stone-700 font-opensans text-base sm:text-lg leading-relaxed">
              <p>
                Este campo del valle del Maipo es de la familia Sobrevilla desde los años 80. Su
                suegro, don Fidel Sobrevilla, lo eligió porque le recordaba profundamente su pueblo
                natal en Álava (norte de España).
              </p>
              <p>
                En 2009, una amiga le pidió a <strong>Maite Rojas Hanff</strong> casarse aquí, y esa
                boda lo cambió todo. Desde entonces, Maite y su familia abren la casona y sus
                jardines a parejas que sueñan con casarse en el campo.
              </p>
              <p>
                Detallista y apasionada por las cosas bien hechas, cada año ha creado nuevos rincones
                para que tu día sea único, combinando calidez familiar con estándares de banquetería
                y producción de primer nivel.
              </p>
            </div>

            {/* Signature & Direct Phone */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-garamond text-2xl font-medium text-[#4B5F70]">
                  Maite Rojas Hanff
                </p>
                <p className="text-sm text-stone-500 font-opensans">Fundadora y propietaria</p>
              </div>

              <a
                href="tel:+56993310753"
                onClick={trackPhoneClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 hover:border-[#B1A25C] text-[#4B5F70] hover:text-[#282828] text-sm font-semibold transition-all shadow-xs"
                title="Llamar directamente a Maite"
              >
                <Phone className="w-4 h-4 text-[#B1A25C]" />
                <span>+56 9 9331 0753</span>
              </a>
            </div>

            <div className="mt-8">
              <a
                href={WA_PRIMARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('seccion_espacios')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md hover:shadow-xl transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[48px]"
              >
                Agenda tu visita con Maite por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
