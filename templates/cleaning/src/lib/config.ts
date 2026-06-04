import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Divine Cleaning",
    tagline: "A Higher Standard of Clean.",
    phone: "(209) 555-0123",
    phoneHref: "tel:+12095550123",
    email: "info@divinecleaning.com",
    address: "123 Main St, Modesto, CA 95354",
    city: "Modesto",
    serviceAreas: ["Modesto, CA", "Stanislaus County", "Riverbank", "Turlock", "Ceres", "Salida"],
    license: "Licensed & Insured",
    since: "2018",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ocean",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "House Cleaning", desc: "Experience a spotless home with our detailed and thorough house cleaning services.", urgent: false },
    { icon: "briefcase", title: "Commercial Cleaning", desc: "Maintain a professional image with our comprehensive cleaning solutions for businesses.", urgent: false },
    { icon: "shield-check", title: "Professional Disinfection", desc: "Ensure a healthy environment with our advanced disinfection services, targeting germs and viruses.", urgent: true },
    { icon: "sparkles", title: "Office Cleaning", desc: "Keep your workspace pristine and productive with our tailored office cleaning programs.", urgent: false },
    { icon: "truck", title: "Moving Services", desc: "Simplify your move with our deep cleaning services for both your old and new homes.", urgent: false },
    { icon: "heart", title: "Eco-friendly Cleaning", desc: "Enjoy a clean home with our sustainable, non-toxic, and plant-based cleaning solutions.", urgent: false }
  ],

  testimonials: [
    { name: "Vanessa L.", location: "Modesto, CA", stars: 5, text: "The girls at Divine are amazing. They came in and went straight to work transforming my home from a mess to beautifully clean. They were kind, hardworking and non-judgmental. Hiring them was the best decision I've made for my home in years!" },
    { name: "Juliana N.", location: "Turlock, CA", stars: 5, text: "Divine Cleaning did such a good job on my home! The staff was very friendly and easy to communicate with. It’s been a few days now and I still find little details that I was impressed with, and my home still smells just as good as the day they left! Highly recommend!" },
    { name: "Anonymous", location: "Ceres, CA", stars: 5, text: "Divine Cleaning deep cleaned my house like it was brand new 29 yrs ago. The 4 women team did an excellent job in kitchen, bathrooms, scrubbing floors and baseboards, things too high to reach on shelves and in cornices and windows. I never heard so much effort at cleaning before. Things sparkled that I didn't think would again. You are miracle workers! Thank you for making me proud of my home." }
  ],

  trustBadges: [
    "Licensed & Insured", "Eco-Friendly Solutions", "Award-Winning Service", "Women-Empowering Enterprise", "Plant-Based Products", "5-Star Rated"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 5, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "heart", title: "Eco-Friendly", desc: "We use sustainable, non-toxic, and plant-based cleaning solutions for a healthier home and planet." },
    { icon: "award", title: "Award-Winning", desc: "Recognized by Modesto Bee and 209 Magazine for our exceptional cleaning services." },
    { icon: "shield-check", title: "Fully Insured", desc: "Peace of mind with our fully licensed, bonded, and insured cleaning professionals." },
    { icon: "thumbs-up", title: "Empowering Women", desc: "A social enterprise dedicated to empowering women through employment and growth opportunities." },
    { icon: "sparkles", title: "Detail-Oriented", desc: "Our team ensures every nook and cranny is spotless, delivering a truly deep clean." },
    { icon: "clock", title: "Flexible Scheduling", desc: "We work around your schedule to provide convenient and timely cleaning services." }
  ],

  formServiceOptions: ["House Cleaning", "Commercial Cleaning", "Professional Disinfection", "Office Cleaning", "Moving Services", "Eco-friendly Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!