import React, { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { MessageCircle, Check, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

function Cabinet() {
    const { isDark, toggleTheme } = useTheme();
    const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

    const packs = [
        {
            name: "PACK LIGHT",
            subtitle: "L'Essentiel qui Convertit",
            price: "600 000 FCFA",
            priceUsd: "915 €",
            description: "Parfait pour démarrer",
            features: [
                "Landing page optimisée conversion (design sur mesure)",
                "Système de prise de RDV intelligent",
                "Notifications email automatiques (Confirmation, Rappel à J-1, Alerte RDV manqué)",
                "Collecte automatique d'avis client post-RDV",
                "Dashboard mobile pour piloter votre activité",
                "Historique complet des RDV et gestion des avis clients",
                "Statistiques de conversion"
            ],
            ideal: "Cabinets souhaitant professionnaliser leur présence en ligne et automatiser la gestion des rendez-vous.",
            whatsappMessage: "Bonjour, je suis intéressé par le PACK LIGHT à 600 000 FCFA"
        },
        {
            name: "PACK MEDIUM",
            subtitle: "L'Engagement Intelligent",
            price: "1 400 000 FCFA",
            priceUsd: "2 135 €",
            description: "Le plus demandé",
            features: [
                "Tout le Pack Light +",
                "Assistant IA intégré à WhatsApp (répond 24/7, prend RDV, envoie rappels)",
                "Notifications multi-canaux (Email + WhatsApp)",
                "Géolocalisation de votre cabinet (Google Maps, Yango)",
                "Dashboard enrichi avec analytics WhatsApp",
                "Création de pages professionnelles Facebook + LinkedIn",
                "Calendrier éditorial 30 jours avec contenus prêts à publier"
            ],
            ideal: "Cabinets visant une expérience client premium et une automatisation maximale de la relation client avec une visibilité renforcée sur les réseaux sociaux.",
            whatsappMessage: "Bonjour, je suis intéressé par le PACK MEDIUM à 1 400 000 FCFA"
        },
        {
            name: "PACK MASTER",
            subtitle: "L'Excellence Opérationnelle Totale",
            price: "3 000 000 FCFA",
            priceUsd: "4 575 €",
            description: "La solution entreprise",
            features: [
                "Tout le Pack Medium +",
                "Plateforme de gestion intégrée Odoo",
                "Système de facturation automatisé",
                "Gestion comptable complète",
                "CRM intégré pour le suivi client",
                "Gestion des stocks (pour cabinets dentaires)",
                "Reporting financier en temps réel",
                "Synchronisation totale entre site web, WhatsApp et back-office",
                "Business Intelligence et tableaux de bord décisionnels",
                "Conformité RGPD et sécurité renforcée",
                "Création de pages professionnelles Facebook + LinkedIn",
                "Calendrier éditorial 30 jours avec contenus prêts à publier"
            ],
            ideal: "Cabinets multi-praticiens ou en forte croissance cherchant à industrialiser leurs processus.",
            whatsappMessage: "Bonjour, je suis intéressé par le PACK MASTER à 3 000 000 FCFA"
        }
    ];

    const faqs = [
        {
            question: "Combien de temps faut-il pour mettre en ligne ma solution ?",
            answer: "Comptez 21 jours maximum du paiement à la mise en ligne complète. Le Pack Light peut être livré en 14 jours. Nous respectons scrupuleusement nos délais car nous comprenons que chaque jour compte pour votre activité."
        },
        {
            question: "Puis-je passer d'un pack à un autre ultérieurement ?",
            answer: "Absolument. Nos solutions sont évolutives. Vous pouvez commencer avec le Pack Light et upgrader vers le Medium ou Master à tout moment. La différence de prix sera simplement à régler et vos données seront entièrement conservées."
        },
        {
            question: "Comment fonctionne l'IA sur WhatsApp ?",
            answer: "L'IA est entraînée spécifiquement sur votre activité, vos services et vos tarifs. Elle répond aux questions courantes, prend des rendez-vous en vérifiant vos disponibilités réelles, et transfère les demandes complexes vers vous avec un résumé de la conversation. Elle apprend continuellement de vos échanges."
        },
        {
            question: "Que se passe-t-il si je ne suis pas satisfait ?",
            answer: "Si après 30 jours vous n'observez aucune amélioration de votre taux de conversion, nous nous engageons à optimiser gratuitement votre solution jusqu'à atteindre les objectifs fixés ensemble. Votre satisfaction est notre priorité."
        },
        {
            question: "Le site sera-t-il responsive (adaptable mobile/tablette) ?",
            answer: "Oui, absolument. Plus de 70% des visites se font depuis mobile. Tous nos sites sont conçus mobile-first et offrent une expérience optimale sur tous les écrans (smartphone, tablette, ordinateur)."
        },
        {
            question: "Qui héberge le site et les données ?",
            answer: "Nous hébergeons votre site sur des serveurs sécurisés avec certificat SSL. Vos données restent votre propriété exclusive. Nous respectons strictement les normes RGPD et pouvons vous fournir un contrat de traitement des données."
        },
        {
            question: "Dois-je avoir des compétences techniques pour gérer mon dashboard ?",
            answer: "Aucune compétence technique n'est requise. Le dashboard est conçu pour être intuitif. Nous vous formons en visioconférence (ou en présentiel selon localisation) et vous fournissons une documentation vidéo. Notre support reste disponible pour toute question."
        },
        {
            question: "Que contient exactement le calendrier éditorial de 30 jours ?",
            answer: "Nous créons 30 publications professionnelles adaptées à votre secteur : conseils, actualités métier, témoignages clients, mise en avant de vos services, contenu éducatif. Chaque post inclut le visuel, le texte et les hashtags. Vous n'avez qu'à programmer ou publier."
        },
        {
            question: "Les notifications par email/WhatsApp sont-elles illimitées ?",
            answer: "Oui, les notifications transactionnelles (confirmations, rappels de RDV) sont illimitées et incluses dans tous les packs. Elles font partie intégrante du système."
        },
        {
            question: "Puis-je personnaliser les messages automatiques ?",
            answer: "Totalement. Vous pouvez modifier tous les templates de messages (emails, WhatsApp) depuis votre dashboard. Nous configurons des messages par défaut efficaces, mais vous gardez le contrôle total."
        },
        {
            question: "Comment les avis clients sont-ils collectés ?",
            answer: "Après chaque RDV, un message automatique est envoyé au client (par email ou WhatsApp selon votre pack) avec un lien vers un formulaire d'avis simple. Les avis sont modérés par vous avant publication sur votre site."
        },
        {
            question: "Que comprend l'audit gratuit ?",
            answer: "Analyse complète de votre présence digitale actuelle : performance de votre site web (si existant), positionnement Google, présence sur les réseaux sociaux, analyse concurrentielle, et recommandations chiffrées d'amélioration. Durée : 45 minutes en visioconférence."
        },
        {
            question: "Y a-t-il des frais cachés ou récurrents ?",
            answer: "Les prix affichés sont tout compris pour la mise en place. Seuls frais récurrents : hébergement et maintenance (à partir de 25 000 FCFA/mois soit 38€/mois) qui incluent les mises à jour, la sécurité, les sauvegardes et le support technique."
        },
        {
            question: "Qu'est-ce qui différencie votre solution d'un site WordPress classique ?",
            answer: "WordPress est un outil générique. Nos solutions sont des écosystèmes métier complets : automatisation des RDV, IA conversationnelle, notifications intelligentes, dashboard de pilotage. Vous n'achetez pas un site, mais un système qui génère du CA."
        },
        {
            question: "Le Pack Master avec Odoo est-il complexe à utiliser ?",
            answer: "Odoo est une solution professionnelle, certes plus complète, mais nous la configurons spécifiquement pour votre métier. Formation approfondie de 2 jours incluse. L'interface est intuitive et vous n'utilisez que les modules pertinents pour votre activité."
        },
        {
            question: "Puis-je voir des exemples de réalisations ?",
            answer: "Absolument. Lors de l'audit gratuit, nous vous présentons des cas concrets de cabinets similaires au vôtre avec les résultats chiffrés obtenus. Nous respectons la confidentialité de nos clients mais pouvons partager des démos anonymisées."
        },
        {
            question: "Proposez-vous un accompagnement après la mise en ligne ?",
            answer: "Oui. Support technique 6j/7 par email/WhatsApp avec réponse sous 4h en moyenne. Nous assurons également une revue de performance mensuelle les 3 premiers mois pour optimiser continuellement vos résultats."
        },
        {
            question: "Comment fonctionne le paiement ? Des facilités sont-elles possibles ?",
            answer: "Paiement en 2 fois : 50% à la signature, 50% à la livraison. Pour le Pack Master, possibilité de paiement en 3 fois sans frais. Nous acceptons virement bancaire et mobile money."
        }
    ];

    const sendWhatsApp = (message: string) => {
        const phoneNumber = "2250160125373";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen transition-colors duration-300 ${
                isDark ? 'bg-gray-900' : 'bg-white'
            }`}>
                {/* Global Background Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none fixed">
                    <div className={`relative h-full w-full ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className={`absolute h-full w-full ${isDark ? 'bg-[radial-gradient(#374151_1px,transparent_1px)]' : 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]'} [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]`}></div>
                    </div>
                </div>

                <div className="relative z-10 ">
                
                    {/* Hero Section */}
                    <div className="min-h-screen pt-32 pb-20 px-4 relative flex items-center justify-center">
                        <div className="max-w-6xl mx-auto text-center">
                            <div className="inline-block mb-6 space-x-2">
                                <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                                    isDark 
                                        ? 'bg-[#19a89e]/20 text-[#19a89e]' 
                                        : 'bg-[#19a89e]/10 text-[#19a89e]'
                                }`}>
                                    Cabinet Dentaire
                                </span>
                                <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                                    isDark 
                                        ? 'bg-[#19a89e]/20 text-[#19a89e]' 
                                        : 'bg-[#19a89e]/10 text-[#19a89e]'
                                }`}>
                                    Cabinet Juridique
                                </span>
                                <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                                    isDark 
                                        ? 'bg-[#19a89e]/20 text-[#19a89e]' 
                                        : 'bg-[#19a89e]/10 text-[#19a89e]'
                                }`}>
                                    Cabinet Comptable
                                </span>
                            </div>
                            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
                                isDark ? 'text-white' : 'text-[#014a74]'
                            }`}>
                                Transformez vos Visiteurs en Clients Fidèles
                            </h1>
                            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                Un système web qui travaille pour vous 24/7. <br/>Nous aidons les cabinets dentaires, comptables et juridiques à automatiser leur acquisition client grâce à des solutions web intelligentes.
                            </p>
                            {/* Video Section */}
                            {/* <div className="py-12 max-w-5xl mx-auto">
                            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl">
                                <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/00IksFTSGEs?si=TxG0tFYdndvuSwWz&amp;start=5"
                                title="Présentation"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            </div> */}
                        </div>
                    </div>
                    {/* Problem Statement */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Vous offrez d'excellent services mais
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Cabinets Juridiques",
                                        issues: [
                                            "Visiteurs abandonnent sans prendre contact",
                                            "Perte de consultations faute de disponibilité",
                                            "Gestion manuelle chronophage des RDV",
                                            "Aucune visibilité sur le taux de conversion"
                                        ]
                                    },
                                    {
                                        title: "Cabinets Dentaires",
                                        issues: [
                                            "Patients oublient leurs RDV",
                                            "Heures passées au téléphone pour confirmer",
                                            "Avis clients ne remontent pas naturellement",
                                            "Impossible de suivre l'historique patient"
                                        ]
                                    },
                                    {
                                        title: "Cabinets Comptables",
                                        issues: [
                                            "Site n'inspire pas confiance et ne convertit pas",
                                            "Prospects hésitent à échanger facilement",
                                            "Manque d'outils pour qualifier les leads",
                                            "Administration empêche le cœur de métier"
                                        ]
                                    }
                                ].map((cabinet, idx) => (
                                    <div key={idx} className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                                        <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                            {cabinet.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {cabinet.issues.map((issue, iIdx) => (
                                                <li key={iIdx} className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <span className="text-red-500 mr-3 font-bold">✗</span>
                                                    <span>{issue}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Solution Highlight */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gradient-to-r from-[#19a89e]/10 to-[#19a89e]/5' : 'bg-gradient-to-r from-[#19a89e]/5 to-[#19a89e]/5'}`}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Notre Promesse
                            </h2>
                            <p className={`text-2xl font-semibold ${isDark ? 'text-[#19a89e]' : 'text-[#19a89e]'}`}>
                                +40% de taux de conversion et -70% de RDV manqués dès les 3 premiers mois.
                            </p>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Nos Offres
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {packs.map((pack, idx) => (
                                    <div key={idx} className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                                        isDark ? 'bg-gray-800' : 'bg-white border-2 border-gray-200'
                                    }`}>
                                        {/* Header */}
                                        <div className="bg-gradient-to-r from-[#19a89e] to-[#148278] p-8 text-white">
                                            <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
                                            <p className="text-sm opacity-90 mb-4">{pack.subtitle}</p>
                                            <div className="mb-2">
                                                <div className="text-3xl font-bold">{pack.priceUsd}</div>
                                                <div className="text-sm opacity-75">{pack.price}</div>
                                            </div>
                                            <p className="text-sm opacity-90">{pack.description}</p>
                                        </div>

                                        {/* Features */}
                                        <div className="p-8">
                                            <ul className="space-y-3 mb-8">
                                                {pack.features.map((feature, fIdx) => (
                                                    <li key={fIdx} className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        <Check className="w-5 h-5 text-[#19a89e] mr-3 flex-shrink-0 mt-0.5" />
                                                        <span className="text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Ideal For */}
                                            <div className={`p-4 rounded-lg mb-6 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <span className="font-semibold">Idéal pour : </span>{pack.ideal}
                                                </p>
                                            </div>

                                            {/* CTA Button */}
                                            <button
                                                onClick={() => sendWhatsApp(pack.whatsappMessage)}
                                                className="w-full bg-[#19a89e] text-white py-3 rounded-lg font-semibold hover:bg-[#148278] transition-colors flex items-center justify-center"
                                            >
                                                <MessageCircle className="w-5 h-5 mr-2" />
                                                Nous Contacter
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Before/After */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                La Transformation
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className={`p-8 rounded-xl ${isDark ? 'bg-red-900/20 border border-red-700/50' : 'bg-red-50 border border-red-200'}`}>
                                    <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-red-400' : 'text-red-600'}`}>AVANT</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Site web vitrine statique qui ne convertit pas",
                                            "3 à 5 heures/semaine perdues en gestion administrative",
                                            "30% de RDV manqués = pertes financières directes",
                                            "Aucune visibilité sur la performance de votre site",
                                            "Communication client chronophage et inefficace",
                                            "Image professionnelle peu convaincante en ligne"
                                        ].map((item, idx) => (
                                            <li key={idx} className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                <span className="text-red-500 mr-3 font-bold">✗</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`p-8 rounded-xl ${isDark ? 'bg-green-900/20 border border-green-700/50' : 'bg-green-50 border border-green-200'}`}>
                                    <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-green-400' : 'text-green-600'}`}>APRÈS</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Machine à convertir 24/7 : +40% de taux de conversion",
                                            "Temps libéré : 4h/semaine récupérées pour votre cœur de métier",
                                            "RDV manqués divisés par 3 grâce aux rappels automatiques",
                                            "Crédibilité boostée : avis clients affichés automatiquement",
                                            "Pilotage en temps réel : décisions basées sur des données concrètes",
                                            "Expérience client premium : réponses instantanées 24/7"
                                        ].map((item, idx) => (
                                            <li key={idx} className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                <Check className="w-5 h-5 text-green-500 mr-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROI Section */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                En Chiffres Concrets
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        type: "Cabinet dentaire (3 praticiens)",
                                        impact: "+25 RDV/mois supplémentaires = +1 875 000 FCFA/mois",
                                        roi: "ROI du Pack Medium : rentabilisé en 1 mois"
                                    },
                                    {
                                        type: "Cabinet comptable",
                                        impact: "+15 nouveaux clients/an = +4 500 000 FCFA/an",
                                        roi: "ROI du Pack Light : rentabilisé en 1 mois"
                                    },
                                    {
                                        type: "Cabinet juridique",
                                        impact: "+20 consultations/mois = +3 000 000 FCFA/mois",
                                        roi: "ROI du Pack Master : rentabilisé en 1 mois"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`p-8 rounded-xl text-center ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                        <p className={`font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {item.type}
                                        </p>
                                        <p className="text-2xl font-bold text-[#19a89e] mb-3">
                                            {item.impact}
                                        </p>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {item.roi}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Guarantee */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Garantie Satisfaction
                            </h2>
                            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                Nous sommes tellement confiants que nous vous garantissons :
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    "Site en ligne sous 21 jours maximum",
                                    "Formation complète à l'utilisation de votre dashboard",
                                    "Support technique 6 jours/7",
                                    "+30% de conversion ou nous optimisons gratuitement jusqu'à atteinte de l'objectif"
                                ].map((guarantee, idx) => (
                                    <div key={idx} className={`p-4 rounded-lg flex items-center ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                                        <Check className="w-6 h-6 text-[#19a89e] mr-3 flex-shrink-0" />
                                        <span className={isDark ? 'text-gray-200' : 'text-gray-800'}>{guarantee}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Questions Fréquentes
                            </h2>
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className={`rounded-lg border transition-all duration-300 ${
                                        isDark
                                            ? 'border-gray-700 hover:border-[#19a89e]'
                                            : 'border-gray-200 hover:border-[#19a89e]'
                                    }`}>
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                            className={`w-full p-6 flex items-center justify-between ${
                                                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                                            } transition-colors`}
                                        >
                                            <span className={`font-semibold text-left ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                                {faq.question}
                                            </span>
                                            <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${
                                                expandedFaq === idx ? 'rotate-180' : ''
                                            } ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                                        </button>
                                        {expandedFaq === idx && (
                                            <div className={`px-6 pb-6 border-t ${isDark ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-600'}`}>
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Final */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Ne Laissez Plus Vos Concurrents Capter VOS Clients
                            </h2>
                            <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                Chaque jour sans cette solution = des milliers de FCFA perdus.
                            </p>
                            <button
                                onClick={() => sendWhatsApp("Bonjour, j'aimerais en savoir plus sur vos solutions pour mon cabinet")}
                                className="bg-[#19a89e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#148278] transition-colors inline-flex items-center"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Réserver Mon Audit Gratuit
                            </button>
                            <p className={`text-sm mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Places limitées : 5 audits gratuits par mois
                            </p>
                        </div>
                    </div>
                </div>                
                

            </div>

            <Footer isDark={isDark} />
            <ScrollToTop isDark={isDark} />
        </div>
    );
}

export default Cabinet;
