# Jade Events Decorations Website - Designed by Kush

A premium, modern website for Jade Events Decorations - a South Asian event decor business based in Frisco, DFW. Built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Modern Stack**: Built with Next.js 16 App Router, React 19, and Tailwind CSS v4
- **Premium Aesthetics**: Clean, minimalist design with South Asian cultural elements
- **Performance Optimized**: Lazy-loaded images, optimized fonts, and efficient rendering
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation support

## Pages

- **Home**: Hero section, portfolio grid, testimonials, and contact form
- **Services**: Service packages, add-ons, and process overview
- **About**: Company story, values, and team profiles

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this project
2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Replacing Placeholders

### Images

All placeholder images need to be replaced with real assets. Here's what you need:

#### Home Page
- Hero background image (1920x1080px recommended)
- 6 portfolio images (800x600px recommended):
  - Traditional wedding decoration
  - Modern birthday celebration
  - Sangeet night setup
  - Intimate reception
  - Haldi ceremony
  - Anniversary celebration

#### Services Page
- 3 package images (600x400px recommended):
  - Birthday celebration setup
  - Wedding mandap decoration
  - Traditional function decor

#### About Page
- Team working photo (800x600px recommended)
- 2 team member portraits (450x600px recommended)

#### Testimonials
- 3 client photos (100x100px, circular crop)

**To replace images:**
1. Add your images to the `public/images` folder
2. Update the `src` attributes in the components to point to your images
3. Example: Change `/placeholder.svg?...` to `/images/your-image.jpg`

### Content

Update the following content to match your business:

1. **Contact Information** (in `components/footer.tsx`):
   - Phone number
   - Email address
   - Social media links

2. **Pricing** (in `components/services/packages-section.tsx`):
   - Update starting prices for each package
   - Adjust package features as needed

3. **Testimonials** (in `components/home/testimonials-section.tsx`):
   - Replace with real client testimonials
   - Update client names and photos

4. **Team Information** (in `components/about/team-section.tsx`):
   - Update names and bios
   - Replace team photos

5. **Company Details**:
   - Update founding year if different from 2019
   - Adjust service areas in contact section

## Customization

### Colors

The color scheme is defined in `app/globals.css` using CSS custom properties. The current palette features:
- Warm off-white background
- Rich gold (marigold) primary color
- Terracotta secondary accent
- Deep charcoal text

To change colors, update the CSS variables in the `@theme inline` block.

### Fonts

The site uses:
- **Cormorant Garamond**: Elegant serif for headings
- **Inter**: Clean sans-serif for body text

To change fonts, update the imports in `app/layout.tsx` and the font variables in `app/globals.css`.

### Layout

All components are modular and can be easily rearranged or removed:
- Page layouts are in `app/[page]/page.tsx`
- Reusable components are in `components/`
- Section components are in `components/[page]/`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Next Steps

### Required Assets
- [ ] Replace all placeholder images with professional photos
- [ ] Add company logo (if available)
- [ ] Collect real portfolio work photos
- [ ] Gather client testimonials and photos
- [ ] Take team member professional headshots

### Content Refinement
- [ ] Update all contact information
- [ ] Finalize service package pricing
- [ ] Write detailed service descriptions
- [ ] Add real client testimonials
- [ ] Refine company story and values

### Functionality Enhancements
- [ ] Connect contact form to email service (e.g., SendGrid, Resend)
- [ ] Add form validation and error handling
- [ ] Implement analytics (Google Analytics, Vercel Analytics)
- [ ] Add SEO metadata for each page
- [ ] Set up sitemap and robots.txt
- [ ] Add Open Graph images for social sharing

### Optional Features
- [ ] Add a blog section for event tips and inspiration
- [ ] Create a gallery page with filterable portfolio
- [ ] Add online booking/scheduling integration
- [ ] Implement a quote calculator
- [ ] Add Instagram feed integration
- [ ] Create a FAQ section

## Support

For questions or issues with the website code, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

This project is created for Jade Events Decorations. All rights reserved.
