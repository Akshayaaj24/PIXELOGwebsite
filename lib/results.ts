// Reels are clean Instagram links (tracking tokens removed). Fill in client and result for each.
// Self-hosted alternative: video: "/results/name.mp4" (+ poster: "/results/name.jpg") in /public/results.
export type Result = { id: string; category: string; client: string; result: string; video?: string; poster?: string; instagram?: string; image?: string; videoWide?: boolean; imagePos?: string; imageWide?: boolean; caseId?: string; siteUrl?: string; metrics?: { headline: string; headlineLabel: string; rows: [string, string][]; note?: string } };
export const resultCategories = ["Websites", "Video Production", "Meta Ads"];
// Original screenshots, shown untouched. Tap a card to see the full image. Files live in /public/results.
const metaShot: Result = { id: "meta-shot", category: "Meta Ads", client: "Ads Manager", result: "Real campaign results", image: "/results/meta-ads-results.png", imageWide: true };
const metaShot2: Result = { id: "meta-shot-2", category: "Meta Ads", client: "Ads Manager", result: "Real campaign results", image: "/results/meta-ads-results-2.png", imageWide: true };
export const results: Result[] = [
  // Websites: screenshots of client websites
  { id: "web-shri-1", category: "Websites", client: "Shri Sai Bridal Jewels", result: "Website", caseId: "shri-sai", image: "/results/web-shri-1.jpg", videoWide: true, siteUrl: "https://shrisaibridaljewels.com/" },
  { id: "web-sudha-1", category: "Websites", client: "Sudha Novelties", result: "Website", caseId: "sudha", image: "/results/web-sudha-1.jpg", videoWide: true, siteUrl: "https://www.sudhanovelties.com/" },
  // Video Production: 10 silent looping reels (/public/results/reel-1.mp4 ... reel-10.mp4)
  ...Array.from({ length: 10 }, (_, i) => ({ id: `reel-${i + 1}`, category: "Video Production", client: "", result: "", video: `/results/reel-${i + 1}.mp4`, poster: `/results/reel-${i + 1}.jpg` })),
  // Meta Ads: your real Ads Manager screenshot only
  metaShot, metaShot2,
];
