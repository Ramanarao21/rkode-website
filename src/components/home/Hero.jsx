import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Container from '../common/Container';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#f0ecff] to-white pt-24 pb-28">
      <Container>
        <span className="inline-block text-xs font-semibold tracking-widest text-[#6c47ff] uppercase mb-5 bg-[#ede9ff] px-4 py-2 rounded-full">
          THE FUTURE OF DIGITAL
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0f0d1a] leading-tight max-w-3xl mb-6">
          Crafting digital{' '}
          <span className="text-[#6c47ff]">masterpieces</span> for visionary
          brands.
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">
          We merge artistic intuition with technical precision to build
          high-performance interfaces that don't just work — they inspire.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Link to="/contact">
            <Button variant="primary" className="px-7 py-3 text-base">
              Start a Project
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="secondary" className="px-7 py-3 text-base">
              View Our Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
