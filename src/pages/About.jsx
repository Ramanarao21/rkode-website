import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import Team from '../components/about/Team';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - RKODE LABS</title>
        <meta name="description" content="Learn about our mission, vision, and the talented team behind RKODE LABS." />
      </Helmet>
      <main>
        <AboutHero />
        <MissionVision />
        <Team />
      </main>
    </>
  );
}
