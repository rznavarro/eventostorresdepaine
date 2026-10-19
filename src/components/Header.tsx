import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick, WA_PRIMARY_URL } from '../utils/analytics';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Todo Incluido', href: '#todo-incluido' },
    { name: 'Espacios', href: '#espacios' },
    { name: 'Matrimonios', href: '#matrimonios' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Preguntas', href: '#preguntas' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#4B5F70] focus:text-white focus:rounded-md focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B1A25C]"
      >
        Saltar al contenido principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-3'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-[#B1A25C] rounded-sm"
              aria-label="Eventos Torres de Paine - Inicio"
            >
              <img
                src={
                  isScrolled
                    ? 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/Logo-torres-del-Paine-centro-de-eventos-2.webp'
                    : 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/Logo-torres-del-Paine-centro-de-eventos-blanco.webp'
                }
                alt="Logo Eventos Torres de Paine"
                className="h-9 sm:h-11 md:h-12 w-auto transition-opacity duration-200"
                width="190"
                height="48"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wide font-medium transition-colors duration-200 relative group py-1 ${
                    isScrolled
                      ? 'text-[#282828] hover:text-[#B1A25C]'
                      : 'text-white/90 hover:text-white drop-shadow-sm'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#B1A25C] transition-all duration-300 group-hover:w-full`}
                  />
                </a>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              {/* Secondary discrete action: Phone call */}
              <a
                href="tel:+56993310753"
                onClick={trackPhoneClick}
                className={`flex items-center gap-1.5 px-2.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-[#4B5F70] hover:text-[#282828] hover:bg-stone-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                title="Llamar a Maite Rojas"
                aria-label="Llamar al +56 9 9331 0753"
              >
                <Phone className="w-4 h-4 text-[#B1A25C]" />
                <span className="hidden sm:inline">+56 9 9331 0753</span>
              </a>

              {/* Primary desktop CTA: Agenda tu visita */}
              <a
                href={WA_PRIMARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('header')}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-sm hover:shadow-md transition-all duration-200 btn-shimmer active:scale-[0.98]"
              >
                Agenda tu visita
              </a>

              {/* Mobile hamburger menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B1A25C] ${
                  isScrolled ? 'text-[#282828]' : 'text-white'
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <nav className="flex flex-col space-y-3 mb-5" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-[#282828] hover:text-[#B1A25C] font-medium text-base py-2 px-1 border-b border-stone-100"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="space-y-3 pt-2">
              <a
                href={WA_PRIMARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('header');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-md transition-colors btn-shimmer"
              >
                Agenda tu visita por WhatsApp
              </a>

              <a
                href="tel:+56993310753"
                onClick={() => {
                  trackPhoneClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-[#4B5F70] bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B1A25C]" />
                Llamar: +56 9 9331 0753
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
