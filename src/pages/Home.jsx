import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import AboutPreview from '../components/home/AboutPreview';
import BlogPreview from '../components/home/BlogPreview';
import Testimonials from '../components/home/Testimonials';
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>RKODE LABS - Creative Digital Agency</title>
        <meta name="description" content="Transform your digital presence with innovative solutions in web development, mobile apps, and cloud services." />
      </Helmet>
      <main>
        <Hero />
        <Services />
        <AboutPreview />
        <BlogPreview />
        <Testimonials />
      </main>
    </>
  );
}
