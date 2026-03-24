
# Documentation de la Page d'Accueil (`/`)

## Fichier source

`src/pages/Home.tsx`

## Description

La page d'accueil est la porte d'entrée de l'application. Elle a pour but de présenter rapidement le profil du développeur, son expertise, un aperçu de ses réalisations et de ses offres de services.

## Structure

La page est composée des sections suivantes :

1.  **Section "Hero" :**
    *   Affiche une photo de profil, le nom, le titre (Développeur Fullstack | DevOps | Designer UI/UX), une courte biographie et des liens vers les réseaux sociaux (GitHub, LinkedIn, Mail).
    *   Contient un bouton "Démarrer un Projet".

2.  **Section "Expertise" :**
    *   Met en avant trois domaines d'expertise : "Développement Fullstack", "Design UI/UX" et "DevOps & Déploiement", chacun avec une brève description.

3.  **Section "Portfolio" :**
    *   Intègre le composant `Portfolio`, qui présente une liste des réalisations.

4.  **Section "Aperçu des services / offres" :**
    *   Présente quatre offres de services principales, chacune menant à une page dédiée :
        *   `Edjverse` : "Agence digitale de confiance" -> `/edjverse`
        *   `ViZup` : "L'Accélérateur MVP" -> `/vizup`
        *   `DIAM` : "Digital In A Month" -> `/diam`
        *   `Cabinet` : "Solutions pour Cabinets" -> `/cabinet`

5.  **Section "CTA" (Appel à l'action) :**
    *   Une section "Prêt à Collaborer ?" avec un bouton "Me Contacter" qui renvoie vers une adresse e-mail.

## Composants partagés

La page utilise les composants suivants :

*   `Header` : L'en-tête de la page.
*   `Footer` : Le pied de page.
*   `ScrollToTop` : Un bouton pour remonter en haut de la page.
*   `useTheme` : Un hook pour gérer le basculement entre le mode clair et le mode sombre.

