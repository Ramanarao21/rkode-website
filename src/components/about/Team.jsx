import Section from '../common/Section';
import Container from '../common/Container';
import TeamCard from '../common/TeamCard';
import { team } from '../../data/team';

export default function Team() {
  return (
    <Section className="bg-[#f7f6fb]">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#0f0d1a] mb-4">The Curators</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Meet the multitalented team of designers, engineers, and strategists behind Ethereal's storytelling style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
