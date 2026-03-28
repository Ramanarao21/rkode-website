import { useEffect, useRef } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import TestimonialCard from '../common/TestimonialCard';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <Section className="bg-gradient-to-b from-[#e8f4ff] to-white overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#6c47ff] uppercase mb-3">
            Testimonials from Our Clients
          </p>
          <h2 className="text-3xl font-bold text-[#0f0d1a] max-w-2xl mx-auto leading-tight">
            Trusted by fast-growing B2B and DTC brands to deliver results
          </h2>
        </div>
      </Container>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-4 pb-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}
