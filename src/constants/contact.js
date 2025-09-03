// WhatsApp and contact constants
export const WHATSAPP_NUMBER = '919780089101'; // raw for wa.me
export const WHATSAPP_DISPLAY = '+91 9780089101';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Build WhatsApp link with optional pre-filled text
 * @param {string} text - Optional message to pre-fill
 * @returns {string} Complete WhatsApp URL
 */
export const buildWhatsAppLink = (text) => 
  `${WHATSAPP_BASE_URL}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Other contact information
export const CONTACT_EMAIL = 'pb31ale1212@gmail.com';
export const CONTACT_PHONE = '+91 9779406876';
export const CONTACT_LOCATION = 'Sector 56, Chandigarh, India';
export const BUSINESS_NAME = 'CreativeFussion';