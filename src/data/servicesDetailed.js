import website from '../assets/website.jpg';
import mobile from '../assets/mobile.jpg';
import cloud from '../assets/cloud.jpg';
import performance from '../assets/performance.jpg';

export const servicesDetailed = [
  {
    id: 1,
    icon: '💻',
    title: 'Web Development',
    description:
      'We engineer high-performance, accessible web platforms using the latest frameworks, from enterprise-grade SaaS to bespoke creative sites.',
    features: [
      'React & Next.js Architecture',
      'Headless CMS Integration',
      'SEO & Core Web Vitals',
    ],
    techStack: 'Node.js • Python • Go',
    image: website,
  },
  {
    id: 2,
    icon: '⚡',
    title: 'API Development',
    description:
      'Robust, secure, and well-documented REST & GraphQL APIs that act as the backbone of your digital infrastructure.',
    features: [
      'RESTful & GraphQL APIs',
      'Authentication & Security',
      'Comprehensive Documentation',
    ],
    techStack: 'Node.js • Python • Go',
    image: mobile,
  },
  {
    id: 3,
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'Human-centric design systems that balance aesthetic beauty with functional clarity. We design for emotion and efficiency.',
    features: [
      'Design Systems & Style Guides',
      'Prototyping & User Testing',
      'Accessibility Compliance',
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Real-time Applications',
    description:
      'Powering instant interactions with WebSockets and Server-Sent Events. We build chat engines, live dashboards, and collaborative tools.',
    stats: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Latency', value: '<50ms' },
    ],
    bgColor: 'bg-[#6c47ff]',
    textColor: 'text-white',
  },
  {
    id: 5,
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Scalable infrastructure management using AWS, Azure, and Google Cloud. We handle DevOps so you can focus on building features.',
    features: [
      'CI/CD Pipeline Setup',
      'Container Orchestration',
      'Monitoring & Logging',
    ],
    image: cloud,
  },
  {
    id: 6,
    icon: '🚀',
    title: 'Performance Optimization',
    description:
      'Audit and acceleration services that shave seconds off load times, increasing conversion rates and user satisfaction scores.',
    features: [
      'Core Web Vitals Optimization',
      'Database Query Tuning',
      'CDN & Caching Strategy',
    ],
    image:performance
  },
];

export const trustedBrands = [
  {
    name: 'Stripe',
    logo: 'https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg?q=80&w=1082',
  },
  {
    name: 'Shopify',
    logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
  },
  {
    name: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
  },
  {
    name: 'Figma',
    logo: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format',
  },
  {
    name: 'Vercel',
    logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  },
];
