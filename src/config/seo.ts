// SEO Configuration
export const seoConfig = {
  home: {
    title: "Evan DJEFIE - Développeur FullStack & Designer | Portfolio",
    description: "Découvrez mon portfolio personnel. Développeur FullStack spécialisé en React, TypeScript, Laravel et Flutter. Services de développement web, applications mobiles et design UX/UI.",
    keywords: "développeur fullstack, designer, portfolio, application web, mobile, flutter, react, typescript, laravel"
  },
  about: {
    title: "À Propos - Evan DJEFIE | Développeur FullStack & Designer",
    description: "En savoir plus sur Evan DJEFIE - Développeur FullStack avec 4+ ans d'expérience. Expertise en React, TypeScript, Laravel, Flutter et DevOps. Passionné par la création de solutions digitales innovantes.",
    keywords: "evan djefie, développeur, fullstack, designer, compétences, expérience, portfolio"
  },
  portfolio: {
    title: "Portfolio - Projets d'Evan DJEFIE | Développement & Design",
    description: "Explorez mon portfolio: projets web, applications mobiles et designs réalisés avec React, TypeScript, Laravel et Flutter. Exemples de travaux pour PME et startups.",
    keywords: "projets, portfolio, développement web, applications mobiles, design, react, typescript, laravel, flutter"
  },
  edjverse: {
    title: "Edjverse - Agence Digitale | Création de Marque & Solutions High-Tech",
    description: "Edjverse est une agence digitale proposant création de marque, transformation digitale et solutions technologiques innovantes pour votre entreprise.",
    keywords: "agence digitale, création de marque, transformation digitale, développement web, marketing digital"
  },
  vizup: {
    title: "ViZup - Accélérateur MVP | Transformez votre idée en produit en 30 jours",
    description: "ViZup est notre accélérateur MVP. Transformez votre idée en application fonctionnelle en seulement 30 jours. Services complets: développement, design, déploiement.",
    keywords: "MVP, accélérateur, développement rapide, startup, application, web, mobile"
  },
  diam: {
    title: "DIAM - Solutions Digitales Innovantes",
    description: "Découvrez DIAM, nos solutions digitales innovantes pour transformer votre entreprise.",
    keywords: "solutions digitales, transformation, applications, services"
  },
  cabinet: {
    title: "AssistCabinet - Solutions Digitales pour Cabinets Professionnels",
    description: "AssistCabinet propose des solutions digitales optimisées pour cabinets dentaires, juridiques, comptables et autres professionnels.",
    keywords: "cabinet, solutions digitales, dentiste, avocat, comptable, professions libérales"
  }
};

// Structured Data for Schema.org
export const schemaConfig = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Evan DJEFIE",
    "url": "https://evan-djefie.com",
    "logo": "https://evan-djefie.com/logo.png",
    "description": "Développeur FullStack et Designer créant des solutions digitales innovantes",
    "sameAs": [
      "https://linkedin.com/in/evan-djefie",
      "https://github.com/evandjefie",
      "https://youtube.com/@evandjefie1007"
    ]
  },
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Evan DJEFIE",
    "url": "https://evan-djefie.com",
    "jobTitle": "Développeur FullStack & Designer",
    "sameAs": [
      "https://linkedin.com/in/evan-djefie",
      "https://github.com/evandjefie"
    ]
  }
};
