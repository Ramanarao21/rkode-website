import Section from '../common/Section';
import Container from '../common/Container';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/services';

export default function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <div className="mb-12">
          <p className="text-xl font-bold tracking-widest text-[#6c47ff] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-[#0f0d1a] mb-3">Our Expertise</h2>
          <p className="text-gray-500 max-w-md text-lg leading-relaxed">
            From strategy to deployment, we provide a full suite of services tailored for the modern web.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
