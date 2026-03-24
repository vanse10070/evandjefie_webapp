# 🗺️ Sitemap & Architecture Visuelle

## Arborescence du Site

```
evan-djefie.com/
│
├── / (HOME)
│   ├── Hero Section
│   ├── Expertise
│   ├── Portfolio Section (Component)
│   └── CTA vers Offres
│
├── /about (ABOUT - NOUVEAU) ✨
│   ├── Intro personnelle
│   ├── Mes Compétences
│   ├── Stack Technologique
│   ├── Expérience
│   ├── CTA Services
│   └── Quick Links SEO
│
├── /portfolio (PORTFOLIO - NOUVEAU) ✨
│   ├── Héro Section
│   ├── Filtrage par Catégorie
│   ├── Galerie de Projets
│   ├── CTA Services
│   └── Quick Links SEO
│
├── /edjverse (SERVICES - AGENCE)
│   ├── Présentation Edjverse
│   ├── Nos Services (3)
│   ├── Secteurs Couverts
│   ├── Offres
│   └── Appel à l'action
│
├── /vizup (OFFRE 1)
│   ├── MVP Accelerator Info
│   ├── Problems/Solutions
│   ├── Pricing
│   ├── Testimonials
│   └── Contact/CTA
│
├── /diam (OFFRE 2)
│   └── [Détails spécifiques]
│
└── /cabinet (OFFRE 3 - ASSISTCABINET)
    └── [Solutions pour cabinets]
```

## Hiérarchie des Contenus

### Niveau 1: ACCUEIL
```
/
├── Présentation personnelle
├── Expertise
├── Portfolio
├── Navigation vers Services
└── CTA principal
```

### Niveau 2: PORTFOLIO PERSONNEL
```
/about
├── À Propos (Evan DJEFIE)
└── Liens vers Services ↓
    ├── Edjverse
    ├── ViZup
    ├── Cabinet
    └── DIAM

/portfolio
├── Mes Projets
└── Liens vers Services ↓
    ├── Edjverse
    ├── ViZup
    ├── Cabinet
    └── DIAM
```

### Niveau 3: SERVICES PROFESSIONNELS
```
/edjverse (AGENCE)
├── Services Agence
└── Liens vers Offres ↓
    ├── ViZup
    ├── Cabinet
    └── DIAM

/vizup (OFFRE 1)
├── Accélérateur MVP
└── Liens vers Autres ↓
    ├── Edjverse
    ├── Cabinet
    └── DIAM

/cabinet (OFFRE 3)
├── Solutions Cabinets
└── Liens vers Autres ↓
    ├── Edjverse
    ├── ViZup
    └── DIAM

/diam (OFFRE 2)
├── Solutions Innovantes
└── Liens vers Autres ↓
    ├── Edjverse
    ├── ViZup
    └── Cabinet
```

## Navigation (User Journey)

### Path 1: Découvrir le Portfolio Personnel
```
Home (/)
  ↓
Explore Portfolio (/portfolio)
  ↓
Intéressé par les Services?
  ↓
Voir Services (Services → Edjverse)
```

### Path 2: Découvrir l'Agence
```
Home (/)
  ↓
Dropdown → Edjverse (/edjverse)
  ↓
Choisir une Offre
  ↓
ViZup/Cabinet/DIAM
```

### Path 3: Parcours Complet
```
Home (/)
  ↓
About (/about)
  ↓
Portfolio (/portfolio)
  ↓
Services (Edjverse)
  ↓
Choisir Offre
  ↓
Contacter/Convertion
```

## Structure des Liens par Page

### HOME (/)
```
HEADER:
├── Accueil
├── À Propos → /about
├── Portfolio → /portfolio
└── Offres ▼
    ├── Edjverse → /edjverse
    ├── ViZup → /vizup
    ├── DIAM → /diam
    └── Cabinet → /cabinet

CONTENU:
├── Section Portfolio (Link → /portfolio)
└── CTA Services → /edjverse
```

### ABOUT (/about)
```
HEADER: (Standard - visible sur toutes pages)
├── Accueil → /
├── À Propos → /about [CURRENT]
├── Portfolio → /portfolio
└── Offres ▼

CONTENU:
├── Section CTA Services
│   ├── 🔗 Edjverse
│   ├── 🔗 ViZup
│   ├── 🔗 Cabinet
│   └── 🔗 DIAM
│
└── Section Quick Links
    ├── 🔗 Services Edjverse
    ├── 🔗 Offre ViZup
    └── 🔗 Offre Cabinet

FOOTER: (Standard - visible sur toutes pages)
├── Social Links
├── Services Links
└── Contact Info
```

### PORTFOLIO (/portfolio)
```
HEADER: (Standard)

CONTENU:
├── Filtrage Projets
├── Galerie de Projets
│
├── Section CTA Services
│   ├── 🔗 Edjverse
│   ├── 🔗 ViZup
│   ├── 🔗 Cabinet
│   └── 🔗 DIAM
│
└── Section Quick Links
    ├── 🔗 Portfolio Personnel
    ├── 🔗 Services Edjverse
    └── 🔗 Toutes Nos Offres

FOOTER: (Standard)
```

### SERVICES (/edjverse, /vizup, /cabinet, /diam)
```
Chaque page service contient:
├── Présentation spécifique
├── Détails services
└── Liens vers autres services et portfolio
```

## Flux de Navigation Recommandé pour l'Utilisateur

```
┌─────────────────────────────────────────────────────────┐
│  NOUVEAU VISITEUR                                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1️⃣ Landing: Home (/)                                   │
│     → Comprendre qui tu es                              │
│                                                          │
│  2️⃣ Exploration: About (/about)                         │
│     → En savoir plus sur Evan DJEFIE                     │
│                                                          │
│  3️⃣ Découverte: Portfolio (/portfolio)                  │
│     → Voir les projets / compétences en action           │
│                                                          │
│  4️⃣ Intérêt Services: Edjverse (/edjverse)              │
│     → Comprendre ce qu'on peut faire pour lui            │
│                                                          │
│  5️⃣ Conversion: ViZup/Cabinet/DIAM                      │
│     → Choisir une offre spécifique                       │
│                                                          │
│  6️⃣ Action: Contact/Devis                               │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## SEO Structure par Page

### Priority & Crawl Frequency

```
HOME (/)
├── Priority: 1.0 (Très Haute)
├── Changefreq: weekly
└── Liens: Tous les services + Portfolio

PORTFOLIO (/portfolio)
├── Priority: 0.9
├── Changefreq: weekly
└── Liens: Services

ABOUT (/about)
├── Priority: 0.8
├── Changefreq: monthly
└── Liens: Services

EDJVERSE (/edjverse)
├── Priority: 0.8
├── Changefreq: monthly
└── Liens: Offres + Portfolio

OFFRES (/vizup, /diam, /cabinet)
├── Priority: 0.8
├── Changefreq: monthly
└── Liens: Autres offres + Portfolio
```

## Distinct Messaging par Section

### 🔵 PORTFOLIO PERSONNEL (Blue/Personal Brand)
- Focus: Vous, vos compétences, vos réalisations
- Tone: Professionnels mais personnel
- Pages: /, /about, /portfolio
- CTA: "Découvrez comment je peux vous aider"

### 🟢 SERVICES AGENCE (Green/Business)
- Focus: Solutions pour votre entreprise
- Tone: Professionnel et entreprise
- Pages: /edjverse, /vizup, /cabinet, /diam
- CTA: "Commencez votre projet"

### 🟠 OFFRES SPÉCIFIQUES (Orange/Offers)
- Focus: Solution précise à un problème
- Tone: Propositionnel
- Pages: /vizup, /cabinet, /diam
- CTA: "Commencer maintenant"

## Indicateurs de Performance à Tracker

```
📊 À Monitorer:

Homepage:
├── Bounce Rate
├── Time on Site
└── Click-through Rate

About Page:
├── Entrances
├── Pages/Session
└── Conversion vers Services

Portfolio Page:
├── Entrances
├── Project Clicks
└── Conversion vers Services

Services Pages:
├── Traffic Source
├── Time on Page
└── Conversion Rate

Overall:
├── Organic Traffic
├── Keyword Rankings
├── Backlink Profile
└── Core Web Vitals
```

## 🎯 Target Keywords par Page

### HOME
- evan djefie developer
- développeur fullstack cameroon
- portfolio développeur

### ABOUT
- evan djefie compétences
- fullstack developer experience
- développeur react typescript

### PORTFOLIO
- portfolio projets
- exemples travaux developer
- projets react flutter

### SERVICES
- agence digitale cameroon
- services digitaux
- création marque cameroon

### OFFRES
- MVP 30 jours
- solutions cabinet
- développement rapide

---

**Architecture optimisée pour SEO et UX!** ✅
