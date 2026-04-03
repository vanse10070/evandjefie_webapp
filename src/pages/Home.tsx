import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Github, Linkedin, Mail, ArrowRight, Briefcase, Code, Layout, Palette, Zap, Globe, Cpu } from 'lucide-react';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import WorkProcess from '../components/WorkProcess';
import { useState } from 'react';

const Home = () => {
    const { isDark, toggleTheme } = useTheme();
    const [journeyType, setJourneyType] = useState<'work' | 'education'>('work');

    const expertise = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Landing Page & Site Vitrine",
            description: "Création de sites performants pour entrepreneurs et entreprises pour booster votre présence en ligne."
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "App Web & Mobile sur mesure",
            description: "Développement d'applications complexes et personnalisées répondant à vos besoins métiers spécifiques."
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Identité Visuelle & Print",
            description: "Conception de logos, affiches, supports print et identités visuelles fortes pour votre marque."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Automatisation & Bots",
            description: "Optimisation de vos processus avec des outils comme n8n et des bots personnalisés (OpenClaw)."
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const experienceData = [
        {
            title: "Front End Lead",
            company: "LeyCom · CDD",
            period: "Août 2025 - Janv. 2026 · 6 mois",
            location: "Abidjan, Côte d’Ivoire · Hybride",
            description: [
                "Développement Interface Utilisateur (Client) : Conception d’une application web complexe intégrant des parcours d’apprentissage interactifs, des systèmes d’évaluation dynamiques et un tableau de bord de suivi des performances.",
                "Qualité & Fiabilité : Mise en place d’une stratégie de tests complète (unitaires, intégration, E2E) ainsi que de tests non-fonctionnels (accessibilité, performance via Lighthouse).",
                "Infrastructure & DevOps : Configuration et déploiement sur VPS, environnement automatisé avec Dokploy et pipelines CI/CD.",
                "Monitoring & Analytics : Intégration de Sentry, Grafana, Google Analytics 4 pour le suivi des erreurs et performances."
            ],
            skills: ["React.js", "TypeScript", "Tailwind CSS", "Sentry", "CI/CD", "Dokploy"]
        },
        {
            title: "Full-stack Developer",
            company: "Freelance",
            period: "Nov. 2021 - Aujourd’hui · 4 ans 6 mois",
            location: "À distance",
            description: [
                "Conception et développement d’applications web/mobile (Landing page, SaaS, e-commerce).",
                "Conception d'identité visuelle, d'affiches, logos et calendrier éditorial.",
                "Accompagnement produit (définition MVP, tests utilisateurs, amélioration UX)."
            ],
            skills: ["Flutter", "React.js", "Node.js", "Laravel", "UI/UX Design"]
        },
        {
            title: "Développeur web front-end",
            company: "EVEN MEDIA INTERACTIVE",
            period: "Mars 2023 - Sept. 2023 · 7 mois",
            location: "Abidjan, Côte d’Ivoire · Sur site",
            description: [
                "Développement d'interfaces web responsives et performantes.",
                "Collaboration avec l'équipe design pour l'intégration de maquettes.",
                "Optimisation du SEO et des performances front-end."
            ],
            skills: ["React.js", "JavaScript", "CSS3", "HTML5"]
        },
        {
            title: "Ingénieur DevOps",
            company: "INSTITUT CERCO INTERNATIONAL · Temps plein",
            period: "Janv. 2021 - Août 2022 · 1 an 8 mois",
            location: "Abidjan, Côte d’Ivoire · Sur site",
            description: [
                "Déploiement automatisé d’un serveur de monitoring AWS EC2 (RAM, DISK, CPU).",
                "Création de scripts Bash/Python pour l’automatisation des tâches récurrentes.",
                "Gestion de l'infrastructure serveur et maintenance préventive."
            ],
            skills: ["AWS", "Bash", "Python", "Monitoring", "Docker"]
        }
    ];

    const educationData = [
        {
            title: "Master en informatique, Ingénierie informatique",
            company: "Institut International Polytechnique des Élites d'Abidjan",
            period: "Janv. 2025 – 2027",
            location: "Abidjan, Côte d’Ivoire",
            description: [
                "Spécialisation en architecture logicielle et ingénierie de données.",
                "Conception de systèmes complexes et gestion de projets innovants."
            ]
        },
        {
            title: "Licence professionnelle, Computer Science",
            company: "INSTITUT CERCO INTERNATIONAL",
            period: "Nov. 2020 – Juin 2021",
            location: "Abidjan, Côte d’Ivoire",
            description: [
                "Approfondissement des concepts d'algorithmique et de développement logiciel.",
                "Projets pratiques sur le développement web et mobile."
            ]
        },
        {
            title: "Brevet de technicien supérieur (BTS), Programmation informatique",
            company: "HETEC Abidjan",
            period: "2019 – 2020",
            location: "Abidjan, Côte d’Ivoire",
            description: [
                "Bases de la programmation, bases de données et maintenance informatique.",
                "Développement d'applications de gestion élémentaires."
            ]
        }
    ];

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen transition-colors duration-300`}>
                {/* Global Background Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none fixed">
                    <div className={`relative h-full w-full ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className={`absolute h-full w-full ${isDark ? 'bg-[radial-gradient(#374151_1px,transparent_1px)]' : 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]'} [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]`}></div>
                    </div>
                </div>

                <div className="relative z-10">
                    {/* Hero Section */}
                    <div className="pt-32 pb-20 px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className={`w-40 h-40 mx-auto rounded-full p-1 mb-8 shadow-xl ${isDark ? 'bg-gradient-to-br from-[#19a89e] to-[#014a74]' : 'bg-white'}`}>
                                <img
                                    src="/src/assets/evandjefie.jpg"
                                    alt="Profile"
                                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
                                />
                            </div>
                            <h1 className={`text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Evan DJEFIE
                            </h1>
                            <p className={`text-2xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                Fullstack Developer | DevOps | UI/UX Designer
                            </p>
                            <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Je crée des solutions digitales innovantes qui transforment les idées en produits performants. Spécialisé dans le développement web moderne et l'automatisation.
                            </p>

                            {/* Social Links */}
                            <div className="flex justify-center gap-4 mb-12">
                                <a href="https://github.com/evandjefie" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full transition-all transform hover:scale-110 ${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-[#014a74] hover:bg-gray-200'}`}>
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/evan-djefie" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full transition-all transform hover:scale-110 ${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-[#0077b5] hover:bg-gray-200'}`}>
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:evanform225@gmail.com" className={`p-4 rounded-full transition-all transform hover:scale-110 ${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-red-500 hover:bg-gray-200'}`}>
                                    <Mail size={24} />
                                </a>
                            </div>

                            <a href='#book-meeting' className="bg-[#19a89e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#148278] transition-colors inline-flex items-center">
                                Démarrer un Projet
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>

                    {/* Expertise Section */}
                    <div id="expertise" className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Mes Services
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {expertise.map((exp, idx) => (
                                    <div key={idx} className={`p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'
                                        }`}>
                                        <div className="text-[#19a89e] mb-4">{exp.icon}</div>
                                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                            {exp.title}
                                        </h3>
                                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Section */}
                    <div id="portfolio" className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="max-w-6xl mx-auto">
                            {/* <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                // Mes Réalisations
                            </h2> */}
                            <Portfolio isDark={isDark} />
                        </div>
                    </div>


                    {/* Mon Parcours */}
                    <div id="parcours" className="py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex justify-center mb-12">
                                <div className={`inline-flex p-1 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                    <button
                                        onClick={() => setJourneyType('work')}
                                        className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                                            journeyType === 'work'
                                            ? 'bg-[#19a89e] text-white shadow-lg'
                                            : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        Expérience Pro
                                    </button>
                                    <button
                                        onClick={() => setJourneyType('education')}
                                        className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                                            journeyType === 'education'
                                            ? 'bg-[#19a89e] text-white shadow-lg'
                                            : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        Formation
                                    </button>
                                </div>
                            </div>

                            {journeyType === 'work' ? (
                                <Timeline 
                                    isDark={isDark} 
                                    title="Mon Parcours Pro" 
                                    subtitle="Une aventure passionnante jalonnée de défis techniques et de réalisations concrètes."
                                    items={experienceData}
                                    type="work"
                                />
                            ) : (
                                <Timeline 
                                    isDark={isDark} 
                                    title="Parcours Académique" 
                                    subtitle="Ma formation et mes diplômes qui ont forgé mes compétences théoriques."
                                    items={educationData}
                                    type="education"
                                />
                            )}
                        </div>
                    </div>

                    {/* Processus de Travail */}
                    <div id="processus">
                        <WorkProcess isDark={isDark} />
                    </div>

                    {/* Booking Section */}
                    <div id="book-meeting" className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                    Démarrer un Projet
                                </h2>
                                <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Réservez un créneau de 30 minutes pour discuter de votre projet et le structurer ensemble.
                                </p>
                            </div>
                            
                            <div className={`w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl border ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
                                <iframe 
                                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssM2lZqLpX7S_Qn6f6V_hZ5P6J3B6_G1T-Z7hZ_6U?gv=true" 
                                    style={{ border: 0 }} 
                                    width="100%" 
                                    height="100%" 
                                    frameBorder="0"
                                    title="Google Calendar Booking"
                                />
                            </div>
                        </div>
                    </div>


                    {/* CTA Section */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Prêt à Collaborer ?
                            </h2>
                            <p className={`text-xl mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Contactez-moi pour discuter de votre prochain projet
                            </p>
                            <a href="mailto:evanform225@gmail.com" className="bg-[#19a89e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#148278] transition-colors inline-flex items-center">
                                Me Contacter
                                <Mail className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>

                <ScrollToTop isDark={isDark} />
            </div>

            <Footer isDark={isDark} />
        </div>
    );
};

export default Home;
