
# ViZup : Passez de l'idée à l'app (`/vizup`)

## Fichier source

`src/pages/Vizup.tsx`

## Description

Cette page est la landing page de l'offre **ViZup** par EDJVERSE. Il s'agit d'un accélérateur MVP qui permet de passer d'une idée à une application fonctionnelle en 21 jours.

## Structure

La page est construite de manière très modulaire, en assemblant une série de composants réutilisables :

*   **`Header` :** L'en-tête de la page.
*   **`Hero` :** La section principale d'introduction, avec un titre accrocheur, une vidéo de présentation et des appels à l'action.
*   **`Problems` :** Une section qui expose les frustrations courantes des porteurs de projets.
*   **`Solution` :** Une section qui présente les bénéfices concrets de l'offre `Vizup`.
*   **`Pricing` :** La section des tarifs, avec une offre limitée et un appel à l'action clair.
*   **`About` :** Une section "À propos" qui présente le développeur.
*   **`Portfolio` :** Une section qui présente des réalisations.
*   **`FAQ` :** Une foire aux questions interactive pour répondre aux interrogations des visiteurs.
*   **`Contact` :** Un formulaire de contact et des informations pour prendre contact.
*   **`ScrollToTop` :** Un bouton pour remonter en haut de la page.
*   **`Footer` :** Le pied de page.

## Animations et Interactivité

La page utilise `gsap` et `ScrollTrigger` pour des animations au défilement, ainsi que des fonctionnalités interactives comme un accordéon pour la FAQ et un formulaire de contact qui génère un message WhatsApp.

