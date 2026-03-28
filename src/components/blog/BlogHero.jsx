import Container from '../common/Container';

export default function BlogHero() {
  return (
    <section className="bg-gradient-to-b from-[#f0ecff] to-white pt-32 pb-20">
      <Container>
        <span className="inline-block text-xs font-semibold tracking-widest text-[#6c47ff] uppercase mb-5">
          DIGITAL INSIGHTS
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0f0d1a] leading-tight max-w-2xl mb-6">
          Stories, insights, and ideas from the{' '}
          <span className="text-[#6c47ff]">digital frontier.</span>
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-xl">
          Exploring the intersection of design, engineering, and human experience in the modern web.
        </p>
      </Container>
    </section>
  );
}
