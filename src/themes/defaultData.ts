import { PortfolioData } from "./types";

export const defaultRohanData: PortfolioData = {
  personal: {
    headline: "HELLO, I'M",
    name: "Rohan Sharma",
    title: "Rohan Sharma",
    role: "UI/UX Designer",
    shortBio:
      "I craft intuitive digital experiences that are beautiful, functional and user-centered.",
    fullBio:
      "I'm a UI/UX Designer with 5+ years of experience crafting digital products that are intuitive, accessible and impactful. I believe in understanding user needs and turning ideas into seamless experiences.",
    avatarUrl: "/images/Hero-right side image (1).jpg",
    aboutPhotoUrl: "/images/Hero-right side image (2).jpg",
    signatureText: "Rohan Sharma",
    availabilityStatus: "AVAILABLE FOR FREELANCE",
    experienceYears: 5,
    experienceSubtitle: "Designing Digital Products",
    resumeUrl: "#",
  },
  socialLinks: [
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "behance", url: "https://behance.net" },
    { platform: "dribbble", url: "https://dribbble.com" },
    { platform: "instagram", url: "https://instagram.com" },
  ],
  stats: {
    projectsCompleted: 70,
    happyClients: 45,
    yearsExperience: 5,
  },
  services: [
    {
      id: "s1",
      title: "UI/UX Design",
      description:
        "Designing user interfaces that are clean, modern and delightful to use.",
      icon: "pen-tool",
    },
    {
      id: "s2",
      title: "Mobile App Design",
      description:
        "Creating intuitive mobile experiences for iOS and Android platforms.",
      icon: "smartphone",
    },
    {
      id: "s3",
      title: "Web Design",
      description:
        "Building responsive websites that are fast, accessible and user-friendly.",
      icon: "monitor",
    },
    {
      id: "s4",
      title: "Design Systems",
      description:
        "Creating reusable components and systems for scalable digital products.",
      icon: "layers",
    },
  ],
  skills: {
    tools: [
      { name: "Figma", percentage: 90 },
      { name: "Adobe XD", percentage: 85 },
      { name: "Sketch", percentage: 75 },
      { name: "Photoshop", percentage: 80 },
      { name: "Illustrator", percentage: 70 },
    ],
    expertise: [
      { name: "User Research", percentage: 90 },
      { name: "Wireframing", percentage: 85 },
      { name: "Prototyping", percentage: 90 },
      { name: "Usability Testing", percentage: 80 },
      { name: "Interaction Design", percentage: 85 },
    ],
  },
  projects: [
    {
      id: "p1",
      title: "Finova - Banking App",
      category: "Mobile App Design",
      description:
        "Next-generation financial dashboard and mobile banking experience with real-time analytics and biometric verification.",
      image: "/images/Hero-right side image (1).jpg",
      liveUrl: "https://finova.example.com",
      tags: ["Figma", "iOS", "Fintech"],
    },
    {
      id: "p2",
      title: "Wanderly - Travel Website",
      category: "Web Design",
      description:
        "Immersive travel booking platform with interactive destination guides, currency conversion, and instant itinerary creator.",
      image: "/images/Hero-right side image (3).jpg",
      liveUrl: "https://wanderly.example.com",
      tags: ["Web Design", "Travel", "UX Research"],
    },
    {
      id: "p3",
      title: "Dashkit - Analytics Dashboard",
      category: "Web Application",
      description:
        "High-performance SaaS metrics dashboard designed for marketing teams, featuring custom data visualization widgets.",
      image: "/images/Hero-right side image (2).jpg",
      liveUrl: "https://dashkit.example.com",
      tags: ["Dashboard", "SaaS", "Design System"],
    },
  ],
  testimonials: [
    {
      id: "t1",
      clientName: "Arjun Mehta",
      role: "CEO",
      company: "Finova",
      quote:
        "Rohan is an exceptional designer. He understood our needs perfectly and delivered beyond expectations.",
    },
    {
      id: "t2",
      clientName: "Neha Verma",
      role: "Product Manager",
      company: "TechNova",
      quote:
        "Professional, creative and reliable. Working with Rohan was a fantastic experience from start to finish.",
    },
    {
      id: "t3",
      clientName: "Karan Singh",
      role: "Founder",
      company: "Wanderly",
      quote:
        "He has a great eye for detail and creates designs that users love. Highly recommended!",
    },
  ],
  contact: {
    email: "hello@rohansharma.design",
    phone: "+91 98765 43210",
    address: "Mumbai, India",
    ctaHeadline: "Let's Create Something Amazing Together",
    ctaSubtext: "Have a project in mind? I'd love to hear about it.",
  },
};
