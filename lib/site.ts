export const site = {
  name: "PIXELOG",
  legalName: "Pixelog Digital and IT Solutions",
  city: "Thoothukudi",
  cityAlt: "Tuticorin",
  region: "Tamil Nadu",
  country: "IN",
  street: "11/2A, Toovipuram 2nd Street",
  // Approximate centre of Thoothukudi. For best local results replace with the exact pin from Google Maps (right-click your shop > copy coordinates).
  geo: { lat: 8.7642, lng: 78.1348 },
  areaServed: ["Thoothukudi", "Tuticorin", "Tirunelveli", "Tiruchendur", "Kovilpatti", "Nagercoil", "Madurai", "Tamil Nadu"],
  tagline: "Digital marketing and IT solutions agency in Thoothukudi",
  description: "PIXELOG is a digital marketing and IT solutions agency in Thoothukudi (Tuticorin), Tamil Nadu. We build brands with branding, social media marketing, Meta Ads, video production, website development and SEO.",
  keywords: ["digital marketing agency in Thoothukudi", "IT company in Thoothukudi", "digital marketing company in Tuticorin", "web development company Thoothukudi", "SEO services Thoothukudi", "social media marketing Thoothukudi", "video production Thoothukudi", "Meta Ads agency Tamil Nadu", "branding agency Thoothukudi", "website designers in Tuticorin"],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pixelog.in",
  instagram: "https://www.instagram.com/pixelog.in/",
  email: "hello@pixelog.in",
  phone: "+91 90253 98147",
  phones: [["+91 90253 98147", "+919025398147"], ["+91 70107 56411", "+917010756411"]] as [string, string][],
  location: "11/2A, Toovipuram 2nd Street, Thoothukudi - 2",
};

export type Service = { slug: string; title: string; blurb: string; problems: string[]; included: string[]; faqs: { q: string; a: string }[] };

export const processSteps = ["Discover", "Plan", "Build", "Launch", "Measure and refine"];

const raw: [string, string, string, string[], string[]][] = [
  ["branding", "Branding", "Identity systems that make a business easy to recognise and remember.", ["Inconsistent visuals across channels", "A message that sounds like every competitor"], ["Brand strategy", "Logo and visual identity", "Brand guidelines"]],
  ["social-media-marketing", "Social Media Marketing", "Content and community management built around business goals, not vanity metrics.", ["Posting without a plan", "Followers who never become customers"], ["Content strategy", "Content calendar and creation", "Community management", "Reporting"]],
  ["personal-branding", "Personal Branding", "Positioning for founders and professionals who want to be known for something specific.", ["Unclear expertise", "An online presence that undersells real experience"], ["Positioning workshop", "Profile and content strategy", "Thought-leadership content"]],
  ["influencer-marketing", "Influencer Marketing", "Creator partnerships chosen for audience fit and measured against clear goals.", ["Choosing creators by follower count alone", "No way to track what a partnership delivered"], ["Creator research", "Outreach and contracts", "Campaign management", "Performance review"]],
  ["web-development", "Web Development", "Fast, accessible websites designed to convert visitors and rank well.", ["Slow or outdated websites", "Pages that look fine but do not generate enquiries"], ["UX and UI design", "Full stack development", "E-commerce development", "Technical SEO foundations", "Analytics setup"]],
  ["video-production", "Video Production", "Short- and long-form video from concept through edit.", ["Video that is expensive but unused", "Content that does not fit each platform"], ["Concept and scripting", "Shooting and direction", "Editing and motion graphics", "Platform-specific cuts"]],
  ["performance-marketing", "Performance Marketing", "Paid campaigns on Meta and Google, tracked to leads and revenue.", ["Ad spend with unclear return", "Campaigns that are never tested or refined"], ["Meta Ads", "Google Ads", "Landing pages", "Conversion tracking and reporting"]],
  ["seo", "SEO", "Search visibility built on technical health, useful content and local relevance.", ["Pages that are not indexed or found", "Content written for keywords, not people"], ["Technical audit", "Keyword and content planning", "On-page optimisation", "Local SEO"]],
];
export const services: Service[] = raw.map(([slug, title, blurb, problems, included]) => ({
  slug, title, blurb, problems, included,
  faqs: [
    { q: `How long does ${title.toLowerCase()} take to show results?`, a: "It depends on your goals and starting point. We agree the plan and timeline with you before we begin, and most businesses start seeing early movement within the first few weeks. Bigger results build over a few months." },
    { q: "What do you need from us to start?", a: "Your goals, your logo and brand assets (photos and videos if you have them) and access to your pages or website. We guide you on everything else." },
    { q: `Do you offer ${title.toLowerCase()} for businesses in Thoothukudi?`, a: "Yes. PIXELOG is based in Thoothukudi (Tuticorin), and we work with local businesses and brands across Tamil Nadu, in person or online." },
  ],
}));
