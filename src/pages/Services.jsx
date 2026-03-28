import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import TrustedBy from '../components/services/TrustedBy';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - RKODE LABS</title>
        <meta name="description" content="Explore our comprehensive digital services including web development, mobile apps, cloud solutions, and more." />
      </Helmet>
      <main>
        <ServicesHero />
        <ServicesGrid />
        <TrustedBy />
      </main>
    </>
  );
}
