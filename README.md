# Rkode Labs - Main Website

A modern, responsive website for Rkode Labs built with React, Vite, and Tailwind CSS. This is the main public-facing website showcasing services, blog posts, team information, and contact details.

## Features

- **Home Page**: Hero section, services overview, testimonials, and blog preview
- **About Page**: Company information and team showcase
- **Services Page**: Detailed service offerings with categorized cards
- **Blog Section**: Featured posts, blog grid, and newsletter subscription
- **Contact Page**: Contact form with location map integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: React Helmet Async for meta tags management
- **Modern UI**: React Icons for consistent iconography

## Tech Stack

- **React 19.2.4** - UI library
- **Vite 8.0.1** - Build tool and dev server
- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **React Router DOM 7.13.2** - Client-side routing
- **React Helmet Async 3.0.0** - Document head management
- **React Icons 5.6.0** - Icon library
- **ESLint** - Code linting

## Project Structure

```
rkode-labs/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/          # Images and static files
│   ├── components/
│   │   ├── about/       # About page components
│   │   ├── blog/        # Blog-related components
│   │   ├── common/      # Reusable components (Button, Card, etc.)
│   │   ├── contact/     # Contact page components
│   │   ├── home/        # Home page components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── services/    # Services page components
│   ├── data/            # Static data (blogs, services, team, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── services/        # API and service utilities
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── index.html
├── package.json
└── vite.config.js
```

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rkode-labs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
VITE_API_BASE_URL=http://localhost:3000
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173` with hot module replacement (HMR).

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview
```bash
npm run preview
```
Previews the production build locally.

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality and style issues.

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:3000` |

## Key Components

### Pages
- **Home**: Landing page with hero, services, testimonials
- **About**: Company overview and team members
- **Services**: Detailed service offerings
- **Blog**: Blog listing and individual post pages
- **Contact**: Contact form and location information

### Common Components
- **Button**: Reusable button with variants
- **Container**: Responsive container wrapper
- **Section**: Page section wrapper
- **ServiceCard**: Service display card
- **BlogCard**: Blog post preview card
- **TeamCard**: Team member card
- **TestimonialCard**: Customer testimonial card

## Data Management

Static data is organized in the `src/data/` directory:
- `blogPosts.js` - Blog post data
- `services.js` - Service offerings
- `servicesDetailed.js` - Detailed service information
- `team.js` - Team member information
- `testimonials.js` - Customer testimonials
- `contactInfo.js` - Contact details

## API Integration

API services are located in `src/services/`:
- `api.js` - Base API configuration
- `blogService.js` - Blog-related API calls
- `formService.js` - Form submission handling

## Styling

The project uses Tailwind CSS 4.2.2 with the Vite plugin for styling. Custom styles can be added to `src/index.css`.
## Performance

The Rkode Labs website delivers exceptional performance with perfect scores across all key metrics. Our optimized architecture ensures fast load times, excellent accessibility, and superior user experience on all devices.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c160cc2d-7a92-4a87-878d-8a0cfbc5b900" />

**Lighthouse Scores:**
- 🟢 Performance: 100/100
- 🟢 Accessibility: 95/100
- 🟢 Best Practices: 100/100
- 🟢 SEO: 92/100

### Key Metrics
- **First Contentful Paint**: 0.6s
- **Largest Contentful Paint**: 0.6s
- **Total Blocking Time**: 0ms
- **Cumulative Layout Shift**: 0
- **Speed Index**: Fast loading across all pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.
