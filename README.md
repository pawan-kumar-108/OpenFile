# Policy Navigator - Frontend

A beautiful, modern landing page for Policy Navigator, inspired by supermemory.ai design patterns. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient effects and animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Type-Safe**: Built with TypeScript for robust development
- **Smooth Animations**: Powered by Framer Motion
- **Performance Optimized**: Next.js App Router for fast page loads
- **Modular Architecture**: Easy to extend and customize

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🛠️ Project Structure

```
policy-navigator/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── HeroSection.tsx      # Hero section with stats
│   ├── StatCard.tsx         # Reusable stat card
│   ├── ChallengeSection.tsx # Problem statement
│   ├── FeaturesSection.tsx  # Key features
│   ├── FeatureCard.tsx      # Feature card component
│   ├── HowItWorksSection.tsx # Process steps
│   ├── ImpactSection.tsx    # Impact metrics & testimonials
│   ├── CTASection.tsx       # Call-to-action
│   └── Footer.tsx           # Footer with links
├── lib/
│   ├── constants.ts         # App data and content
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript types
└── public/                  # Static assets

```

## 🎨 Design System

### Colors
- **Primary**: `#00d4ff` (Bright cyan)
- **Dark Blue**: `#0a1628`
- **Darker Blue**: `#050c17`

### Key Components
- **Stat Cards**: Floating cards with blur effect
- **Feature Cards**: Hover effects with icon backgrounds
- **Gradient Text**: Cyan gradient with glow effect
- **Glass Morphism**: Backdrop blur with opacity

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Navigate to project directory**:
```bash
cd policy-navigator
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### Adding New Sections

1. Create a new component in `components/`:
```typescript
"use client";
import { motion } from "framer-motion";

export function NewSection() {
  return (
    <section className="py-20 px-6">
      {/* Your content */}
    </section>
  );
}
```

2. Import and add to `app/page.tsx`:
```typescript
import { NewSection } from "@/components/NewSection";

export default function Home() {
  return (
    <main>
      {/* ... other sections */}
      <NewSection />
    </main>
  );
}
```

### Modifying Content

All content is stored in `lib/constants.ts`. Simply edit the exported arrays:

```typescript
export const FEATURES: Feature[] = [
  {
    id: "new-feature",
    title: "Your Feature",
    description: "Feature description",
    icon: "IconName",
  },
];
```

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#YOUR_COLOR",
  "dark-blue": "#YOUR_COLOR",
  "darker-blue": "#YOUR_COLOR",
}
```

### Adding New Icons

The project uses Lucide React. Import any icon:

```typescript
import { YourIcon } from "lucide-react";
```

## 🎯 Key Features to Implement Next

### Backend Integration
- [ ] Connect to API endpoints
- [ ] Add form validation
- [ ] Implement eligibility checker
- [ ] Add authentication

### Enhanced Features
- [ ] Blog section
- [ ] Search functionality
- [ ] Multi-language support
- [ ] Dark/Light mode toggle
- [ ] Analytics integration

### Performance
- [ ] Image optimization
- [ ] Lazy loading
- [ ] SEO improvements
- [ ] Accessibility audit

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚨 Important Notes

- This is a **frontend-only** project
- No backend or database included
- All data is static from `lib/constants.ts`
- Ready for API integration

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is part of a public good initiative.

## 🙏 Acknowledgments

Design inspiration from [supermemory.ai](https://supermemory.ai)

---

**Ready to build something amazing? Start customizing!** 🎉
