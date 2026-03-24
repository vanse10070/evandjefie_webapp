import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { ArrowRight, Zap, Code, BarChart3, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

function Edjverse() {
    const { isDark, toggleTheme } = useTheme();

    const services = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Création de Marque & Visibilité",
            description: "Identités visuelles distinctes et stratégies de marque qui captivent votre audience",
            features: ["Identité visuelle", "Stratégie de marque", "Direction artistique"]
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Transformation Digitale",
            description: "Optimisation des processus et parcours clients pour une efficacité maximale",
            features: ["Stratégie digitale", "Marketing automation", "Parcours client"]
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "Solutions High-Tech",
            description: "Outils technologiques innovants pour une croissance durable",
            features: ["Développement web", "Applications métier", "Intégrations API"]
        }
    ];

    const sectors = [
        "Cabinets Dentaires",
        "Cabinets Juridiques",
        "Cabinets Comptables",
        "Entreprises BTP",
        "Restaurants & Hôtels",
        "Services aux Entreprises"
    ];

    const offers = [
        {
            name: "AssistCabinet",
            description: "Solutions pour Cabinets",
            path: "/cabinet",
            color: "from-green-500 to-emerald-500"
        },
        {
            name: "Passer de l'idée au MVP en 30 jours",
            description: "L'Accélérateur MVP",
            path: "/vizup",
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "Diam",
            description: "Solution Diam",
            path: "/diam",
            color: "from-purple-500 to-pink-500"
        },
    ];

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
                            <div className="inline-block mb-6">
                                <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                                    isDark 
                                        ? 'bg-[#19a89e]/20 text-[#19a89e]' 
                                        : 'bg-[#19a89e]/10 text-[#19a89e]'
                                }`}>
                                    +4 Ans d'Expertise
                                </span>
                            </div>
                            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
                                isDark ? 'text-white' : 'text-[#014a74]'
                            }`}>
                                Propulsez Votre Marque Vers le <span className="text-[#19a89e]">Succès Digital</span>
                            </h1>
                            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                De la création de marque à la transformation digitale, nous développons des stratégies innovantes qui élèvent votre entreprise et génèrent une croissance durable.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-[#19a89e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#148278] transition-colors">
                                    Démarrer un Projet
                                </button>
                                <button className={`px-8 py-3 rounded-lg font-semibold border-2 ${
                                    isDark
                                        ? 'border-gray-700 text-white hover:bg-gray-800'
                                        : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                                }`}>
                                    En Savoir Plus
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Our Services Section */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                    Nos Services
                                </h2>
                                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Ce Que Nous Faisons
                                </p>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                {services.map((service, index) => (
                                    <div 
                                        key={index}
                                        className={`p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 ${
                                            isDark
                                                ? 'bg-gray-800 hover:bg-gray-700'
                                                : 'bg-white hover:shadow-xl'
                                        }`}
                                    >
                                        <div className="text-[#19a89e] mb-4">{service.icon}</div>
                                        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <ArrowRight className="w-4 h-4 text-[#19a89e] mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Our Sectors */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                    Nos Secteurs
                                </h2>
                                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Diversité et Expertise
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {sectors.map((sector, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                                            isDark
                                                ? 'bg-gray-800 text-white hover:bg-[#19a89e]/20'
                                                : 'bg-gray-50 text-gray-900 hover:bg-[#19a89e]/10'
                                        }`}
                                    >
                                        <p className="font-semibold">{sector}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Our Approach */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                    Notre Approche
                                </h2>
                                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Transformer les Idées en Chefs-d'œuvre
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Création d'Identité de Marque",
                                        description: "Nous forgeons une image de marque distinctive et mémorable qui vous différencie sur le marché."
                                    },
                                    {
                                        title: "Visibilité Digitale Optimale",
                                        description: "Nous déployons des stratégies de contenu, de réseaux sociaux et de publicité ciblées pour maximiser votre portée en ligne."
                                    },
                                    {
                                        title: "Structuration du Parcours Client",
                                        description: "Nous cartographions et optimisons chaque point de contact pour une expérience client fluide et engageante."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {item.title}
                                        </h3>
                                        <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Offers Preview */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                    Nos Offres Spécialisées
                                </h2>
                                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Découvrez nos solutions sur mesure pour votre secteur
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {offers.map((offer, index) => (
                                    <Link key={index} to={offer.path}>
                                        <div className={`h-full p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br ${offer.color} text-white`}>
                                            <h3 className="text-2xl font-bold mb-2">{offer.name}</h3>
                                            <p className="mb-6 opacity-90">{offer.description}</p>
                                            <div className="flex items-center">
                                                <span>Découvrir</span>
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Prêt à Transformer Votre Présence Digitale ?
                            </h2>
                            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                Contactez-nous pour discuter de vos objectifs et découvrir comment nous pouvons vous aider à les atteindre
                            </p>
                            <button className="bg-[#19a89e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#148278] transition-colors inline-flex items-center">
                                Parlons de Votre Projet
                                <MessageSquare className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>                
            </div>

            <Footer isDark={isDark} />
            <ScrollToTop isDark={isDark} />
        </div>
    );
}

export default Edjverse;
