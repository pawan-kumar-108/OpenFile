
# 🚀 Quick Start Guide

Get your Policy Navigator landing page up and running in minutes!

## ⚡ Super Quick Setup (3 Steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

**That's it! Your site is live! 🎉**

---

## 📝 First Customizations (5 Minutes)

### Change the Main Headline
**File**: `components/HeroSection.tsx`

```typescript
<h1>
  Your New Headline
  <br />
  <span className="gradient-text glow-text">
    With Highlighted Text
  </span>
</h1>
```

### Update Statistics
**File**: `lib/constants.ts`

```typescript
export const HERO_STATS: Statistic[] = [
  {
    id: "stat-1",
    value: "999+", // ← Change this
    label: "Your Metric", // ← And this
    icon: "Users",
  },
];
```

### Modify Features
**File**: `lib/constants.ts`

```typescript
export const FEATURES: Feature[] = [
  {
    id: "feature-1",
    title: "Your Feature", // ← Change this
    description: "Feature description", // ← And this
    icon: "CheckCircle", // ← Icon name from Lucide
  },
];
```

### Change Colors
**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: "#FF6B6B", // ← Your brand color
  "dark-blue": "#1a1a2e",
  "darker-blue": "#16213e",
}
```

---

## 🎨 Content Editing Cheat Sheet

All editable content is in `lib/constants.ts`:

| What to Change | Variable Name |
|----------------|---------------|
| Hero stats | `HERO_STATS` |
| Challenge stats | `CHALLENGE_STATS` |
| Features | `FEATURES` |
| Process steps | `HOW_IT_WORKS_STEPS` |
| Impact metrics | `IMPACT_STATS` |
| Testimonials | `TESTIMONIALS` |
| Navigation links | `NAVIGATION_LINKS` |
| Footer sections | `FOOTER_SECTIONS` |

---

## 🔧 Common Tasks

### Add a New Section
1. Create file: `components/YourSection.tsx`
2. Add to `app/page.tsx`
3. Done!

### Add a CTA Button
```typescript
<button className="bg-primary hover:bg-primary/90 text-dark-blue px-8 py-4 rounded-lg font-semibold">
  Your CTA Text
</button>
```

### Add Animations
```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

---

## 📱 Preview on Different Devices

### Mobile Preview
In browser DevTools:
1. Press `F12` or `Cmd+Option+I`
2. Click device icon
3. Select device

### Test Responsive Design
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🚢 Deploy Your Site

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy!

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or run on different port
npm run dev -- -p 3001
```

### Animations Not Working
- Make sure Framer Motion is installed
- Check browser console for errors
- Verify "use client" directive is present

### Styles Not Applying
1. Restart dev server
2. Clear browser cache
3. Check Tailwind config

### TypeScript Errors
```bash
# Rebuild TypeScript
npm run build

# Check for errors
npx tsc --noEmit
```

---

## 📚 Next Steps

1. ✅ Customize content in `lib/constants.ts`
2. ✅ Change colors in `tailwind.config.ts`
3. ✅ Add your logo to navbar
4. ✅ Connect to your backend API
5. ✅ Add more sections as needed
6. ✅ Deploy to production

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 💡 Pro Tips

1. **Use the component index**: Import multiple components easily
   ```typescript
   import { Navbar, HeroSection, Footer } from "@/components";
   ```

2. **Hot reload is your friend**: Save and see changes instantly

3. **Mobile-first**: Design for mobile, then scale up

4. **Keep it simple**: Start with the basics, add complexity later

5. **Read the docs**: Check `DOCUMENTATION.md` for detailed guides

---

**Need help?** Check `DOCUMENTATION.md` for detailed information on every component and feature!

**Happy coding! 🎉**
