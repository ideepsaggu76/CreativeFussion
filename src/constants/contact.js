// Contact information constants
export const WHATSAPP_NUMBER = '919780089101';
export const PHONE_NUMBER = '+91 9780089101';
export const EMAIL = 'pb31ale1212@gmail.com';
export const LOCATION = 'Mohali, Chandigarh';

// WhatsApp URL helper function
export const getWhatsAppURL = (message = '') => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ''}`;
};