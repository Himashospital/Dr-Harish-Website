export const PHONE_DISPLAY = "+91 78998 24417";
export const PHONE_TEL = "+917899824417";
export const PHONE_DIGITS = "917899824417";

const DEFAULT_MESSAGE =
  "Hi Dr. Harish Gowda, I'm reaching out from your website (drharishgowda.in). I'd like to book a consultation.";

const CALLBACK_MESSAGE =
  "Hi Dr. Harish Gowda, I'm reaching out from your website (drharishgowda.in). Could you please call me back?";

export function whatsappHref(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_HREF = whatsappHref();
export const WHATSAPP_CALLBACK_HREF = whatsappHref(CALLBACK_MESSAGE);
