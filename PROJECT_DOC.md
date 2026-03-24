# Documentation Technique de l'Application Web EDJVERSE

## Vue d'ensemble

L'application web de **EDJVERSE** est une plateforme complète regroupant :
1.  **L'Agence Digitale** : Services de création de marque, transformation digitale et solutions technologiques.
2.  **Les Landing Pages des Offres** : Offres spécialisées telles que ViZup, DIAM et AssistCabinet.
3.  **Le Portfolio Personnel** : Réalisations techniques en tant que développeur fullstack.

## Architecture & Déploiement

Le projet est construit avec une stack moderne :
*   **Frontend** : React + TypeScript + Tailwind CSS.
*   **Animations** : GSAP + ScrollTrigger pour une expérience utilisateur premium.
*   **Build Tool** : Vite.
*   **Déploiement** : Prêt pour GitHub et Render.

## Structure de la Documentation

La documentation est organisée de manière hiérarchique :

### 1. Point d'entrée principal
👉 **[INDEX complet de la documentation (.agent/INDEX.md)](./.agent/INDEX.md)** - À consulter en priorité pour comprendre toute la stratégie (SEO, architecture, implémentation).

### 2. Navigation & SEO (Liens directs vers les docs par page)

| Page / Route | Description | Documentation SEO |
| :--- | :--- | :--- |
| `/` | Accueil global | [Home.md](./doc/Home.md) |
| `/about` | **À propos de Edjverse** | [About.md](./doc/About.md) |
| `/edjverse` | **Nos Services (Agence)** | [Edjverse.md](./doc/Edjverse.md) |
| `/cabinet` | **Solution pour Cabinets** (Dentaire, Juridique, Comptable) | [Cabinet.md](./doc/Cabinet.md) |
| `/vizup` | **ViZup : De l'idée à l'app** | [Vizup.md](./doc/Vizup.md) |
| `/portfolio` | **Mon Portfolio** | [Portfolio.md](./doc/Portfolio.md) |
| `/diam` | Formation DIAM | [Diam.md](./doc/Diam.md) |
| `/privacy-policy` | Politique de confidentialité | - |
| `/terms-conditions` | Termes et conditions | - |

## Guide de Maintenance Technique

Le fichier `src/App.tsx` gère le routage centralisé. Chaque page dispose de son propre fichier dans `src/pages/` et de ses composants dédiés dans `src/components/`.

Pour toute modification majeure de la structure ou du SEO, veuillez vous référer aux exemples de code dans **[.agent/CODE_EXAMPLES.md](./.agent/CODE_EXAMPLES.md)**.
