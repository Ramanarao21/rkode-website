import Container from '../common/Container';

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-[#f0ecff] to-white pt-32 pb-20">
      <Container>
        <span className="inline-block text-xs font-semibold tracking-widest text-[#6c47ff] uppercase mb-5 bg-[#ede9ff] px-4 py-2 rounded-full">
          OUR EXPERTISE
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0f0d1a] leading-tight max-w-2xl mb-6">
          Digital solutions{' '}
          <span className="text-[#6c47ff]">crafted</span> with precision.
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-xl">
          We bridge the gap between complex engineering and elegant design. Our curators build scalable ecosystems that drive growth and inspire users.
        </p>
      </Container>
    </section>
  );
}
