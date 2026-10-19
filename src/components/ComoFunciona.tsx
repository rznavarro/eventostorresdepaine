import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

export const ComoFunciona: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Escríbenos por WhatsApp',
      desc: 'Cuéntanos la fecha que buscan y cuántos invitados esperan.',
    },
    {
      number: '2',
      title: 'Visita la casona',
      desc: 'Recorre los espacios con Maite y resuelve todas tus dudas en persona.',
    },
    {
      number: '3',
      title: 'Diseñamos tu matrimonio',
      desc: 'Elige tu programa Todo Incluido y nosotros coordinamos cada detalle.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-0.5 bg-[#B1A25C] mx-auto mb-4" />
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl font-normal text-[#4B5F70] leading-tight mb-4">
            Reservar tu fecha es simple
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-opensans">
            Un proceso fluido, cercano y sin complicaciones burocráticas.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#B1A25C]/20 via-[#B1A25C] to-[#B1A25C]/20 -z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-col items-center text-center p-6 bg-[#F8F8F8] rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-white border-2 border-[#B1A25C] shadow-sm flex items-center justify-center mb-6">
                <span className="font-garamond text-4xl font-normal text-[#8E8061]">
                  {step.number}
                </span>
              </div>
              <h3 className="font-garamond text-2xl font-medium text-[#4B5F70] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-opensans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Urgency callout: Real business constraint */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#4B5F70]/5 border border-[#4B5F70]/20 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#4B5F70] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Clock className="w-6 h-6 text-[#B1A25C]" />
            </div>
            <div>
              <h4 className="font-garamond text-xl font-medium text-[#4B5F70] mb-1">
                Disponibilidad limitada de fechas
              </h4>
              <p className="text-sm text-stone-700 font-opensans leading-relaxed">
                Como hacemos <strong>un solo evento por día</strong>, cada fecha se reserva para una
                sola pareja. Consulta la tuya antes de que se ocupe.
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
            onClick={() => trackWhatsAppClick('seccion_como_funciona')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md hover:shadow-xl transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[48px]"
          >
            Consultar mi fecha por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
