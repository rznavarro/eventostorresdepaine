import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; title?: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) => {
  const handleNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, setCurrentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, setCurrentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galería de imágenes a pantalla completa"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B1A25C]"
        aria-label="Cerrar galería"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B1A25C]"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B1A25C]"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Image container */}
      <div
        className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
        />
        <div className="mt-3 text-center text-white/90">
          <p className="font-garamond text-lg font-medium">{currentImage.title || currentImage.alt}</p>
          <p className="text-xs text-stone-400 font-mono mt-1">
            {currentIndex + 1} de {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};
