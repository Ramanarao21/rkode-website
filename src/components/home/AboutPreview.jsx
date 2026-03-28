import Section from '../common/Section';
import Container from '../common/Container';
import Button from '../common/Button';
import light from '../../assets/light.png';
import { Link } from 'react-router-dom';

const highlights = [
  'Intentional White-space to Interfaces',
  'High-Performance Tech Stacks',
  'Sustainable Driven Design',
];

export default function AboutPreview() {
  return (
    <Section id="about" className="bg-[#f7f6fb]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={light}
              alt="Our workspace"
              className="rounded-2xl w-full object-cover h-80 lg:h-140"
            />
            <div className="absolute bottom-5 right-5 bg-white/50 backdrop-blur hover:bg-white rounded-xl shadow-lg px-5 py-4 text-left transition-all duration-300">
              <p className="text-3xl font-bold text-[#6c47ff]">124+</p>
              <p className="text-xs text-gray-500 mt-1 max-w-[120px] leading-snug">
                Global projects delivered with peak performance and results.
              </p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold tracking-widest text-[#6c47ff] uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold text-[#0f0d1a] mb-5 leading-snug">
              We are curators of digital excellence.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Founded in 2025, RKode Labs was born from a simple belief: digital experiences should be as beautiful as they are functional. We are a full digital agency.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-7">
              Our team of designers, engineers, and strategists work at lightning speed to ensure every detail aligns with your brand's core mission.
            </p>

            <ul className="space-y-2.5 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-[#6c47ff] flex items-center justify-center text-white text-[10px]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about">
            <Button variant="primary">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
