// Case studies for Results > Websites (each has its own page).
export type CaseStudy = {
  id: string; client: string; logo: string; title: string; intro: string;
  challenge: string[]; strategy: { intro: string; items: [string, string][] };
  results: { intro: string; items: [string, string][] }; impact: string[];
  services: string; url: string; highlights: [string, string][];
};
export const caseStudies: CaseStudy[] = [
    {
        id: "shri-sai",
        client: "Shri Sai Bridal Jewels",
        logo: "/clients/shri-sai-bridal-jewels.png",
        title: "From Local Visibility to Online Sales",
        intro: "How Pixelog helped Shri Sai Bridal Jewels reach more customers, increase store visits, and expand into e-commerce.",
        challenge: [
            "Shri Sai Bridal Jewels had a physical store in Thoothukudi, but limited digital visibility meant many potential customers were unaware of the business and its jewellery collections.",
            "The challenge was to help the brand reach a wider audience, attract more customers to its showroom, and create a convenient way for customers to shop online."
        ],
        strategy: {
            intro: "Pixelog developed an integrated digital growth strategy to connect the brand with customers both online and offline.",
            items: [
                [
                    "Video Production",
                    "Created engaging visual content to showcase jewellery collections and build brand awareness."
                ],
                [
                    "Meta Ads",
                    "Ran targeted advertising campaigns to reach potential customers and improve local visibility."
                ],
                [
                    "Lead Generation",
                    "Generated customer enquiries to help turn audience interest into business opportunities."
                ],
                [
                    "E-commerce Website Development",
                    "Built an online store that allows customers to explore collections and purchase jewellery online."
                ]
            ]
        },
        results: {
            intro: "The combination of content, performance marketing, and e-commerce helped Shri Sai Bridal Jewels strengthen its customer acquisition and sales channels.",
            items: [
                [
                    "0 to 7K Followers (Still Counting)",
                    "Grew its social media presence from zero to 7,000 followers, and it is still growing."
                ],
                [
                    "2500+ Leads Generated",
                    "Created new opportunities to connect with potential customers."
                ],
                [
                    "1000+ Online Sales/Orders",
                    "Built a measurable online sales channel through its e-commerce website."
                ],
                [
                    "80+ Daily Walk-ins",
                    "Increased awareness brings 80+ customers to the physical store every day."
                ],
                [
                    "Expanded Digital Reach",
                    "Established a stronger online presence beyond the showroom's immediate customer base."
                ]
            ]
        },
        impact: [
            "Pixelog helped Shri Sai Bridal Jewels bridge the gap between traditional retail and digital commerce. By bringing together video production, Meta Ads, lead generation, and e-commerce, we created a connected digital growth strategy that supports both showroom visits and online purchases."
        ],
        services: "Video Production · Meta Ads · Lead Generation · E-commerce Website Development",
        url: "https://shrisaibridaljewels.com/",
        highlights: [
            ["0 → 7K", "Followers, still counting"],
            ["2500+", "Leads generated"],
            ["1000+", "Online sales/orders"],
            ["80+", "Daily walk-ins"]
        ]
    },
    {
        id: "sudha",
        client: "Sudha Novelties",
        logo: "/clients/sudha-novelties.jpg",
        title: "From Zero Digital Presence to a Growing Online Brand",
        intro: "How Pixelog helped Sudha Novelties build its digital identity, grow its social media audience, generate leads, and launch an e-commerce store.",
        challenge: [
            "Sudha Novelties had little to no established online presence, limiting its ability to showcase products, reach new customers, and build brand recognition beyond its existing audience.",
            "The business needed a complete digital foundation: a recognizable brand identity, an active social media presence, a customer acquisition strategy, and an online store to support digital sales."
        ],
        strategy: {
            intro: "Pixelog built a connected digital ecosystem designed to establish the brand online and create opportunities for growth.",
            items: [
                [
                    "Personal Branding",
                    "Helped establish a recognizable identity and strengthen the brand's connection with its audience."
                ],
                [
                    "Social Media Marketing",
                    "Developed an online presence through content designed to showcase the business and improve audience engagement."
                ],
                [
                    "Meta Ads",
                    "Used paid advertising to expand visibility and reach potential customers."
                ],
                [
                    "Lead Generation",
                    "Implemented campaigns to generate enquiries and connect the business with interested buyers."
                ],
                [
                    "E-commerce Website Development",
                    "Built an online shopping platform to make products accessible to customers digitally."
                ]
            ]
        },
        results: {
            intro: "With a structured digital strategy in place, Sudha Novelties established an online presence and began converting digital attention into business opportunities.",
            items: [
                [
                    "0 to 5K Followers (Still Counting)",
                    "Grew its social media presence from zero to 5,000 followers, and it is still growing."
                ],
                [
                    "3000 Leads Generated",
                    "Created a pipeline of customer enquiries through digital marketing efforts."
                ],
                [
                    "5000+ Online Sales/Orders",
                    "Established a measurable online sales channel through its e-commerce journey."
                ],
                [
                    "100+ Daily Walk-ins",
                    "Digital visibility now brings 100+ customers into the store every day."
                ]
            ]
        },
        impact: [
            "Pixelog helped Sudha Novelties move from having virtually no digital presence to building an online brand with a growing audience, consistent customer acquisition opportunities, and an e-commerce platform.",
            "By combining branding, social media marketing, paid advertising, lead generation, and website development, we laid the foundation for the business to grow beyond traditional retail."
        ],
        services: "Personal Branding · Social Media Marketing · Meta Ads · Lead Generation · E-commerce Website Development",
        url: "https://www.sudhanovelties.com/",
        highlights: [
            ["0 → 5K", "Followers, still counting"],
            ["3000", "Leads generated"],
            ["5000+", "Online sales/orders"],
            ["100+", "Daily walk-ins"]
        ]
    }
];
