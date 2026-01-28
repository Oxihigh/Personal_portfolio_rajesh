# Rajesh Kumar K - Portfolio Website

A modern, animated portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Features smooth parallax scrolling, cinematic animations, and a dedicated leadership page.

## 📁 Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout with Lenis scroll setup
│   ├── globals.css              # Global styles and animations
│   └── leadership/
│       └── page.tsx             # Dedicated leadership page
├── components/
│   ├── header.tsx               # Navigation header
│   ├── hero.tsx                 # Hero section with parallax
│   ├── featured.tsx             # About/Featured section
│   ├── projects.tsx             # Projects showcase
│   ├── contact.tsx              # Contact section
│   ├── leadership.tsx           # Leadership cards (home page)
│   ├── achievements.tsx         # Awards & recognitions
│   ├── leadership-hero.tsx      # Leadership page hero
│   ├── toastmasters-journey.tsx # Toastmasters section with description
│   ├── rotaract-leadership.tsx  # Rotaract section with description
│   ├── reflections.tsx          # Leadership reflections
│   ├── leadership-cta.tsx       # Call-to-action on leadership page
│   └── footer.tsx               # Footer with quote
├── hooks/
│   └── use-scroll-to-top.ts     # Auto scroll-to-top on navigation
├── public/
│   ├── images/
│   │   ├── mountain-landscape.jpg
│   │   ├── spiral-circles.jpg
│   │   └── woman-horse.jpg
│   ├── toastmasters-speaking-stage.jpg
│   └── rotaract-community-service.jpg
└── package.json
\`\`\`

## 🎨 Key Content Locations

### Home Page (`app/page.tsx`)

**Hero Section** - `components/hero.tsx`
- Main headline and tagline
- Location: "Bangalore, India"
- Call-to-action button

**About Section** - `components/featured.tsx`
- Professional summary
- Contact details (email, phone)
- Skills list

**Projects Section** - `components/projects.tsx`
- Project cards with GitHub links
- Edit project titles, descriptions, and links here

**Leadership Section** - `components/leadership.tsx`
- Two cards: Toastmasters and Rotaract
- "Know More" button links to `/leadership` page

**Achievements Section** - `components/achievements.tsx`
- Awards and recognitions grid
- Edit achievement titles and descriptions

**Contact Section** - `components/contact.tsx`
- Contact cards with social links
- Email, LinkedIn, GitHub, Phone

**Footer** - `components/footer.tsx`
- Large inspirational quote
- Navigation links

### Leadership Page (`app/leadership/page.tsx`)

**Leadership Hero** - `components/leadership-hero.tsx`
- Page title and tagline
- Background parallax effect

**Toastmasters Journey** - `components/toastmasters-journey.tsx`
- Toastmasters achievements and quote
- **Description paragraph** (below the quote):
  \`\`\`
  "Toastmasters has shaped me into a confident communicator and an empathetic mentor. 
  From competing on stage to guiding new members, I've learned how to articulate ideas 
  with clarity and lead with authenticity. Mentoring multiple aspiring speakers has taught 
  me that growth isn't about perfection—it's about progress shared with others."
  \`\`\`

**Rotaract Leadership** - `components/rotaract-leadership.tsx`
- Rotaract achievements and awards
- **Description paragraph** (below the achievements):
  \`\`\`
  "Rotaract taught me how leadership extends beyond titles—it's about initiative, service, 
  and community. Leading my club through multiple district-level projects gave me firsthand 
  experience in managing teams, coordinating events, and inspiring action. It transformed 
  me from a participant into a leader who builds impact through people."
  \`\`\`

**Reflections** - `components/reflections.tsx`
- Leadership philosophy quote

**Leadership CTA** - `components/leadership-cta.tsx`
- Call-to-action to return to portfolio

## 📝 How to Edit Content

### Change Text Content

1. **Home Page Text**: Open the component file (e.g., `components/hero.tsx`) and find the text you want to change
2. **Leadership Page Text**: Open `components/toastmasters-journey.tsx` or `components/rotaract-leadership.tsx`
3. **Footer Quote**: Edit `components/footer.tsx`
4. **Navigation Links**: Edit `components/header.tsx`

### Add or Replace Images

1. **Add new image**: Place the image file in `public/` or `public/images/`
2. **Update image path**: In the component file, change the `src` attribute:
   \`\`\`tsx
   <Image src="/images/your-image.jpg" alt="Description" />
   \`\`\`
3. **Supported formats**: JPG, PNG, WebP, GIF

**Current Images:**
- `public/images/mountain-landscape.jpg` - Hero background
- `public/images/spiral-circles.jpg` - Featured section background
- `public/images/woman-horse.jpg` - Featured section image
- `public/toastmasters-speaking-stage.jpg` - Toastmasters section
- `public/rotaract-community-service.jpg` - Rotaract section

### Update Project Cards

Edit `components/projects.tsx`:
\`\`\`tsx
{
  title: "Project Name",
  description: "Project description",
  link: "https://github.com/username/repo"
}
\`\`\`

### Update Achievement Cards

Edit `components/achievements.tsx`:
\`\`\`tsx
{
  title: "Achievement Title",
  description: "Achievement description"
}
\`\`\`

### Update Contact Information

Edit `components/contact.tsx`:
- Email: Update the email address and mailto link
- Phone: Update the phone number
- LinkedIn: Update the LinkedIn profile URL
- GitHub: Update the GitHub profile URL

## 🎬 Animation & Design Notes

- **Parallax Motion**: All sections use Framer Motion's `useScroll` and `useTransform` for GPU-accelerated parallax
- **Scroll Behavior**: Lenis provides smooth scroll experience
- **Animations**: Staggered fade-in animations on scroll using `motion.div` with `initial`, `whileInView`, and `transition` props
- **Colors**: Dark theme with amber/gold accents for leadership page
- **Typography**: Two-font system (sans-serif for body, consistent across all sections)

**Do NOT modify:**
- Animation timing and easing functions
- Parallax depth values
- Component structure and layout
- CSS animation classes

## 🚀 Deployment

The site is optimized for Vercel deployment:
1. Push changes to GitHub
2. Vercel automatically deploys on push
3. Environment variables are managed in Vercel dashboard

## 📦 Dependencies

- **Next.js 16**: React framework
- **Framer Motion**: Animations and parallax
- **Lenis**: Smooth scroll library
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety

## 🔧 Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

Visit `http://localhost:3000` to view the site.

## 📋 Quick Edit Checklist

- [ ] Update hero headline and tagline
- [ ] Change about section text
- [ ] Update contact information
- [ ] Add/replace project cards
- [ ] Update achievement list
- [ ] Replace images in public folder
- [ ] Update social media links
- [ ] Modify leadership page descriptions
- [ ] Update footer quote

## 💡 Tips

- Keep paragraph lengths consistent for visual balance
- Test images at different screen sizes
- Maintain the dark theme aesthetic
- Keep animations smooth and responsive
- Test on mobile devices before deploying
