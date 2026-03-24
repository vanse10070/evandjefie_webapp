import React, { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Github, Linkedin, Mail, ArrowRight, Briefcase, Code, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

const Home = () => {
    const { isDark, toggleTheme } = useTheme();

    const expertise = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Fullstack Development",
            description: "Développement web complet avec React/NextJs/TypeScript, Flutter et Laravel"
        },
        {
            icon: <Layout className="w-6 h-6" />,
            title: "UI/UX Design",
            description: "Interfaces modernes et accessibles en utilisant Tailwind CSS et design systems"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "DevOps & Deployment",
            description: "Déploiement, CI/CD et gestion d'infrastructure pour vos applications"
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

                            <a href='#services-offers' className="bg-[#19a89e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#148278] transition-colors inline-flex items-center">

                                Démarrer un Projet

                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>

                    {/* Expertise Section */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Mon Expertise
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
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
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="max-w-6xl mx-auto">
                            {/* <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                // Mes Réalisations
                            </h2> */}
                            <Portfolio isDark={isDark} />
                        </div>
                    </div>


                    {/* Mon Parcours */}


                    {/* Services / Offers Preview */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 id="services-offers" className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Mes Offres
                            </h2>
                            <div className="grid md:grid-cols-4 gap-6">
                                <Link to="/edjverse" className="group">
                                    <div className={`p-6 rounded-xl border-2 h-full transition-all duration-300 transform hover:-translate-y-1 ${isDark
                                        ? 'bg-gray-800 border-[#19a89e]/50 hover:border-[#19a89e]'
                                        : 'bg-white border-gray-200 hover:border-[#19a89e]'
                                        }`}>
                                        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                            Edjverse
                                        </h3>
                                        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Agence digitale de confiance
                                        </p>
                                        <div className="flex items-center text-[#19a89e] text-sm font-semibold">
                                            Découvrir <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/vizup" className="group">
                                    <div className={`p-6 rounded-xl border-2 h-full transition-all duration-300 transform hover:-translate-y-1 ${isDark
                                        ? 'bg-gray-800 border-blue-500/50 hover:border-blue-500'
                                        : 'bg-white border-gray-200 hover:border-blue-500'
                                        }`}>
                                        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                            ViZup
                                        </h3>
                                        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            L'Accélérateur MVP
                                        </p>
                                        <div className="flex items-center text-blue-500 text-sm font-semibold">
                                            Découvrir <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/diam" className="group">
                                    <div className={`p-6 rounded-xl border-2 h-full transition-all duration-300 transform hover:-translate-y-1 ${isDark
                                        ? 'bg-gray-800 border-purple-500/50 hover:border-purple-500'
                                        : 'bg-white border-gray-200 hover:border-purple-500'
                                        }`}>
                                        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                            DIAM
                                        </h3>
                                        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Digital In A Month
                                        </p>
                                        <div className="flex items-center text-purple-500 text-sm font-semibold">
                                            Découvrir <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/cabinet" className="group">
                                    <div className={`p-6 rounded-xl border-2 h-full transition-all duration-300 transform hover:-translate-y-1 ${isDark
                                        ? 'bg-gray-800 border-green-500/50 hover:border-green-500'
                                        : 'bg-white border-gray-200 hover:border-green-500'
                                        }`}>
                                        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                            Cabinet
                                        </h3>
                                        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Solutions pour Cabinets
                                        </p>
                                        <div className="flex items-center text-green-500 text-sm font-semibold">
                                            Découvrir <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>
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
