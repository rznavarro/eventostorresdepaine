import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Navigation, FileText } from 'lucide-react';
import { trackPhoneClick, trackEmailClick, trackWazeClick, trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Todo Incluido', href: '#todo-incluido' },
    { name: 'Espacios', href: '#espacios' },
    { name: 'Matrimonios', href: '#matrimonios' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Preguntas', href: '#preguntas' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <footer className="bg-[#282828] text-stone-300 pt-16 pb-24 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/Logo-torres-del-Paine-centro-de-eventos-blanco.webp"
                alt="Logo Eventos Torres de Paine"
                className="h-12 w-auto mb-3"
                width="200"
                height="48"
              />
            </a>
            <p className="text-sm text-stone-400 font-opensans max-w-sm leading-relaxed">
              Casona para matrimonios y eventos en Paine, Región Metropolitana, Chile. También
              eventos corporativos y graduaciones con exclusividad total de un solo evento por día.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/eventostorresdepaine/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#B1A25C] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Eventos Torres de Paine"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://web.facebook.com/Eventostorresdepaine/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#B1A25C] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Eventos Torres de Paine"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://waze.com/ul/h63vxt8x7f"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWazeClick}
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#B1A25C] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Ruta en Waze a Eventos Torres de Paine"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-garamond text-xl font-medium text-white mb-4">
              Secciones
            </h4>
            <ul className="space-y-2.5 text-sm font-opensans">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-stone-400 hover:text-[#B1A25C] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.eventostorresdepaine.cl/plano-nuevo-torres-de-paine-2-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-[#B1A25C] transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B1A25C]" />
                  <span>Plano de acceso</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-garamond text-xl font-medium text-white mb-4">Contacto Directo</h4>

            <div className="space-y-3 text-sm font-opensans">
              <a
                href="tel:+56993310753"
                onClick={trackPhoneClick}
                className="flex items-center gap-3 text-stone-300 hover:text-[#B1A25C] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B1A25C] flex-shrink-0" />
                <span>+56 9 9331 0753</span>
              </a>

              <a
                href="mailto:maite@eventostorresdepaine.cl"
                onClick={trackEmailClick}
                className="flex items-center gap-3 text-stone-300 hover:text-[#B1A25C] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B1A25C] flex-shrink-0" />
                <span>maite@eventostorresdepaine.cl</span>
              </a>

              <div className="flex items-start gap-3 text-stone-400">
                <MapPin className="w-4 h-4 text-[#B1A25C] flex-shrink-0 mt-1" />
                <span>
                  Pdte. Gabriel González Videla (G540) Parcela 54, Paine, Región Metropolitana,
                  Chile.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={WA_PRIMARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('header')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-full transition-colors"
              >
                Coordinar visita por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-opensans gap-4">
          <p>© 2026 Eventos Torres de Paine. Todos los derechos reservados.</p>
          <p className="text-stone-500">
            Casona de campo exclusiva para matrimonios en Paine, Chile.
          </p>
        </div>
      </div>
    </footer>
  );
};
