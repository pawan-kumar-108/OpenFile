import { Feature, Statistic, Step, Testimonial, FooterSection } from "@/types";

export const HERO_STATS: Statistic[] = [
  {
    id: "policies",
    value: "14,782",
    label: "Policies Interpreted",
    icon: "FileText",
  },
  {
    id: "citizens",
    value: "635",
    label: "Citizens Helped",
    icon: "Users",
  },
  {
    id: "benefits",
    value: "$2.3M",
    label: "Benefits Claimed",
    icon: "DollarSign",
  },
];

export const CHALLENGE_STATS: Statistic[] = [
  {
    id: "miss-benefits",
    value: "68%",
    label: "Miss Out on Benefits",
    icon: "AlertCircle",
  },
  {
    id: "wait-time",
    value: "3-6",
    label: "Months Average Wait",
    icon: "Clock",
  },
];

export const FEATURES: Feature[] = [
  {
    id: "policy-interpretation",
    title: "Policy Interpretation",
    description:
      "Simplifies complex government documents into understandable terms that anyone can follow.",
    icon: "FileText",
  },
  {
    id: "eligibility-verification",
    title: "Eligibility Verification",
    description:
      "Automates checks against criteria to confirm citizen eligibility for programs instantly.",
    icon: "CheckCircle",
  },
  {
    id: "benefit-matching",
    title: "Benefit Matching",
    description:
      "Connects citizens with all relevant benefits they qualify for across various agencies.",
    icon: "Search",
  },
  {
    id: "citizen-advocacy",
    title: "Citizen Advocacy",
    description:
      "Provides guided support through application processes and appeals with personalized help.",
    icon: "UserPlus",
  },
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    id: 1,
    title: "Share Your Information",
    description:
      "Tell us about your situation, needs, and circumstances through a simple, conversational interface. No complex forms required.",
  },
  {
    id: 2,
    title: "AI Analyzes Eligibility",
    description:
      "Our AI instantly cross-references your information with thousands of benefit programs, identifying every opportunity you qualify for.",
  },
  {
    id: 3,
    title: "Get Personalized Guidance",
    description:
      "Receive step-by-step instructions, document checklists, and real-time support throughout the entire application process.",
  },
  {
    id: 4,
    title: "Access Your Benefits",
    description:
      "Successfully claim the benefits you deserve with confidence, backed by transparent recommendations and advocacy support.",
  },
];

export const IMPACT_STATS: Statistic[] = [
  {
    id: "success-rate",
    value: "95%",
    label: "Success Rate",
    icon: "TrendingUp",
  },
  {
    id: "satisfaction",
    value: "4.8/5",
    label: "User Satisfaction",
    icon: "Star",
  },
  {
    id: "response-time",
    value: "48hrs",
    label: "Avg. Response Time",
    icon: "Zap",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Policy Navigator helped me discover benefits I didn't even know existed. Within 2 weeks, I successfully applied for three programs that have made a real difference in my family's life. The process was clear, supportive, and actually gave me hope.",
    author: "Sarah M.",
    role: "Healthcare Benefits Recipient",
  },
];

export const NAVIGATION_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#impact", label: "Impact" },
  { href: "#about", label: "About" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#docs", label: "Documentation" },
      { href: "#blog", label: "Blog" },
      { href: "#support", label: "Support" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#privacy", label: "Privacy Policy" },
      { href: "#terms", label: "Terms of Service" },
      { href: "#cookies", label: "Cookie Policy" },
    ],
  },
];
