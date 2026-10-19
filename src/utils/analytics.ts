/**
 * Utility for tracking events in Google Tag Manager (dataLayer) and Meta Pixel (fbq).
 */

declare global {
  interface Window {
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
  }
}

export type WhatsAppLocation =
  | 'hero'
  | 'header'
  | 'flotante'
  | 'seccion_problema'
  | 'seccion_todo_incluido'
  | 'seccion_espacios'
  | 'seccion_como_funciona'
  | 'faq'
  | 'cta_final';

export function trackWhatsAppClick(location: WhatsAppLocation) {
  // 1. Google Tag Manager dataLayer event
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_click',
      click_location: location,
      timestamp: new Date().toISOString(),
    });

    // 2. Meta Pixel "Lead" event
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'WhatsApp Visit Request',
        content_category: location,
      });
    }
  }
}

export function trackPhoneClick() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'phone_click',
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackEmailClick() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'email_click',
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackWazeClick() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'waze_click',
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackVideoPlay() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'video_play',
      video_title: 'Casona Eventos Torres de Paine',
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackFormSubmit() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submit',
      timestamp: new Date().toISOString(),
    });

    // Fire Lead event on Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'Formulario Fecha Visita',
      });
    }
  }
}

export const WA_PRIMARY_URL =
  'https://wa.me/56993310753?text=Hola%20Maite%2C%20quiero%20agendar%20una%20visita%20a%20la%20Casona%20para%20mi%20matrimonio';

