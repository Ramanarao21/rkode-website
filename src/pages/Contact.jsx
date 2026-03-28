import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - RKODE LABS</title>
        <meta name="description" content="Get in touch with RKODE LABS. We're here to help bring your digital vision to life." />
      </Helmet>
      <main>
        <ContactHero />
        <ContactForm />
        <LocationMap />
      </main>
    </>
  );
}
