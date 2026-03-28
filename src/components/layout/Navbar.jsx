import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 font-['Space_Grotesk']">
        <Link to="/" className="text-xl font-bold text-[#0f0d1a] tracking-tight">
          <span className="text-[#6c47ff]">RK</span>ODE LABS
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            href.startsWith('#') ? (
              <a
                key={label}
                href={href}
                className="text-xl font-medium text-gray-500 hover:text-[#0f0d1a] transition-colors font-semibold"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={href}
                className={`text-xl font-semibold transition-colors ${
                  isActive(href)
                    ? 'text-[#6c47ff]'
                    : 'text-gray-500 hover:text-[#0f0d1a]'
                }`}
              >
                {label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="primary">Get in Touch</Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map(({ label, href }) => (
            href.startsWith('#') ? (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-medium text-gray-600"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 text-sm font-medium ${
                  isActive(href) ? 'text-[#6c47ff]' : 'text-gray-600'
                }`}
              >
                {label}
              </Link>
            )
          ))}
          <Link to="/contact" className="mt-3 block" onClick={() => setMenuOpen(false)}>
            <Button variant="primary" className="w-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
