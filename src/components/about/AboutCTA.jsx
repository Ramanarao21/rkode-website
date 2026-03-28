import Section from '../common/Section';
import Container from '../common/Container';
import Button from '../common/Button';

export default function AboutCTA() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f0d1a] mb-5">
            Ready to curate your next project?
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Let's collaborate and build something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="px-7 py-3 text-base">
              Start a Conversation
            </Button>
            <Button variant="secondary" className="px-7 py-3 text-base">
              View Our Services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
