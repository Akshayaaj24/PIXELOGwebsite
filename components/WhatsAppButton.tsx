import { site } from "@/lib/site";
// Floating WhatsApp button. Opens a chat with the first phone number in lib/site.ts (override with NEXT_PUBLIC_WHATSAPP_NUMBER, digits with country code).
export function WhatsAppButton() {
  const n = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || site.phones[0][1].replace(/\D/g, "");
  return (
    <a href={`https://wa.me/${n}?text=${encodeURIComponent("Hi PIXELOG, I would like to know more about your services.")}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="wa-btn fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,.45)] transition-transform hover:scale-110">
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M16.04 3C9.4 3 4.02 8.37 4.02 15c0 2.12.55 4.19 1.6 6.01L4 29l8.2-2.15A12 12 0 0 0 16.04 27C22.67 27 28.05 21.63 28.05 15S22.67 3 16.04 3zm0 21.9c-1.8 0-3.56-.49-5.1-1.4l-.37-.22-4.87 1.28 1.3-4.75-.24-.38A9.9 9.9 0 0 1 6.1 15c0-5.47 4.46-9.92 9.94-9.92S25.97 9.53 25.97 15s-4.46 9.9-9.93 9.9zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35z"/></svg>
    </a>
  );
}
