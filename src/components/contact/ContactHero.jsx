import Container from '../common/Container';

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-b from-[#f0ecff] to-white pt-32 pb-20">
      <Container>
        <span className="inline-block text-xs font-semibold tracking-widest text-[#6c47ff] uppercase mb-5">
          LET'S CREATE TOGETHER
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0f0d1a] leading-tight max-w-2xl mb-6">
          Bring your digital vision to{' '}
          <span className="text-[#6c47ff]">life.</span>
        </h1>
        <p className="text-base text-gray-600 leading-relaxed max-w-xl">
          Have a project in mind? We'd love to hear from you. Our team of digital curators is ready to help you navigate the future of design and technology.
        </p>
      </Container>
    </section>
  );
}
