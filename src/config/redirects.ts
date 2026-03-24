// URL Rewrites for SEO and Direct Links
const redirects = [
  {
    source: '/about-me',
    destination: '/about',
    permanent: true
  },
  {
    source: '/mes-projets',
    destination: '/portfolio',
    permanent: true
  },
  {
    source: '/services',
    destination: '/edjverse',
    permanent: true
  },
  {
    source: '/offres',
    destination: '/vizup',
    permanent: true
  },
  {
    source: '/accueil',
    destination: '/',
    permanent: true
  }
];

export default redirects;
