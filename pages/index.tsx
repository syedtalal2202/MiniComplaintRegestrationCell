

// pages/index.tsx
import { NextPage } from 'next';
import HeroSection from '../pages/Hero/page';
import ServicesSection from '../pages/Services/page';
import AboutSection from '../pages/Aboutus/page';
import ContactSection from '../pages/Contactus/page';

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
