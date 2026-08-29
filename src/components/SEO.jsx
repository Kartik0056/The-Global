import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://globalenterprises.in';

const pageSEOMap = {
  '/': {
    title: 'The Global Enterprises | Integrated Workspace & Security Solutions',
    description: 'Global Enterprises is a single-window partner providing CCTV surveillance, access control, boardroom audio-video, fire safety systems, and office fit-outs across India.',
    image: '/images/headquarters.jpg',
    type: 'website',
    isIndexable: true,
    pageName: 'Home'
  },
  '/about': {
    title: 'About Us | The Global Enterprises',
    description: 'Founded in 2017 by Sachin and Rajni Arora, Global Enterprises delivers turnkey technology integration, security infrastructure, and office environments from CR Park, New Delhi.',
    image: '/images/headquarters.jpg',
    type: 'article',
    isIndexable: true,
    pageName: 'About Us'
  },
  '/services': {
    title: 'Workspace, Security & IT Infrastructure Services | The Global Enterprises',
    description: 'Explore our 6 core services: Security & Monitoring Systems, Audio & Video Solutions, Fire Safety & Rodent Management, Network & Connectivity, Office Fit-outs, and Injection Moulding.',
    image: '/images/cctv.jpg',
    type: 'website',
    isIndexable: true,
    pageName: 'Services'
  },
  '/capabilities': {
    title: 'Hardware & Systems Catalog | The Global Enterprises',
    description: 'Specifications for commercial 4K CCTV cameras, optical speed gates, addressable fire alarm panels, boardroom display systems, and ergonomic modular workstations.',
    image: '/images/speedgates.jpg',
    type: 'website',
    isIndexable: true,
    pageName: 'Hardware & Systems Matrix'
  },
  '/values': {
    title: 'Our Core Values | The Global Enterprises',
    description: 'The five operating principles that guide our everyday client work: Quality, Timeliness, Fair Value, Dedication, and Honest Integrity.',
    image: '/images/workspace.jpg',
    type: 'article',
    isIndexable: true,
    pageName: 'Core Values'
  },
  '/mission': {
    title: 'Our Mission & Vision | The Global Enterprises',
    description: 'Building long-term client partnerships through turnkey project execution, reliable ongoing maintenance, and sustainable workspace engineering.',
    image: '/images/hero_bg.jpg',
    type: 'article',
    isIndexable: true,
    pageName: 'Mission & Vision'
  },
  '/clients': {
    title: 'Our Community of Clients | The Global Enterprises',
    description: 'See the airlines, corporations, logistics providers, and public institutions across India that trust Global Enterprises for workspace infrastructure and security.',
    image: '/images/firesafety.jpg',
    type: 'website',
    isIndexable: true,
    pageName: 'Clients'
  },
  '/contact': {
    title: 'Contact Us | The Global Enterprises',
    description: 'Get in touch with our engineering and project teams in CR Park, New Delhi for site assessments, service inquiries, and project consultations.',
    image: '/images/headquarters.jpg',
    type: 'website',
    isIndexable: true,
    pageName: 'Contact Us'
  },
  '/admin': {
    title: 'Admin Sign In | The Global Enterprises',
    description: 'Administrative portal for Global Enterprises team members.',
    image: '/images/headquarters.jpg',
    type: 'website',
    isIndexable: false,
    pageName: 'Admin'
  }
};

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = pageSEOMap[pathname] || pageSEOMap['/'];
    const currentUrl = pathname === '/' ? BASE_URL : `${BASE_URL}/#${pathname}`;
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
    setMetaTag('name', 'author', 'The Global Enterprises');

    // Robots directive based on indexability
    if (seo.isIndexable) {
      setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    } else {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    }

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

    // 7. Dynamic WebPage & BreadcrumbList JSON-LD Schema
    const pageSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${currentUrl}#webpage`,
          'url': currentUrl,
          'name': seo.title,
          'description': seo.description,
          'isPartOf': {
            '@id': `${BASE_URL}/#website`
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${currentUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': BASE_URL
            },
            ...(pathname !== '/' ? [{
              '@type': 'ListItem',
              'position': 2,
              'name': seo.pageName,
              'item': currentUrl
            }] : [])
          ]
        }
      ]
    };

    let scriptElement = document.getElementById('dynamic-page-schema');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'dynamic-page-schema';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(pageSchema);

  }, [pathname]);

  return null;
}
