import React, { useState } from 'react';
import { Star, Award, Play, ExternalLink } from 'lucide-react';
import { Lightbox } from './Lightbox';
import { trackVideoPlay, trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

export const PruebaSocial: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Wedding awards badge URLs
  const awards = [
    { year: '2025', url: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2025/05/badge-weddingawards_es_CL-2025-matrimonios.jpg' },
    { year: '2023', url: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/badge-weddingawards_es_CL-2023.webp' },
    { year: '2022', url: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/badge-weddingawards_es_CL-2022.webp' },
    { year: '2021', url: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/badge-weddingawards_es_CL-2021.webp' },
    { year: '2020', url: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/badge-weddingawards_es_CL-2020.webp' },
    { year: '2019', url: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/badge-weddingawards_es_CL-2019.webp' },
    { year: '2018', url: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/badge-weddingawards_es_CL-2018.webp' },
    { year: '2017', url: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/badge-weddingawards_es_CL-2017.webp' },
    { year: '2016', url: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/badge-weddingawards_es_CL-2016-e1784123801934.webp' },
  ];

  // Ratings breakdown
  const ratingDetails = [
    { category: 'Calidad del servicio', score: '4,9', percent: 98 },
    { category: 'Tiempo de respuesta', score: '4,9', percent: 98 },
    { category: 'Profesionalidad', score: '4,9', percent: 98 },
    { category: 'Flexibilidad', score: '4,8', percent: 96 },
    { category: 'Calidad / Precio', score: '4,8', percent: 96 },
  ];

  // Ultimos matrimonios realizados
  const ultimosMatris = [
    {
      pareja: 'Isabel y Rodrigo',
      subtext: 'Septiembre 2026',
      credit: 'Foto: Cinekut',
      creditUrl: 'https://www.instagram.com/cinekut/',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/elementor/thumbs/cinekut-31-scaled-ru6atpp5f2c19txwopraf6u0b8fi4wiqewao5shai8.jpg',
      alt: 'Matrimonio de Isabel y Rodrigo en Torres de Paine - Foto Cinekut',
    },
    {
      pareja: 'Anita y Patricio',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/elementor/thumbs/ANITA-PATO-RRSS-252-de-734-rs3mm0i6xrp3a61msvxc077y5jjbx3p7nnlssirwj4.jpg',
      alt: 'Matrimonio de Anita y Patricio en Casona Torres de Paine',
    },
    {
      pareja: 'Marlene y Patricio',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/elementor/thumbs/55055813705_a7b51347a2_k-rs3kslwhds5tez1tq44w07ea3bwvbb1lnxehmdr3hs.jpg',
      alt: 'Matrimonio de Marlene y Patricio en jardines de Paine',
    },
    {
      pareja: 'Paula y Diego',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/elementor/thumbs/PAULA-DIEGO-RRSS-119-de-765-rs3jckk50yxco4myl4dfgu4m6eec6jgk6d7s5wwpyo.jpg',
      alt: 'Matrimonio de Paula y Diego en Casona Torres de Paine',
    },
    {
      pareja: 'Aracely y Samuel',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/elementor/thumbs/Boda-Ara-Sami-web-247-rrgthquae1x1obzg0aqf8mq8hac5hlhetwsuc42ve8.jpg',
      alt: 'Matrimonio de Aracely y Samuel en Torres de Paine',
    },
    {
      pareja: 'Alejandra y Diego',
      image: 'https://www.eventostorresdepaine.cl/wp-content/uploads/elementor/thumbs/Boda-Ale-Diego-web-516-rrgt5xz8kxrfwl4kx731xlxvz4i8uemqjhxdf1ktio.jpg',
      alt: 'Matrimonio de Alejandra y Diego en Casona Torres de Paine',
    },
  ];

  // Gallery items for lightbox
  const galleryItems = [
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/02/MG_8318-scaled.webp',
      alt: 'Salón principal preparado para banquetería de matrimonio',
      title: 'Montaje de mesas y flores en salón principal',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/resumen-8651.webp',
      alt: 'Cóctel al aire libre en jardines de la casona',
      title: 'Cóctel lounge al atardecer en los jardines',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/Resumen-3690-scaled.webp',
      alt: 'Alamedas y senderos iluminados al atardecer',
      title: 'Alamedas y senderos campestres de la casona',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/T-25.webp',
      alt: 'Bar abierto y coctelería para eventos',
      title: 'Bar abierto con coctelería de autor',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/xime-y-max-1.webp',
      alt: 'Novios compartiendo en los parronales de la casona',
      title: 'Novios en el parronal histórico',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/Resumen-0520.webp',
      alt: 'Ceremonia al aire libre bajo la arboleda',
      title: 'Ceremonia campestre en explanada',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/DSC-256.webp',
      alt: 'Rincones románticos para sesión de fotos',
      title: 'Sesión de fotos en rincones naturales',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/DSC-205.webp',
      alt: 'Detalles florales y ambientación de mesas',
      title: 'Detalles de ambientación campestre',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/160A9021-19.webp',
      alt: 'Brindis de novios junto a familiares e invitados',
      title: 'El brindis nupcial en la terraza',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/Valeska-_-Mauricio-320.webp',
      alt: 'Matrimonio campestre con vista a la cordillera',
      title: 'Recuerdos inolvidables en el valle del Maipo',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/Resumen-4565-scaled.webp',
      alt: 'Iluminación nocturna de la casona y pista',
      title: 'Casona iluminada para la noche de fiesta',
    },
    {
      src: 'https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/P_J-208.webp',
      alt: 'Baile de novios en la pista con efectos y luces',
      title: 'El primer baile de casados en pista de baile',
    },
  ];

  const handleOpenPhoto = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  const handleStartVideo = () => {
    setIsPlayingVideo(true);
    trackVideoPlay();
  };

  return (
    <section id="matrimonios" className="py-20 sm:py-28 bg-[#F8F8F8] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-0.5 bg-[#B1A25C] mx-auto mb-4" />
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl font-normal text-[#4B5F70] leading-tight mb-4">
            Parejas que ya celebraron con nosotros
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-opensans">
            La tranquilidad de saber que están en manos de un equipo apasionado con más de una
            década de trayectoria familiar ininterrumpida.
          </p>
        </div>

        {/* Real Numbers Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-stone-200/80 text-center">
            <div className="font-garamond text-5xl font-normal text-[#8E8061] mb-2 flex items-center justify-center gap-1">
              <span>4,9</span>
              <span className="text-2xl text-stone-400 font-light">/5</span>
            </div>
            <p className="text-sm font-semibold text-[#4B5F70] uppercase tracking-wider mb-1">
              Nota global
            </p>
            <p className="text-xs text-stone-500 font-opensans">
              Excelencia reconocida por las parejas
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-stone-200/80 text-center">
            <div className="font-garamond text-5xl font-normal text-[#8E8061] mb-2">98%</div>
            <p className="text-sm font-semibold text-[#4B5F70] uppercase tracking-wider mb-1">
              De las parejas nos recomienda
            </p>
            <p className="text-xs text-stone-500 font-opensans">Satisfacción y fidelidad comprobada</p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-stone-200/80 text-center">
            <div className="font-garamond text-5xl font-normal text-[#8E8061] mb-2">2009</div>
            <p className="text-sm font-semibold text-[#4B5F70] uppercase tracking-wider mb-1">
              Celebrando matrimonios
            </p>
            <p className="text-xs text-stone-500 font-opensans">Más de una década de experiencia</p>
          </div>
        </div>

        {/* Desglose en barras finas doradas animadas */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm max-w-3xl mx-auto mb-8">
          <h3 className="font-garamond text-2xl font-medium text-[#4B5F70] mb-6 text-center">
            Evaluación detallada de nuestros servicios
          </h3>
          <div className="space-y-4">
            {ratingDetails.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center text-sm mb-1.5 font-opensans">
                  <span className="font-medium text-[#282828]">{item.category}</span>
                  <span className="font-semibold text-[#8E8061]">{item.score} / 5,0</span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#B1A25C] h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 text-center">
            <span className="text-xs text-stone-500 font-opensans">
              Evaluación promedio basada en las valoraciones de parejas que celebraron su matrimonio en la casona
            </span>
          </div>
        </div>

        {/* Badges Wedding Awards */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <p className="text-xs sm:text-sm font-semibold text-[#8E8061] uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Award className="w-4 h-4 text-[#B1A25C]" />
              Premiados en los Wedding Awards de Matrimonios.cl
            </p>
          </div>

          {/* Marquee on mobile / flex wrap on desktop */}
          <div className="relative overflow-hidden w-full py-2">
            <div className="hidden md:flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              {awards.map((badge, idx) => (
                <div
                  key={idx}
                  className="w-20 lg:w-24 p-1.5 bg-white rounded-xl shadow-sm border border-stone-200/70 hover:scale-105 transition-transform"
                >
                  <img
                    src={badge.url}
                    alt={`Badge Wedding Awards ${badge.year} Matrimonios.cl`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    width="96"
                    height="96"
                  />
                </div>
              ))}
            </div>

            {/* Mobile continuous marquee */}
            <div className="md:hidden flex overflow-hidden">
              <div className="animate-marquee flex items-center gap-3">
                {[...awards, ...awards].map((badge, idx) => (
                  <div
                    key={idx}
                    className="w-18 flex-shrink-0 p-1 bg-white rounded-lg shadow-xs border border-stone-200"
                  >
                    <img
                      src={badge.url}
                      alt={`Badge Wedding Awards ${badge.year} Matrimonios.cl`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      width="72"
                      height="72"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nuestros últimos matrimonios */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-garamond text-3xl font-medium text-[#4B5F70] mb-2">
              Nuestros últimos matrimonios
            </h3>
            <p className="text-stone-600 text-sm font-opensans">
              Momentos reales y felices capturados en nuestros jardines.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {ultimosMatris.map((matri, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md bg-stone-900 aspect-square"
              >
                <img
                  src={matri.image}
                  alt={matri.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-garamond text-xl sm:text-2xl font-medium drop-shadow-sm">
                    {matri.pareja}
                  </h4>
                  {matri.subtext && (
                    <p className="text-xs text-stone-300 font-opensans">{matri.subtext}</p>
                  )}
                  {matri.credit && (
                    <a
                      href={matri.creditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#B1A25C] hover:underline mt-1 font-opensans"
                    >
                      <span>{matri.credit}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video del lugar con fachada liviana */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-garamond text-2xl sm:text-3xl font-medium text-[#4B5F70] mb-2">
              Recorre la casona en video
            </h3>
            <p className="text-stone-600 text-sm font-opensans">
              Un vistazo de 44 segundos a la atmósfera y encanto de Torres de Paine.
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-black">
            {isPlayingVideo ? (
              <iframe
                src="https://www.youtube.com/embed/TkLLuvzzmLs?autoplay=1&rel=0"
                title="Video Casona Eventos Torres de Paine"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full cursor-pointer group" onClick={handleStartVideo}>
                <img
                  src="https://www.eventostorresdepaine.cl/wp-content/uploads/2024/01/Sesiondefotos-0111.webp"
                  alt="Video Casona Eventos Torres de Paine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 mb-3">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="text-white text-sm sm:text-base font-semibold drop-shadow tracking-wide">
                    Ver video de la Casona (44 s)
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Galería de Fotos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-garamond text-3xl font-medium text-[#4B5F70] mb-2">
              Galería de la Casona
            </h3>
            <p className="text-stone-600 text-sm font-opensans">
              Haz clic en cualquier imagen para abrir la galería en pantalla completa.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryItems.map((photo, index) => (
              <button
                type="button"
                key={index}
                onClick={() => handleOpenPhoto(index)}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-200 border border-stone-200 text-left focus:outline-none focus:ring-2 focus:ring-[#B1A25C]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="360"
                  height="270"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-medium font-opensans line-clamp-1">
                    {photo.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>



        {/* Section CTA */}
        <div className="text-center">
          <a
            href={WA_PRIMARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('seccion_todo_incluido')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md hover:shadow-xl transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[48px]"
          >
            Agenda tu visita por WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryItems}
        currentIndex={activePhotoIndex}
        setCurrentIndex={setActivePhotoIndex}
      />
    </section>
  );
};
