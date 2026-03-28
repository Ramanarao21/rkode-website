import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaDribbble, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export const contactMethods = [
  {
    id: 1,
    icon: HiMail,
    title: 'Email Us',
    primary: 'hello@rkode.digital',
    secondary: 'support@rkode.digital',
  },
  {
    id: 2,
    icon: HiPhone,
    title: 'Call Us',
    primary: '+91 (040) 1234-5678',
    secondary: 'Mon - Fri, 9am - 6pm IST',
  },
  {
    id: 3,
    icon: HiLocationMarker,
    title: 'Visit Us',
    primary: 'HITEC City, Madhapur',
    secondary: 'Hyderabad, Telangana 500081',
  },
];

export const socialLinks = [
  { name: 'Dribbble', icon: FaDribbble, url: '#' },
  { name: 'Twitter', icon: FaTwitter, url: '#' },
  { name: 'LinkedIn', icon: FaLinkedin, url: '#' },
  { name: 'GitHub', icon: FaGithub, url: '#' },
];

export const enquiryTypes = [
  'General Inquiry',
  'New Project',
  'Partnership',
  'Support',
  'Career',
];
