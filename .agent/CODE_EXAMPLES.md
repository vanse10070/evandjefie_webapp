# 💻 Code Examples & Integration Guide

## 1. Comment Utiliser le Composant SEO

### Import du Composant
```typescript
import SEO from '../components/SEO';
import { seoConfig } from '../config/seo';
```

### Utilisation dans une Page
```typescript
function About() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div>
            {/* Ajouter ces deux lignes au début */}
            <SEO 
                title={seoConfig.about.title}
                description={seoConfig.about.description}
                keywords={seoConfig.about.keywords}
                canonicalUrl="https://evan-djefie.com/about"
            />
            
            {/* Reste du composant */}
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            {/* ... */}
        </div>
    );
}
```

## 2. Structure SEO Config

```typescript
// src/config/seo.ts
export const seoConfig = {
  about: {
    title: "À Propos - Evan DJEFIE | Développeur FullStack & Designer",
    description: "En savoir plus sur Evan DJEFIE - Développeur avec 4+ ans d'expérience...",
    keywords: "evan djefie, développeur, fullstack, designer, compétences, expérience"
  },
  // Ajouter d'autres pages ici
};
```

## 3. Structure des Routes

```typescript
// src/App.tsx
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/edjverse" element={<Edjverse />} />
        {/* ... autres routes */}
      </Routes>
    </Router>
  );
}
```

## 4. Mise à Jour Navigation

```typescript
// src/components/Header.tsx
const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },        // ← NOUVELLE
  { label: 'Portfolio', href: '/portfolio' },   // ← NOUVELLE
];

const offers = [
  { label: 'Edjverse', href: '/edjverse' },
  { label: 'ViZup', href: '/vizup' },
  { label: 'DIAM', href: '/diam' },
  { label: 'AssistCabinet', href: '/cabinet' },
];
```

## 5. CTA Vers Services (Exemple)

```typescript
// Dans /about ou /portfolio
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Edjverse */}
  <Link to="/edjverse">
    <div className={`p-8 rounded-lg border transition-all hover:border-[#19a89e] ${styles}`}>
      <div className="inline-block mb-4 p-3 rounded-lg bg-[#19a89e]/20">
        <Globe className="text-[#19a89e]" size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-3">Edjverse</h3>
      <p className="mb-4">Agence digitale proposant création de marque...</p>
      <div className="flex items-center text-[#19a89e] font-semibold">
        Découvrir <ArrowRight size={20} className="ml-2" />
      </div>
    </div>
  </Link>
  
  {/* Répéter pour ViZup, Cabinet, DIAM */}
</div>
```

## 6. Fichiers Statiques (public/)

### robots.txt
```
User-agent: *
Allow: /
Disallow: 

Sitemap: https://evan-djefie.com/sitemap.xml
Crawl-delay: 1
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://evan-djefie.com/</loc>
    <lastmod>2026-02-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>https://evan-djefie.com/about</loc>
    <lastmod>2026-02-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://evan-djefie.com/portfolio</loc>
    <lastmod>2026-02-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  {/* ... autres pages */}
</urlset>
```

## 7. Schema.org Markup (index.html)

```html
<!-- Person Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Evan DJEFIE",
  "url": "https://evan-djefie.com",
  "image": "https://evan-djefie.com/avatar.jpg",
  "jobTitle": "Développeur FullStack & Designer",
  "sameAs": [
    "https://linkedin.com/in/evan-djefie",
    "https://github.com/evandjefie",
    "https://youtube.com/@evandjefie1007"
  ]
}
</script>

<!-- BreadcrumbList Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://evan-djefie.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "À Propos",
      "item": "https://evan-djefie.com/about"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Portfolio",
      "item": "https://evan-djefie.com/portfolio"
    }
  ]
}
</script>
```

## 8. Ajouter une Nouvelle Page SEO

### Étape 1: Créer la Configuration
```typescript
// src/config/seo.ts
export const seoConfig = {
  // ...
  myNewPage: {
    title: "Page Title | Evan DJEFIE",
    description: "Page description...",
    keywords: "keyword1, keyword2, keyword3"
  }
};
```

### Étape 2: Créer la Page
```typescript
// src/pages/MyNewPage.tsx
import SEO from '../components/SEO';
import { seoConfig } from '../config/seo';

function MyNewPage() {
  return (
    <div>
      <SEO 
        title={seoConfig.myNewPage.title}
        description={seoConfig.myNewPage.description}
        keywords={seoConfig.myNewPage.keywords}
        canonicalUrl="https://evan-djefie.com/my-new-page"
      />
      {/* Contenu */}
    </div>
  );
}

export default MyNewPage;
```

### Étape 3: Ajouter la Route
```typescript
// src/App.tsx
import MyNewPage from './pages/MyNewPage';

<Route path="/my-new-page" element={<MyNewPage />} />
```

### Étape 4: Ajouter au Sitemap
```xml
<!-- public/sitemap.xml -->
<url>
  <loc>https://evan-djefie.com/my-new-page</loc>
  <lastmod>2026-02-16</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## 9. Liens Internes Stratégiques

### Pattern à Utiliser
```typescript
// Depuis About vers Services
<Link to="/edjverse" className="text-[#19a89e] font-semibold">
  Découvrir nos services →
</Link>

// Depuis Portfolio vers About
<Link to="/about" className="text-[#19a89e] font-semibold">
  En savoir plus sur moi →
</Link>

// Depuis Services vers Portfolio
<Link to="/portfolio" className="text-blue-500 font-semibold">
  Voir nos réalisations →
</Link>
```

## 10. Vérifier le SEO

### Tester Meta Tags
```javascript
// Dans la console du navigateur
document.title
document.querySelector('meta[name="description"]').content
document.querySelector('link[rel="canonical"]').href
```

### Lighthouse Report
1. Ouvrir DevTools (F12)
2. Aller à l'onglet "Lighthouse"
3. Cliquer "Analyze page load"
4. Vérifier les scores

### Google Search Console
1. Aller à https://search.google.com/search-console
2. Ajouter la propriété
3. Soumettre le sitemap
4. Vérifier l'indexation

## 11. Optimisations Additionnelles

### Image Optimization
```typescript
// Utiliser des images optimisées
<img 
  src="/optimized-image.jpg" 
  alt="Descriptive alt text for SEO"
  loading="lazy"
/>
```

### Internal Link Anchor Text
```typescript
// ✅ BON - Descriptive
<Link to="/portfolio">Voir mon portfolio</Link>

// ❌ MAUVAIS - Generic
<Link to="/portfolio">Cliquez ici</Link>
```

### Heading Structure
```typescript
// Correct heading hierarchy
<h1>Page Title</h1>
<h2>Section 1</h2>
<h3>Subsection</h3>
<h2>Section 2</h2>
```

---

## Ressources Utiles

- [Google Search Console](https://search.google.com/search-console)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

---

**Happy SEO Optimizing! 🚀**
