import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { 
  ExternalLink, 
  ArrowRight,
  Palette,
  Code,
  Globe,
  Award,
  Zap,
  LinkIcon,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../config/seo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function PortfolioPage() {
    const { isDark, toggleTheme } = useTheme();
    const projectsRef = useRef<HTMLDivElement>(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const projects = [
        {
            title: "IALONNI",
            category: "web",
            type: "dev",
            icon: Globe,
            description: "Plateforme e-commerce innovante avec système de paiement intégré",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API"],
            link: "#",
            image: "bg-gradient-to-br from-blue-500 to-cyan-500"
        },
        {
            title: "Système de Gestion Comptable",
            category: "app",
            type: "dev",
            icon: Code,
            description: "Application métier pour cabinets comptables avec reporting avancé",
            technologies: ["Laravel", "React", "MySQL", "PDF Export"],
            link: "#",
            image: "bg-gradient-to-br from-green-500 to-emerald-500"
        },
        {
            title: "Identité Visuelle Marque Tech",
            category: "design",
            type: "design",
            icon: Palette,
            description: "Création complète d'identité visuelle pour startup tech",
            technologies: ["Figma", "Branding", "Design System"],
            link: "#",
            image: "bg-gradient-to-br from-purple-500 to-pink-500"
        },
        {
            title: "Application Mobile Fitness",
            category: "app",
            type: "dev",
            icon: Code,
            description: "Application Flutter pour suivi d'activité physique et coaching",
            technologies: ["Flutter", "Firebase", "Google Maps API"],
            link: "#",
            image: "bg-gradient-to-br from-orange-500 to-red-500"
        },
        {
            title: "Site Agence Digitale",
            category: "web",
            type: "design",
            icon: Globe,
            description: "Site web vitrine avec animations premium et intégration CMS",
            technologies: ["Next.js", "Sanity CMS", "GSAP"],
            link: "#",
            image: "bg-gradient-to-br from-indigo-500 to-purple-500"
        },
        {
            title: "Dashboard Analytics",
            category: "app",
            type: "dev",
            icon: Award,
            description: "Tableau de bord analytique en temps réel avec DataViz",
            technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
            link: "#",
            image: "bg-gradient-to-br from-teal-500 to-cyan-500"
        }
    ];

    const categories = [
        { id: 'all', label: 'Tous les projets' },
        { id: 'web', label: 'Sites Web' },
        { id: 'app', label: 'Applications' },
        { id: 'design', label: 'Design' }
    ];

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory);

    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            if (projectsRef.current) {
                const items = projectsRef.current.querySelectorAll('[data-project]');
                gsap.set(items, { autoAlpha: 0, y: 40 });

                items.forEach((item, index) => {
                    gsap.to(item, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "power3.out"
                    });
                });
            }
        }, projectsRef);

        return () => ctx.revert();
    }, [selectedCategory]);

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <SEO 
                title={seoConfig.portfolio.title}
                description={seoConfig.portfolio.description}
                keywords={seoConfig.portfolio.keywords}
                canonicalUrl="https://evan-djefie.com/portfolio"
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
                                <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                    Mon Portfolio
                                </h1>
                                <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Découvrez ma sélection de projets - sites web, applications et designs 
                                    que j'ai développés pour diverses entreprises et startups.
                                </p>
                            </div>

                            {/* Meta Description - SEO */}
                            <div className={`p-4 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Portfolio d'Evan Djefie - Exemples de projets en développement web, applications mobiles et design UX/UI.
                                    Projets réalisés avec React, TypeScript, Laravel, Flutter et plus.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Filter Section */}
                    <div className={`py-12 px-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                    <Filter size={20} />
                                    <span className="font-semibold">Filtrer:</span>
                                </div>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-6 py-2 rounded-full font-medium transition-all ${
                                            selectedCategory === cat.id
                                                ? 'bg-[#19a89e] text-white'
                                                : isDark
                                                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-6xl mx-auto">
                            <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project, index) => {
                                    const IconComponent = project.icon;
                                    return (
                                        <div
                                            key={index}
                                            data-project
                                            className={`group rounded-lg overflow-hidden border transition-all hover:border-[#19a89e] hover:shadow-2xl ${
                                                isDark
                                                    ? 'border-gray-700 bg-gray-900'
                                                    : 'border-gray-200 bg-white'
                                            }`}
                                        >
                                            {/* Project Image/Icon */}
                                            <div className={`h-48 ${project.image} relative overflow-hidden flex items-center justify-center`}>
                                                <IconComponent size={64} className="text-white opacity-30" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                                    <a
                                                        href={project.link}
                                                        className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                                                    >
                                                        Voir le projet <ExternalLink size={18} />
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Project Info */}
                                            <div className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                                            {project.title}
                                                        </h3>
                                                        <p className={`text-sm font-semibold ${
                                                            project.type === 'dev' 
                                                                ? 'text-blue-500' 
                                                                : 'text-purple-500'
                                                        }`}>
                                                            {project.type === 'dev' ? '💻 Développement' : '🎨 Design'}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className={`mb-4 text-sm line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                                    {project.description}
                                                </p>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className={`px-2 py-1 text-xs rounded font-semibold ${
                                                                isDark
                                                                    ? 'bg-gray-800 text-gray-300'
                                                                    : 'bg-gray-100 text-gray-700'
                                                            }`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Links */}
                                                <div className="flex gap-2">
                                                    <a
                                                        href={project.link}
                                                        className={`flex-1 px-4 py-2 rounded font-semibold transition-all text-center ${
                                                            isDark
                                                                ? 'bg-[#19a89e]/20 text-[#19a89e] hover:bg-[#19a89e]/30'
                                                                : 'bg-[#19a89e]/10 text-[#19a89e] hover:bg-[#19a89e]/20'
                                                        }`}
                                                    >
                                                        Voir plus
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section - Related Services */}
                    <div className={`py-20 px-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Services Professionnels
                            </h2>
                            <p className={`text-center text-lg mb-12 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                Vous avez un projet similaire? Découvrez nos offres et services
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Edjverse */}
                                <Link to="/edjverse">
                                    <div className={`p-8 rounded-lg border transition-all hover:border-[#19a89e] hover:shadow-lg cursor-pointer h-full ${
                                        isDark
                                            ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'
                                            : 'border-gray-200 bg-gray-50 hover:bg-white'
                                    }`}>
                                        <div className="inline-block mb-4 p-3 rounded-lg bg-[#19a89e]/20">
                                            <Globe className="text-[#19a89e]" size={32} />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                            Edjverse
                                        </h3>
                                        <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                            Agence digitale pour création de marque, transformation digitale et solutions web
                                        </p>
                                        <div className="flex items-center text-[#19a89e] font-semibold">
                                            Découvrir <ArrowRight size={20} className="ml-2" />
                                        </div>
                                    </div>
                                </Link>

                                {/* ViZup */}
                                <Link to="/vizup">
                                    <div className={`p-8 rounded-lg border transition-all hover:border-blue-500 hover:shadow-lg cursor-pointer h-full ${
                                        isDark
                                            ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'
                                            : 'border-gray-200 bg-gray-50 hover:bg-white'
                                    }`}>
                                        <div className="inline-block mb-4 p-3 rounded-lg bg-blue-500/20">
                                            <Zap className="text-blue-500" size={32} />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                            ViZup
                                        </h3>
                                        <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                            Accélérateur MVP - Transformer votre idée en produit en 30 jours
                                        </p>
                                        <div className="flex items-center text-blue-500 font-semibold">
                                            Découvrir <ArrowRight size={20} className="ml-2" />
                                        </div>
                                    </div>
                                </Link>

                                {/* Cabinet */}
                                <Link to="/cabinet">
                                    <div className={`p-8 rounded-lg border transition-all hover:border-green-500 hover:shadow-lg cursor-pointer h-full ${
                                        isDark
                                            ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'
                                            : 'border-gray-200 bg-gray-50 hover:bg-white'
                                    }`}>
                                        <div className="inline-block mb-4 p-3 rounded-lg bg-green-500/20">
                                            <Award className="text-green-500" size={32} />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
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

                            <div className="text-center mt-8">
                                <Link
                                    to="/diam"
                                    className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
                                        isDark
                                            ? 'bg-[#19a89e]/20 text-[#19a89e] hover:bg-[#19a89e]/30'
                                            : 'bg-[#19a89e]/10 text-[#19a89e] hover:bg-[#19a89e]/20'
                                    }`}
                                >
                                    Voir aussi DIAM <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links for SEO */}
                    <div className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Liens Directs - Découvrez Nos Offres
                            </h2>

                            <div className="space-y-4">
                                <div className={`p-6 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
                                    <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                        <LinkIcon size={20} className="text-[#19a89e]" />
                                        Portfolio Personnel
                                    </h3>
                                    <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                        Explorez mon portfolio personnel showcasing développement, design et DevOps
                                    </p>
                                    <Link to="/" className="text-[#19a89e] font-semibold hover:underline">
                                        Retour à l'accueil →
                                    </Link>
                                </div>

                                <div className={`p-6 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
                                    <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                        <LinkIcon size={20} className="text-[#19a89e]" />
                                        Services Edjverse
                                    </h3>
                                    <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                        Services professionnels: création de marque, transformation digitale, solutions high-tech
                                    </p>
                                    <Link to="/edjverse" className="text-[#19a89e] font-semibold hover:underline">
                                        Voir les services →
                                    </Link>
                                </div>

                                <div className={`p-6 rounded-lg border ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
                                    <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                        <LinkIcon size={20} className="text-blue-500" />
                                        Toutes Nos Offres
                                    </h3>
                                    <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                        ViZup, DIAM, AssistCabinet et Edjverse - toutes nos solutions en un seul endroit
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <Link to="/vizup" className="text-blue-500 font-semibold hover:underline">ViZup →</Link>
                                        <Link to="/diam" className="text-purple-500 font-semibold hover:underline">DIAM →</Link>
                                        <Link to="/cabinet" className="text-green-500 font-semibold hover:underline">AssistCabinet →</Link>
                                    </div>
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

export default PortfolioPage;
