// Client logos live in /public/clients. Add a client: drop the logo there and add a line below.
export type Client = { name: string; src: string; w: number; h: number };
export const clients: Client[] = [
  {
    "name": "Annai Jewellers",
    "src": "/clients/annai-jewellers.png",
    "w": 269,
    "h": 296
  },
  {
    "name": "Axel Academy",
    "src": "/clients/axel-academy.png",
    "w": 360,
    "h": 272
  },
  {
    "name": "Khalid's Multi Cuisine Restaurant",
    "src": "/clients/khalids-multi-cuisine.png",
    "w": 360,
    "h": 360
  },
  {
    "name": "Sathya",
    "src": "/clients/sathya.png",
    "w": 360,
    "h": 286
  },
  { "name": "Shri Sai Bridal Jewels", "src": "/clients/shri-sai-bridal-jewels.png", "w": 600, "h": 600 },
  { "name": "Sudha Novelties", "src": "/clients/sudha-novelties.jpg", "w": 600, "h": 600 }
];
