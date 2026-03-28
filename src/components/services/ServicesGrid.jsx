import Section from '../common/Section';
import Container from '../common/Container';
import ServiceDetailCard from '../common/ServiceDetailCard';
import { servicesDetailed } from '../../data/servicesDetailed';

export default function ServicesGrid() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesDetailed.map((service) => (
            <ServiceDetailCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
