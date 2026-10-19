import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { trackWhatsAppClick, WA_PRIMARY_URL } from '../utils/analytics';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: '¿Cuánto cuesta el Programa Todo Incluido para matrimonio?',
      answer:
        'Va desde 2,27 UF + IVA hasta 3,14 UF + IVA por persona, según el programa que elijan. Incluye lugar, banquetería, bar abierto, decoración, montaje de ceremonia, iluminación, DJ, sonidista, pista de baile, efectos de fiesta, guardarropía y generador.',
    },
    {
      question: '¿Para cuántos invitados es la casona?',
      answer:
        'Recibimos matrimonios de 100 a 350 invitados. El salón-carpa tiene 600 m² y capacidad para hasta 320 personas.',
    },
    {
      question: '¿Dónde está Eventos Torres de Paine?',
      answer:
        'En Paine, Región Metropolitana, en el km 45 de la Ruta 5 Sur, a unos 40 minutos de Santiago. Es un entorno de campo, a las afueras de la ciudad.',
    },
    {
      question: '¿Puedo hacer la ceremonia en el mismo lugar?',
      answer:
        'Sí. Pueden casarse al aire libre en nuestra explanada o hacer la ceremonia religiosa en iglesias de la zona. El programa incluye montaje, música en vivo y amplificación para la ceremonia.',
    },
    {
      question: '¿Tienen menús especiales?',
      answer:
        'Sí. Hay menús vegetarianos, veganos, celíacos, diabéticos e infantiles, además de menús personalizados (por ejemplo, árabe o italiano).',
    },
    {
      question: '¿Comparten el lugar con otro evento el mismo día?',
      answer:
        'No. Reservamos un solo evento por día, así que el campo completo es solo para ustedes.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-20 sm:py-28 bg-[#F8F8F8] border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-0.5 bg-[#B1A25C] mx-auto mb-4" />
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl font-normal text-[#4B5F70] leading-tight mb-4">
            Preguntas frecuentes sobre matrimonios en Torres de Paine
          </h2>
          <p className="text-stone-600 text-base font-opensans">
            Resolvemos de inmediato tus dudas más habituales sobre presupuesto, capacidad y
            servicios.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#B1A25C] focus:ring-inset group"
                  >
                    <span className="font-garamond text-xl sm:text-2xl font-medium text-[#4B5F70] group-hover:text-[#282828] pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-[#8E8061] transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-[#B1A25C]/20 text-[#4B5F70]' : ''
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`px-5 sm:px-6 transition-all duration-300 ease-in-out font-opensans text-stone-600 text-sm sm:text-base leading-relaxed ${
                    isOpen ? 'pb-6 pt-1 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Action */}
        <div className="text-center">
          <a
            href={WA_PRIMARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('faq')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md hover:shadow-xl transition-all duration-300 btn-shimmer active:scale-[0.98] min-h-[48px]"
          >
            ¿Otra duda? Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
