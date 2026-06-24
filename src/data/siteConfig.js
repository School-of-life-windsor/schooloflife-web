export const initialSiteConfig = {
  hero: {
    tagline: "EST. 2025 | WINDSOR, ON",
    title: "School of Life",
    description: "Connect with the outdoors through structured camps, expeditions, and mentorship. Build strength, discipline, and community in nature.",
  },
  vision: {
    tagline: "Our Vision",
    title: "Connecting with Allah's Creation",
    paragraph1: "School of Life helps community members connect deeply with the outdoors. The Prophet ﷺ encouraged physical readiness and outdoor skills like archery, swimming, and appreciation for the natural world. These activities build physical strength, mental resilience, and gratitude.",
    paragraph2: "We provide structured camps where you can learn water safety, traditional archery, wilderness navigation, and outdoor cooking. Our activities help build self-reliance, teamwork, and spiritual awareness in nature.",
    paragraph3: "Every excursion, campfire, and challenge is designed to build character, patience, and community connection.",
  },
  timeline: {
    title: "Timeline",
    items: [
      {
        year: "2025",
        title: "The Foundation",
        description: "Community hikes, fishing trips, and water safety training sessions established our initial programs.",
      },
      {
        year: "2026",
        title: "Program Expansion",
        description: "Launched structured skills development, outdoor camps, and the scouts portal for tracking achievements.",
      },
    ],
  },
  cta: {
    title: "Join the Next Expedition",
    description: "Register for our upcoming camps and workshops. Build practical skills, connect with the community, and experience the outdoors.",
  },
  events: [
    {
      id: 1,
      title: "Monthly Halaqa and Bonfire",
      date: "2026-06-26",
      time: "05:00 PM - 11:00 PM",
      location: "Oldcastle Campgrounds (3940 ON-3)",
      skills: ["Community Halaqa", "Outdoor Bonfire Safety", "Nature Reflection"],
      whatToBring: ["Foldable camp chair", "Warm jacket", "Notebook and pen"],
      flyerUrl: "/flyers/WhatsApp Image 2026-06-10 at 19.39.31.jpeg",
      type: "outdoor",
    },
    {
      id: 2,
      title: "School of Life Outdoor Camp",
      date: "2026-07-10",
      time: "09:00 AM - 04:00 PM",
      location: "Windsor Waterfront & Oldcastle Range",
      skills: ["Swimming and Water Safety", "Kayaking and Paddle Control", "Fishing Techniques", "Traditional Archery", "Outdoor Cooking"],
      whatToBring: ["Towel and modest swimwear", "Sunscreen and bug spray", "Water bottle (1.5L+)", "Hiking boots"],
      flyerUrl: "/flyers/WhatsApp Image 2026-06-05 at 21.15.05 (1).jpeg",
      type: "outdoor",
    },
    {
      id: 101,
      title: "Marriage Readiness Seminar",
      date: "2026-01-17",
      time: "10:30 AM - 05:30 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Marriage Readiness Primer", "Spouse Selection Guidelines", "Engagement Etiquette"],
      whatToBring: ["Notebook and pen", "Course materials (provided)", "Curiosity and questions"],
      flyerUrl: "/flyers/dc3d7ef3-3401-4834-aad1-68f033758526.JPG",
      type: "life",
    },
    {
      id: 102,
      title: "Marital Intimacy and Rights",
      date: "2026-02-07",
      time: "10:30 AM - 04:30 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Islamic Intimacy Guidelines", "Marital Privacy Rights", "Family Harmony Rules"],
      whatToBring: ["Notebook and pen", "Course handbook (provided)", "18+ Age Verification"],
      flyerUrl: "/flyers/Screenshot 2026-06-11 at 7.07.27 PM.png",
      type: "life",
    },
    {
      id: 103,
      title: "Conflict Resolution Workshop",
      date: "2026-04-11",
      time: "10:30 AM - 04:30 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Dispute Resolution", "Healthy Marital Communication", "Active Listening Drills"],
      whatToBring: ["Notebook and pen", "Openness to exercises", "Course lunch (included)"],
      flyerUrl: "/flyers/f674e254-efbb-43a9-8202-5ba132adfa98.JPG",
      type: "life",
    },
    {
      id: 104,
      title: "Parenting Essentials",
      date: "2026-05-09",
      time: "10:30 AM - 01:30 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Early Childhood Support", "Sunnah Parenting Practices", "Effective Communication"],
      whatToBring: ["Notebook and pen", "Course syllabus (provided)", "Refreshments included"],
      flyerUrl: "/flyers/951130e6-798f-4aeb-9326-b250b98a9980.JPG",
      type: "life",
    },
    {
      id: 105,
      title: "Kids Nature Storytime",
      date: "2026-06-14",
      time: "11:30 AM - 01:00 PM",
      location: "WIA Centre (2555 McKay Ave)",
      skills: ["Islamic Character Stories", "Family Connection Activities", "Kite Flying"],
      whatToBring: ["Ages 5 to 9 kids", "FEE: $5 per child", "Appetite for pizza"],
      flyerUrl: "/flyers/WhatsApp Image 2026-06-08 at 18.01.07.jpeg",
      type: "life",
    },
  ],
};

export function loadSiteConfig() {
  const saved = localStorage.getItem('sol_site_config');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved site config", e);
    }
  }
  return initialSiteConfig;
}

export function saveSiteConfig(config) {
  localStorage.setItem('sol_site_config', JSON.stringify(config));
}
