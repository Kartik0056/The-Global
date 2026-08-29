import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://globalenterprises.in';

const pageSEOMap = {
  '/': {
    title: 'The Global Enterprises | 4K Security Systems, CCTV, Speed Gates & Workspace Fit-outs',
    description: "India's premier one-stop partner for 4K AI CCTV surveillance, LTE body-worn cameras, QUBO smart locks, fire safety systems, executive AV suites, office fit-outs & turnkey management. Founded in 2017 by Sachin & Rajni Arora, CR Park, New Delhi.",
    keywords: 'Global Enterprises, The Global Enterprises, CCTV camera installation Delhi, 4K AI CCTV surveillance, QUBO Hero Electronix smart locks, biometric speed gates, commercial fire alarms, boardroom AV integration, office fit-outs Delhi, Sachin Arora, Rajni Arora, CR Park New Delhi, IndiGo airline security, FedEx logistics security',
    image: '/images/headquarters.jpg',
    type: 'website'
  },
  '/about': {
    title: 'About The Global Enterprises | Sachin & Rajni Arora | Est. 2017 New Delhi',
    description: 'Learn the story of The Global Enterprises, founded in 2017 by Mr. Sachin Arora & Mrs. Rajni Arora in CR Park, New Delhi. Discover our mission: Tech That Works For You and Spaces That Inspire.',
    keywords: 'About Global Enterprises, Sachin Arora, Rajni Arora, CR Park New Delhi, workspace solutions company India, enterprise IT integration, CCTV contractors Delhi, office fitout company',
    image: '/images/headquarters.jpg',
    type: 'article'
  },
  '/services': {
    title: 'Comprehensive Enterprise Services | CCTV, AV, Fire Safety, Fit-Outs & Moulding',
    description: 'Explore our 6 specialized service categories: Security & Monitoring Systems, Audio & Video Solutions, Fire Safety & Rodent Management, Network & Connectivity, Fit-out & Leasehold Improvements, and Injection Moulding Solutions.',
    keywords: 'CCTV surveillance installation, LTE body-worn cameras, boardroom video conferencing, addressable fire alarms, corporate network infrastructure, office interior fitouts, injection moulding job work Delhi',
    image: '/images/cctv.jpg',
    type: 'website'
  },
  '/capabilities': {
    title: 'Hardware & Technology Catalog | 4K CCTV, Speed Gates & Fire Systems',
    description: 'Explore our enterprise hardware lineup: 4K optical starlight sensors, biometric speed gates, addressable fire alarm panels, interactive 4K video walls, and BIFMA ergonomic sit-stand furniture.',
    keywords: '4K CCTV specifications, optical speed gate barriers, addressable fire panels, EPABX intercom, commercial video wall, ergonomic motorized workstations',
    image: '/images/speedgates.jpg',
    type: 'website'
  },
  '/values': {
    title: 'Core Values & Quality Governance | The Global Enterprises',
    description: "We don't cut corners. Ever. Explore the core values guiding The Global Enterprises: Quality, Timeliness, Fair Value, Dedication, and Ethical Integrity in every corporate project.",
    keywords: 'Global Enterprises values, quality turnkey execution, ethical contracting, workspace governance, trusted enterprise partner',
    image: '/images/workspace.jpg',
    type: 'article'
  },
  '/mission': {
    title: 'Our Mission & Sustainable Practices | The Global Enterprises',
    description: 'Empowering modern Indian enterprises with safe, productive, and technologically superior workspaces backed by sustainable engineering and single-point turnkey accountability.',
    keywords: 'Global Enterprises mission, sustainable office design, green workspace technology, corporate infrastructure vision',
    image: '/images/hero_bg.jpg',
    type: 'article'
  },
  '/clients': {
    title: 'Our Community of Clients | IndiGo, FedEx, Air India, NDRF | The Global Enterprises',
    description: 'Trusted by over 200+ leading organizations: IndiGo, FedEx Express, Rio Tinto India, Air India, British Airways, Air Canada, Air France, Etihad, Civil Defense, and NDRF.',
    keywords: 'Global Enterprises clients, IndiGo aviation security, FedEx logistics security, Air India body-worn cameras, NDRF defense equipment, corporate testimonials',
    image: '/images/firesafety.jpg',
    type: 'website'
  },
  '/contact': {
    title: 'Contact Us & Request Turnkey Proposal | CR Park New Delhi | The Global Enterprises',
    description: 'Consult with our senior solution architects. Visit our office at 52/21 Basement, Pocket 52, CR Park, New Delhi-110019 or call +91 98999 33768 for an itemized BOQ estimate.',
    keywords: 'Contact Global Enterprises, CR Park New Delhi office, security consultation Delhi, turnkey office proposal, request BOQ estimate',
    image: '/images/headquarters.jpg',
    type: 'website'
  },
  '/admin': {
    title: 'Admin CRM Portal | The Global Enterprises',
    description: 'Secure central CRM and inquiry management portal for authorized directors of The Global Enterprises.',
    keywords: 'admin crm, global enterprises portal',
    image: '/images/headquarters.jpg',
    type: 'website'
  }
};

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = pageSEOMap[pathname] || pageSEOMap['/'];
    const currentUrl = `${BASE_URL}/#${pathname}`;
    const imageUrl = `${BASE_URL}${seo.image}`;

    // 1. Update Title
    document.title = seo.title;

    // 2. Helper for meta tag updates
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Primary Meta Tags
    setMetaTag('name', 'description', seo.description);
    setMetaTag('name', 'keywords', seo.keywords);
    setMetaTag('name', 'author', 'The Global Enterprises (Sachin & Rajni Arora)');

    // 4. Open Graph Meta Tags
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', seo.type);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('property', 'og:site_name', 'The Global Enterprises');
    setMetaTag('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);
    setMetaTag('name', 'twitter:image', imageUrl);

    // 6. Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // 7. Dynamic BreadcrumbList JSON-LD Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': `${BASE_URL}/#/`
        },
        ...(pathname !== '/' ? [{
          '@type': 'ListItem',
          'position': 2,
          'name': seo.title.split('|')[0].trim(),
          'item': currentUrl
        }] : [])
      ]
    };

    let scriptElement = document.getElementById('dynamic-breadcrumb-schema');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'dynamic-breadcrumb-schema';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(breadcrumbSchema);

  }, [pathname]);

  return null;
}
