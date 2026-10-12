// One short testimonial per service.
// Logos: drop a file in /public/clients and add logo: "/clients/name.png" to the entry. Without one, a letter badge is shown.
// IMPORTANT: every quote below is a DRAFT written for the client to review. Before it goes live:
//   1. Send the quote to the client, let them edit it, and get their OK in writing (WhatsApp/email is fine).
//   2. Confirm the service shown is really the one you did for them.
//   3. Set approved: true. Approved quotes show without the "Draft" tag.
export type Testimonial = { service: string; slug: string; client: string; quote: string; approved: boolean; logo?: string };
export const testimonials: Testimonial[] = [
  { service: "Branding", slug: "branding", client: "Annai Jewellers", logo: "/clients/annai-jewellers.png", approved: false, quote: "Our brand now looks as premium as our jewellery." },
  { service: "Social Media Marketing", slug: "social-media-marketing", client: "Khalid's Multi Cuisine Restaurant", logo: "/clients/khalids-multi-cuisine.png", approved: false, quote: "Always on time, always on brand." },
  { service: "Personal Branding", slug: "personal-branding", client: "Axel Academy", logo: "/clients/axel-academy.png", approved: false, quote: "They told our story clearly." },
  { service: "Influencer Marketing", slug: "influencer-marketing", client: "Vetrivel Jewellers", approved: false, quote: "Right creators, right audience." },
  { service: "Web Development", slug: "web-development", client: "Shri Sai Bridal Jewels", logo: "/clients/shri-sai-bridal-jewels.png", approved: false, quote: "A fast, beautiful website for our bridal collection." },
  { service: "Video Production", slug: "video-production", client: "Sathya", logo: "/clients/sathya.png", approved: false, quote: "Clean, creative videos. A pleasure to work with." },
  { service: "Performance Marketing", slug: "performance-marketing", client: "Sudha Novelties", logo: "/clients/sudha-novelties.jpg", approved: false, quote: "Steady enquiries from our Meta ads." },
  { service: "SEO", slug: "seo", client: "Jayam Fashion Institute", approved: false, quote: "Much easier to find on Google now." },
];
