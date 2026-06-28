# SUNNY SANITATIONS - Luxury Architectural Materials Showcase

A complete Next.js website showcasing luxury architectural materials and design curation services. Built with modern web technologies, this immersive dark-themed website features interactive material mixing, virtual tours, consultation booking, and a comprehensive showroom portfolio.

## Project Structure

### Components

The website is split into 8 main components:

#### 1. **Header Component** (`components/Header.tsx`)
- Sticky navigation bar with responsive design
- Desktop navigation with smooth hover effects (nav-underline animation)
- Mobile hamburger menu with animated transitions
- Audio toggle button for ambient effects
- "Request Admission" CTA button
- Anchor links to all major sections

**Key Features:**
- Smooth nav-underline hover animations
- Mobile-responsive hamburger menu (3-line animated icon)
- Audio system toggle state management
- Responsive navigation links
- Sticky positioning for persistent access

#### 2. **Hero Component** (`components/Hero.tsx`)
- Full-height hero section with architectural grid background
- Luxury badge with pulsing animation
- Main headline: "SCULPTING SPACES"
- Descriptive subtitle with architectural focus
- Dual call-to-action buttons (Explore Portfolios, Enter Curation Lab)
- Animated scroll indicator with chevron

**Key Features:**
- Responsive typography scaling
- Grid background pattern for architectural feel
- Smooth scroll to sections functionality
- Gradient overlay effects with rgba transparency
- Mobile-optimized layout

#### 3. **Material Mixer** (`components/MaterialMixer.tsx`)
- Real-time stone and metal finish preview with visual swatches
- Ambient lighting slider (30-98% brightness control)
- Interactive dropdown selectors for materials
- Live color swatches reflecting material choices
- "Add to Presentation" call-to-action button

**Key Features:**
- useState hooks for real-time updates
- Dynamic color switching based on selections
- Lighting slider with responsive feedback
- Grid layout for side-by-side comparison

#### 4. **Sample Studio** (`components/SampleStudio.tsx`)
- Configure presentation boxes with stone/metal selections
- Laser engraving text input (max 32 characters, auto-uppercase)
- Live brass engraving plate preview
- Material case visual with wood texture stripe
- "Compile & Order Presentation Case" button

**Key Features:**
- Real-time text preview in engraving plate
- Material swatch boxes with color display
- Responsive grid layout (5-7 column split on large screens)
- Form state management with controlled inputs

#### 5. **Virtual Tour** (`components/VirtualTour.tsx`)
- Interactive bathroom hotspot system with 4 clickable pins
- Real-time information panel with technical specs
- Pulsing animation on active hotspots
- Grid overlay pattern for architectural feel
- Technical specifications display (CRI, Wattage, Lux, etc.)

**Key Features:**
- Hotspot state management (active hotspot tracking)
- Interactive button positioning (absolute positioning)
- Dynamic content updates on pin click
- SVG grid overlay for blueprint aesthetic
- Technical calibration data display

#### 6. **Gallery** (`components/Gallery.tsx`)
- Asymmetric masonry grid layout (7, 5, 5 column distribution)
- Three featured showroom installations
- Hover effects with description reveal
- Responsive image handling with Unsplash images
- Category labels and descriptive text

**Key Features:**
- Responsive grid distribution (col-span variations)
- Hover opacity transitions for descriptions
- Image brightness adjustment on hover
- Gradient overlay for text readability

#### 7. **Consultation** (`components/Consultation.tsx`)
- Floating label form design with smooth transitions
- Form fields: Name, Contact, Location
- Interest checkboxes (Tiles, Sanitaryware, Faucets, Lighting)
- Form submission with success state overlay
- Location and hours information sidebar

**Key Features:**
- React state management for form data
- Floating label transitions with peer-focus CSS
- Checkbox array state handling
- Success message overlay with checkmark
- Form reset functionality

#### 8. **Footer** (`components/Footer.tsx`)
- Company branding and description
- Showroom location and contact details
- Spatial coordinates with decorative SVG map
- Social media links (Instagram, Pinterest, LinkedIn, Facebook)
- Privacy and policy links
- Copyright information

**Key Features:**
- 12-column grid layout for responsive sections
- SVG animated map with pulsing location pin
- Semantic footer structure
- Social media link placeholders

## Design System

### Color Palette
- **Obsidian Deep**: `#050505` (primary background)
- **Obsidian**: `#0C0C0C` 
- **Obsidian Card**: `#121212` (card backgrounds)
- **Obsidian Border**: `#1E1E1E` (border color)
- **Alabaster**: `#FDFDFD` (primary text)
- **Platinum**: `#F5F5F7` (secondary text)
- **Brass Light**: `#F5E6CC`
- **Brass Default**: `#E1C298` (accent color)
- **Brass Dark**: `#B89B74`

### Typography
- **Serif Font**: Cormorant Garamond (headings, branding)
- **Sans Font**: Inter (body text, technical details)

### Responsive Breakpoints
- Mobile: 375px (default)
- Tablet: 768px (md:)
- Desktop: 1024px (lg:) and above

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Technologies Used

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **UI Library**: React 19
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)
- **Icons**: Lucide React

## File Structure

```
/app
  ├── layout.tsx                 # Root layout with Cormorant Garamond & Inter fonts
  ├── page.tsx                   # Main page combining all 8 components
  └── globals.css                # Global styles & design tokens

/components
  ├── Header.tsx                 # Sticky navigation with mobile menu
  ├── Hero.tsx                   # Hero section with CTA buttons
  ├── MaterialMixer.tsx          # Interactive material composition mixer
  ├── SampleStudio.tsx           # Curated architect kit configurator
  ├── VirtualTour.tsx            # Interactive bathroom hotspot tour
  ├── Gallery.tsx                # Showroom portfolio gallery
  ├── Consultation.tsx           # Consultation booking form
  └── Footer.tsx                 # Footer with contact & location
```

## Key Features

- **8 Interactive Sections**: Hero, Material Mixer, Sample Studio, Virtual Tour, Gallery, Consultation, Header, Footer
- **Real-time Updates**: useState hooks for live material mixing and form handling
- **Interactive Hotspots**: Clickable pins for bathroom feature exploration
- **Material Configurator**: Select stones, metals, and engrave custom text
- **Consultation Form**: Multi-step form with checkbox interests
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Luxury Aesthetic**: Dark obsidian theme with brass gold accents
- **Smooth Animations**: Nav underlines, pulse effects, hover transitions
- **SVG Decorations**: Grid overlays, mapping paths, architectural elements
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Customization

### Adding More Sections

To add more sections to the page:

1. Create a new component in `/components`
2. Import it in `app/page.tsx`
3. Add it to the main layout

### Modifying Colors

All colors are defined in `app/globals.css` in the `:root` selector and can be easily customized. Update the CSS variables and the Tailwind utility classes will automatically use the new values.

### Updating Typography

Fonts are configured in `app/layout.tsx`. To change fonts, update the font imports and the `@theme` section in `globals.css`.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

This project can be deployed to Vercel:

```bash
vercel deploy
```

Or to any other hosting platform that supports Next.js.

## License

© 2026 Sunny Sanitations. All rights reserved.
