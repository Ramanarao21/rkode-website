import AI from '../assets/AI.jpg';
import Engineering from '../assets/Engineering.png';
import Sustainablity from '../assets/Sustainablity.png';
import digital from '../assets/digital.jpg';
import greenhosting from '../assets/greenhosting.webp';
import live from '../assets/live.jpg';
import trends from '../assets/trends.jpg';


export const blogPosts = [
  {
    id: 1,
    category: 'DESIGN TRENDS',
    title: 'The Architecture of Emotion: How Generative UI is Redefining Digital Empathy',
    author: 'Elena Vance',
    date: 'May 24, 2026',
    readTime: '8 min read',
    excerpt:
      'Design has always been a conversation between the creator and the user. That conversation is becoming dynamic, real-time, and deeply personal. We are no longer just building pages; we are building systems that breathe.',
    image: AI,
    featured: true,
  },
  {
    id: 2,
    category: 'ENGINEERING',
    title: 'Micro-Interactions in React: The Secret Sauce',
    author: 'Julian Thorne',
    date: 'May 18, 2026',
    readTime: '6 min read',
    excerpt:
      'Why small interactions are the secret sauce to keeping user attention in your codebase. Learn how to implement delightful micro-interactions.',
    image: Engineering,
  },
  {
    id: 3,
    category: 'SUSTAINABILITY',
    title: 'Building Low-Carbon Web Apps',
    author: 'Marcus Chen',
    date: 'May 10, 2026',
    readTime: '7 min read',
    excerpt:
      'Strategies to improve the environmental footprint of heavy digital software without losing speed or functionality.',
    image: digital,
  },
  {
    id: 4,
    category: 'DESIGN TRENDS',
    title: 'The Shift Toward Spatial Interfaces',
    author: 'Sasha Grey',
    date: 'May 2, 2026',
    readTime: '5 min read',
    excerpt:
      'We are still early, yet fundamentally changing the way we think about the future spatial grid and immersive experiences.',
      image:trends

  },
  {
    id: 5,
    category: 'ENGINEERING',
    title: 'Real-time Data Sync with WebSockets',
    author: 'Julian Thorne',
    date: 'Apr 28, 2026',
    readTime: '9 min read',
    excerpt:
      'Building collaborative tools that feel instant. A deep dive into WebSocket architecture and best practices.',
    image: live,
  },
  {
    id: 6,
    category: 'SUSTAINABILITY',
    title: 'Green Hosting: Does It Really Matter?',
    author: 'Marcus Chen',
    date: 'Apr 20, 2026',
    readTime: '6 min read',
    excerpt:
      'Examining the real impact of green hosting providers and how to make environmentally conscious infrastructure choices.',
    image: greenhosting,
  },
];

export const categories = [
  'All',
  'Design Trends',
  'Engineering',
  'Sustainability',
];
