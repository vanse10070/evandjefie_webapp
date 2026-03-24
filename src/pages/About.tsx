import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { 
  Code, 
  Palette, 
  Server, 
  Award,
  Globe,
  BarChart3,
  ArrowRight,
  Link as LinkIcon,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../config/seo';

function About() {
    const { isDark, toggleTheme } = useTheme();

    const skills = [
        {
            icon: Code,
            title: "Fullstack Development",
            description: "Développeur web complet spécialisé en React, TypeScript, Laravel et Flutter"
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Création d'interfaces modernes et accessibles avec Tailwind CSS et design systems"
        },
        {
            icon: Server,
            title: "DevOps & Infrastructure",
            description: "Déploiement, CI/CD et gestion d'infrastructure pour applications scalables"
        },
        {
            icon: BarChart3,
            title: "Problem Solving",
            description: "Résolution de problèmes complexes avec approche analytique et créative"
        }
    ];

    const techStack = [
        {
            category: "Frontend",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "GSAP"]
        },
        {
            category: "Backend",
            technologies: ["Laravel", "Node.js", "PHP", "Python", "REST APIs", "GraphQL"]
        },
        {
            category: "Mobile",
            technologies: ["Flutter", "React Native", "Firebase", "SQLite"]
        },
        {
            category: "DevOps & Tools",
            technologies: ["Docker", "Git", "CI/CD", "AWS", "Vercel", "Linux"]
        }
    ];

    const experience = [
        {
            year: "2020 - Présent",
            title: "Développeur Fullstack & Designer",
            company: "Freelance / Agence Edjverse",
            description: "Création de solutions digitales innovantes pour PME et startups"
        },
        {
            year: "2019 - 2020",
            title: "Développeur Web",
            company: "Agences Partenaires",
            description: "Développement de sites web et applications e-commerce"
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <SEO 
                title={seoConfig.about.title}
                description={seoConfig.about.description}
                keywords={seoConfig.about.keywords}
                canonicalUrl="https://evan-djefie.com/about"
            />
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            
            <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                {/* Global Background Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="relative h-full w-full bg-white dark:bg-gray-900">
                        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    </div>
                </div>

                <div className="relative z-10">
                    {/* Hero Section */}
                    <div className="pt-32 pb-20 px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-8">
                                <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    À Propos d'Evan Djefie
                                </h1>
                                <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Développeur fullstack passionné créant des solutions digitales innovantes depuis 2020. 
                                    Combinant expertise technique et créativité pour transformer vos idées en produits exceptionnels.
                                </p>
                            </div>

                            {/* Meta Description - SEO */}
                            <div className={`p-4 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Portfolio personnel de Evan Djefie - Développeur Fullstack, Designer et Expert DevOps. 
                                    Découvrez mes compétences en React, TypeScript, Laravel et plus encore.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Compétences Section */}
                    <div className={`py-20 px-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Mes Compétences
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {skills.map((skill, index) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <div
                                            key={index}
                                            className={`p-6 rounded-lg border transition-all hover:border-[#19a89e] hover:shadow-lg ${
                                                isDark
                                                    ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'
                                                    : 'border-gray-200 bg-gray-50 hover:bg-white'
                                            }`}
                                        >
                                            <div className="text-[#19a89e] mb-4">
                                                <IconComponent size={32} />
                                            </div>
                                            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {skill.title}
                                            </h3>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {skill.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Stack Technologique */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Stack Technologique
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {techStack.map((stack, index) => (
                                    <div key={index}>
                                        <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            <div className="w-2 h-2 rounded-full bg-[#19a89e]"></div>
                                            {stack.category}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {stack.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-3 py-1 rounded-full text-sm ${
                                                        isDark
                                                            ? 'bg-[#19a89e]/20 text-[#19a89e]'
                                                            : 'bg-[#19a89e]/10 text-[#19a89e]'
                                                    }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Expérience */}
                    <div className={`py-20 px-4`}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Expérience
                            </h2>

                            <div className="space-y-8">
                                {experience.map((exp, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-lg border ${
                                            isDark
                                                ? 'border-gray-700 bg-gray-800/50'
                                                : 'border-gray-200 bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                    {exp.title}
                                                </h3>
                                                <p className={`text-[#19a89e] font-medium`}>{exp.company}</p>
                                            </div>
                                            <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                                                isDark
                                                    ? 'bg-[#19a89e]/20 text-[#19a89e]'
                                                    : 'bg-[#19a89e]/10 text-[#19a89e]'
                                            }`}>
                                                {exp.year}
                                            </span>
                                        </div>
                                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section - Services & Offres */}
                    <div className={`py-20 px-4 border-t ${isDark ? 'border-gray-800 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Services Professionnels
                            </h2>
                            <p className={`text-center text-lg mb-12 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                Découvrez les services proposés par Edjverse, mon agence digitale
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                {/* Edjverse Services */}
                                <Link to="/edjverse">
                                    <div className={`p-8 rounded-lg border transition-all hover:border-[#19a89e] hover:shadow-lg cursor-pointer h-full ${
                                        isDark
                                            ? 'border-gray-700 bg-gray-900 hover:bg-gray-800'
                                            : 'border-gray-200 bg-white hover:bg-gray-50'
                                    }`}>
                                        <div className="inline-block mb-4 p-3 rounded-lg bg-[#19a89e]/20">
                                            <Globe className="text-[#19a89e]" size={32} />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            Edjverse
                                        </h3>
                                        <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                            Agence digitale proposant création de marque, transformation digitale et solutions high-tech
                                        </p>
                                        <div className="flex items-center text-[#19a89e] font-semibold">
                                            Découvrir <ArrowRight size={20} className="ml-2" />
                                        </div>
                                    </div>
                                </Link>

                                {/* Offres */}
                                <Link to="/vizup">
                                    <div className={`p-8 rounded-lg border transition-all hover:border-[#19a89e] hover:shadow-lg cursor-pointer h-full ${
                                        isDark
                                            ? 'border-gray-700 bg-gray-900 hover:bg-gray-800'
                                            : 'border-gray-200 bg-white hover:bg-gray-50'
                                    }`}>
                                        <div className="inline-block mb-4 p-3 rounded-lg bg-blue-500/20">
                                            <Zap className="text-blue-500" size={32} />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            ViZup
                                        </h3>
                                        <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                            Accélérateur MVP - Passer de l'idée au produit en 30 jours
                                        </p>
                                        <div className="flex items-center text-blue-500 font-semibold">
                                            Découvrir <ArrowRight size={20} className="ml-2" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/cabinet">
                                    <div className={`p-8 rounded-lg border transition-all hover:border-[#19a89e] hover:shadow-lg cursor-pointer h-full ${
                                        isDark
                                            ? 'border-gray-700 bg-gray-900 hover:bg-gray-800'
                                            : 'border-gray-200 bg-white hover:bg-gray-50'
                                    }`}>
                                        <div className="inline-block mb-4 p-3 rounded-lg bg-green-500/20">
                                            <Award className="text-green-500" size={32} />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            AssistCabinet
                                        </h3>
                                        <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                            Solutions digitales pour cabinets professionnels
                                        </p>
                                        <div className="flex items-center text-green-500 font-semibold">
                                            Découvrir <ArrowRight size={20} className="ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="text-center">
                                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                    Consultez aussi DIAM pour des solutions additionnelles
                                </p>
                                <Link
                                    to="/diam"
                                    className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
                                        isDark
                                            ? 'bg-[#19a89e]/20 text-[#19a89e] hover:bg-[#19a89e]/30'
                                            : 'bg-[#19a89e]/10 text-[#19a89e] hover:bg-[#19a89e]/20'
                                    }`}
                                >
                                    Voir DIAM <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* FAQ - Related Links for SEO */}
                    <div className={`py-20 px-4`}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Liens Utiles - Services & Offres
                            </h2>

                            <div className="space-y-4">
                                <div className={`p-6 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
                                    <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        <LinkIcon size={20} className="text-[#19a89e]" />
                                        Services Edjverse
                                    </h3>
                                    <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                        Besoin de services professionnels en création de marque, transformation digitale ou développement web?
                                    </p>
                                    <Link to="/edjverse" className="text-[#19a89e] font-semibold hover:underline">
                                        Découvrez Edjverse →
                                    </Link>
                                </div>

                                <div className={`p-6 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
                                    <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        <LinkIcon size={20} className="text-blue-500" />
                                        Offre ViZup
                                    </h3>
                                    <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                        Passer rapidement de l'idée au MVP en 30 jours avec notre accompagnement dédié.
                                    </p>
                                    <Link to="/vizup" className="text-blue-500 font-semibold hover:underline">
                                        Accélérez votre projet →
                                    </Link>
                                </div>

                                <div className={`p-6 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
                                    <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        <LinkIcon size={20} className="text-green-500" />
                                        Offre AssistCabinet
                                    </h3>
                                    <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                        Solutions digitales adaptées aux cabinets dentaires, juridiques et comptables.
                                    </p>
                                    <Link to="/cabinet" className="text-green-500 font-semibold hover:underline">
                                        Pour votre cabinet →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollToTop isDark={isDark} />
            <Footer isDark={isDark} />
        </div>
    );
}

export default About;
