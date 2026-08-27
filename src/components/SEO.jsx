import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageSEOMap = {
  '/': {
    title: 'The Global Enterprises | Smart Solutions, Secure Spaces & 4K Security Systems',
    description: 'India\'s leading one-stop partner for 4K AI CCTV surveillance, biometric speed gates, certified fire safety, executive boardroom AV & ergonomic office fit-outs. Est. 2017 in CR Park, New Delhi.'
  },
  '/about': {
    title: 'About Founders Sachin & Rajni Arora | The Global Enterprises New Delhi',
    description: 'Learn the story of The Global Enterprises, founded in 2017 by Sachin Arora and Rajni Arora. Providing turnkey workspace security, audio-visual, and ergonomic infrastructure across India.'
  },
  '/services': {
    title: 'What We Do | 4K CCTV, Speed Gates, Fire Safety, AV & Fit-Outs | The Global Enterprises',
    description: 'Explore our complete workspace services: Tech That Works For You (Surveillance, Access Control, Fire Alarms, IoT) and Spaces That Inspire (Interior Fit-Outs, Ergonomics, Partitions).'
  },
  '/capabilities': {
    title: 'Hardware & Systems Matrix | CCTV, Speed Gates & Fire Systems | The Global Enterprises',
    description: 'Commercial hardware catalog for 4K starlight dome cameras, optical speed gates, UL-listed fire alarm panels, and BIFMA Level 3 motorized sit-stand workstations.'
  },
  '/values': {
    title: 'Our Core Values | Quality, Timeliness, Transparency, Integrity | The Global Enterprises',
    description: 'Discover the 6 core pillars driving The Global Enterprises: Quality without cutting corners, Timeliness, Transparency, Fair Value, Unwavering Dedication, and Ethical Integrity.'
  },
  '/mission': {
    title: 'Our Mission & Sustainable Practices | The Global Enterprises',
    description: 'Our mission is to provide a one-stop turnkey solution combining latest security innovations with sustainable eco-practices, expert guidance, and experienced engineering mastery.'
  },
  '/clients': {
    title: 'Client Trust & Defense Tier Matrix | IndiGo, FedEx, NDRF | The Global Enterprises',
    description: 'Discover why India\'s leading organizations trust The Global Enterprises: Interglobe Aviation (IndiGo), FedEx Express, Rio Tinto, Civil Defense, and National Disaster Response Force (NDRF).'
  },
  '/contact': {
    title: 'Contact & Instant Turnkey Proposal | CR Park New Delhi | The Global Enterprises',
    description: 'Get in touch with The Global Enterprises headquarters at 52/21 Basement, Pocket 52, CR Park, New Delhi-110019. Call +91 98999 33768 or request an instant proposal.'
  }
};

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = pageSEOMap[pathname] || pageSEOMap['/'];
    document.title = seo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }
  }, [pathname]);

  return null;
}
