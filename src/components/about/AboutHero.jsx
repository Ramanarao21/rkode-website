import Container from '../common/Container';
import abouthero from '../../assets/abouthero.png'

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-[#f0ecff] to-white pt-32 pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-[#6c47ff] uppercase mb-5 bg-[#ede9ff] px-4 py-2 rounded-full">
              OUR STORY
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0f0d1a] leading-tight mb-6">
              We curate digital{' '}
              <span className="text-[#6c47ff]">excellence.</span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Ethereal is a digital agency built on the belief that great design isn't just about looking good—it's about creating experiences that transcend the ordinary. We combine sophisticated aesthetics and functional performance.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              We don't just build; we curate.
            </p>
          </div>
          <div className="relative">
            <img
              src={abouthero}
              alt="About us"
              className="rounded-2xl w-full object-cover h-80 lg:h-96"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
