import React from 'react';
import { ChevronDown, Star, Award, ShieldCheck } from 'lucide-react';
import { trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#282828] text-white pt-24 pb-16 lg:py-0"
    >
      {/* Background with Ken Burns slow zoom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/Sesiondefotos-0111.webp"
          alt="Novios en los jardines de la Casona Eventos Torres de Paine"
          className="w-full h-full object-cover object-center animate-kenburns scale-100 will-change-transform"
          width="1920"
          height="1080"
          loading="eager"
          // @ts-expect-error fetchpriority standard in modern browsers
          fetchpriority="high"
        />
        {/* Gradient overlay: #282828 at 55% bottom, 15% top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#282828]/90 via-[#282828]/55 to-[#282828]/25" />
      </div>

      {/* Floating subtle ambient particles/glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#B1A25C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Pre-title */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#B1A25C] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6">
          <span>Matrimonios en el campo</span>
          <span className="text-white/40">•</span>
          <span>Paine</span>
          <span className="text-white/40">•</span>
          <span>A 40 min de Santiago</span>
        </div>

        {/* H1 - Garamond with italic gold emphasis */}
        <h1 className="font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] tracking-tight max-w-4xl text-white drop-shadow-md mb-6">
          Tu matrimonio en una casona de campo, con el lugar{' '}
          <span className="italic font-normal text-[#B1A25C] underline decoration-[#B1A25C]/40 decoration-1 underline-offset-8">
            solo para ustedes
          </span>{' '}
          ese día
        </h1>

        {/* Bajada */}
        <p className="font-opensans text-base sm:text-lg md:text-xl text-stone-200 font-normal max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 text-balance drop-shadow-sm">
          Jardines antiguos, salón con vista a la naturaleza y un Programa Todo Incluido para 100 a
          350 invitados. Un solo evento por día, coordinado por sus propios dueños desde 2009.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <a
            href={WA_PRIMARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[48px]"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652c1.746.953 3.71 1.456 5.712 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Agenda tu visita por WhatsApp</span>
          </a>

          <a
            href="#todo-incluido"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base sm:text-lg font-medium text-white hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full transition-all duration-200 active:scale-[0.98] min-h-[48px]"
          >
            Ver qué incluye
          </a>
        </div>

        {/* Trust Row with fine gold icons */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm text-stone-300 font-medium pt-2 border-t border-white/15 max-w-2xl w-full">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#B1A25C] fill-[#B1A25C]" />
            <span>★ 4,9/5 de las parejas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#B1A25C]" />
            <span>Premiado Wedding Awards 2016–2025</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B1A25C]" />
            <span>Un solo evento por día</span>
          </div>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <a
        href="#problema"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/70 hover:text-white transition-colors duration-200 group"
      >
        <span className="text-[11px] uppercase tracking-widest font-medium mb-1 text-stone-300 group-hover:text-white">
          Descubrir
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#B1A25C]" />
      </a>
    </section>
  );
};
