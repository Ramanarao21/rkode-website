import Section from '../common/Section';
import Container from '../common/Container';
import { trustedBrands } from '../../data/servicesDetailed';

export default function TrustedBy() {
  return (
    <Section className="bg-gradient-to-b from-white to-[#f7f6fb] py-20">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#6c47ff] uppercase mb-3">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-2xl font-bold text-[#0f0d1a]">
            Powering innovation for global brands
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustedBrands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:border-[#6c47ff]/20 transition-all duration-300 group min-h-[100px]"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-[80px] max-h-[40px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
