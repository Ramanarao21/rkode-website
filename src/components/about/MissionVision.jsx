import Section from '../common/Section';
import Container from '../common/Container';

export default function MissionVision() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#f7f6fb] rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0f0d1a] mb-4">Our Mission</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              To empower forward-thinking brands by delivering digital experiences that transcend the ordinary. We combine rigorous engineering with editorial design to make products that feel intuitive and look timeless.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-[#6c47ff] mb-1">Integrity</h3>
                <p className="text-xs text-gray-500">
                  We prioritize honesty & transparency in all our work.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#6c47ff] mb-1">Innovation</h3>
                <p className="text-xs text-gray-500">
                  Pushing boundaries of what's possible in the digital space.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#6c47ff] text-white rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
              <span className="text-2xl">👁️</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-sm text-white/90 leading-relaxed mb-4">
              To become the global standard for the next generation of digital agencies. We envision a world where every digital interaction is intentional, every design is purposeful, and every line of code matters.
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              We believe in building products that stand the test of time—both technically and aesthetically.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
