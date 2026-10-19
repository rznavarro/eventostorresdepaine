import React, { useState } from 'react';
import { Send, Phone, Mail, Calendar, User, Smartphone } from 'lucide-react';
import { trackFormSubmit, trackWhatsAppClick, trackPhoneClick, trackEmailClick, WA_PRIMARY_URL } from '../utils/analytics';

export const CtaFinal: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit();

    const nombre = formData.nombre.trim() || 'un novio/a interesado';
    const fecha = formData.fecha.trim() || 'por definir';
    const telefono = formData.telefono.trim() || 'no especificado';

    const message = `Hola Maite, soy ${nombre}. Buscamos fecha para el ${fecha}. Mi teléfono es ${telefono}.`;
    const waUrl = `https://wa.me/56993310753?text=${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cta-final" className="relative py-24 sm:py-32 overflow-hidden bg-[#4B5F70] text-white">
      {/* Background with overlay #4B5F70 at ~82% */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/P_J-208.webp"
          alt="Baile de novios en Casona Eventos Torres de Paine"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#4B5F70]/88 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-tag */}
        <div className="inline-block text-xs uppercase tracking-widest text-[#B1A25C] font-semibold mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          Coordinemos un recorrido
        </div>

        {/* H2 */}
        <h2 className="font-garamond text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-tight drop-shadow-md">
          Conoce la casona antes de decidir
        </h2>

        {/* Text */}
        <p className="font-opensans text-base sm:text-lg md:text-xl text-stone-100 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-xs">
          Escríbele a Maite, cuéntale tu fecha y coordinen una visita. Les respondemos personalmente
          para recibirlos con la calidez que su matrimonio merece.
        </p>

        {/* Direct WhatsApp Big Button */}
        <div className="mb-12">
          <a
            href={WA_PRIMARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_final')}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-2xl hover:shadow-green-900/30 transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[54px]"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652c1.746.953 3.71 1.456 5.712 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Agenda tu visita por WhatsApp</span>
          </a>
        </div>

        {/* 3-Field Alternative Quick Form */}
        <div className="max-w-xl mx-auto bg-white/95 text-[#282828] p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md">
          <p className="font-garamond text-2xl font-medium text-[#4B5F70] mb-2 text-center">
            O si prefieres, llena estos 3 datos:
          </p>
          <p className="text-xs text-stone-500 font-opensans mb-6 text-center">
            Te armaremos el mensaje de WhatsApp al instante con un solo clic.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Field 1: Nombre */}
            <div>
              <label
                htmlFor="cta-nombre"
                className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
              >
                Nombre
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="cta-nombre"
                  type="text"
                  required
                  placeholder="Ej: Camila Silva"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B1A25C] focus:bg-white text-[#282828]"
                />
              </div>
            </div>

            {/* Field 2: Teléfono / WhatsApp */}
            <div>
              <label
                htmlFor="cta-telefono"
                className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
              >
                Teléfono / WhatsApp
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Smartphone className="w-4 h-4" />
                </div>
                <input
                  id="cta-telefono"
                  type="tel"
                  required
                  placeholder="+56 9 1234 5678"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B1A25C] focus:bg-white text-[#282828]"
                />
              </div>
            </div>

            {/* Field 3: Fecha tentativa */}
            <div>
              <label
                htmlFor="cta-fecha"
                className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
              >
                Fecha tentativa del matrimonio
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  id="cta-fecha"
                  type="text"
                  placeholder="Ej: Noviembre 2026 / Primavera"
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B1A25C] focus:bg-white text-[#282828]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 btn-shimmer active:scale-[0.99] min-h-[48px]"
            >
              <span>Consultar disponibilidad por WhatsApp</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Microcopy under form */}
          <div className="mt-5 pt-4 border-t border-stone-200/80 text-center space-y-1.5">
            <p className="text-xs text-stone-500 font-opensans">
              Sin compromiso. También puedes llamar al{' '}
              <a
                href="tel:+56993310753"
                onClick={trackPhoneClick}
                className="text-[#4B5F70] hover:text-[#282828] font-semibold underline underline-offset-2"
              >
                +56 9 9331 0753
              </a>{' '}
              o escribir a{' '}
              <a
                href="mailto:maite@eventostorresdepaine.cl"
                onClick={trackEmailClick}
                className="text-[#4B5F70] hover:text-[#282828] font-semibold underline underline-offset-2"
              >
                maite@eventostorresdepaine.cl
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
