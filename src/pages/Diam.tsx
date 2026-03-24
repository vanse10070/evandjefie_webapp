import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { CheckCircle, Video, MessageSquare, PenTool, Layout, Facebook, Target, DollarSign, Laptop } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Diam = () => {
    const { isDark, toggleTheme } = useTheme();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const chapters = [
        { icon: <PenTool />, title: "Chapitre 1", desc: "Créer des affiches et logos attractifs avec Canva" },
        { icon: <Video />, title: "Chapitre 2", desc: "Produire des vidéos percutantes avec InVideo/Veo3/HAiluoAI et ChatGPT" },
        { icon: <MessageSquare />, title: "Chapitre 3", desc: "Créer du contenu engageant avec ChatGPT" },
        { icon: <Target />, title: "Chapitre 3.2", desc: "Créer du contenu engageant avec ChatGPT (Avancé)" },
        { icon: <Layout />, title: "Chapitre 4", desc: "Construire un site web avec l'IA (Lovable / Bolt.new)" },
        { icon: <Facebook />, title: "Chapitre 5", desc: "Créer une page Facebook professionnelle pour se présenter" },
        { icon: <DollarSign />, title: "Chapitre 6", desc: "Apprendre la prospection avec ChatGPT" },
    ];

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'
                } relative`}>

                {/* Global Background Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none fixed">
                    <div className={`relative h-full w-full ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className={`absolute h-full w-full ${isDark ? 'bg-[radial-gradient(#374151_1px,transparent_1px)]' : 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]'} [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]`}></div>
                    </div>
                </div>

                <div className="relative z-10 w-full overflow-x-hidden">
                    <Header isDark={isDark} toggleTheme={toggleTheme} />

                    {/* HERO SECTION */}
                    <section className="min-h-screen pt-32 pb-20 px-4 relative flex items-center justify-center">
                        <div className="max-w-6xl mx-auto text-center">
                            <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                DIGITAL IN <span className="text-[#19a89e]">A MONTH</span>
                            </h1>
                            <p className={`text-2xl md:text-3xl font-light mb-12 max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                De zéro à Freelance en <span className="font-bold text-[#014a74] dark:text-[#4da3e6]">1 mois et demi</span> grâce à l'IA
                            </p>

                            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                                <a href="#pricing" className="bg-[#19a89e] hover:bg-[#16968c] text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all">
                                    Je Rejoins la Formation
                                </a>
                                <a href="#syllabus" className={`px-10 py-5 rounded-full font-bold text-xl border-2 transition-all ${isDark
                                    ? 'border-white text-white hover:bg-white hover:text-[#014a74]'
                                    : 'border-gray-900 text-[#014a74] hover:bg-gray-900 hover:text-white'
                                    }`}>
                                    Voir le Programme
                                </a>
                            </div>

                            {/* Youtube Embed Placeholder or Image */}
                            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" alt="Working on laptop" className="w-full h-auto object-cover opacity-90" />
                            </div>

                        </div>
                    </section>

                    {/* SYLLABUS SECTION */}
                    <section id="syllabus" className="py-24 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                        <div className="max-w-5xl mx-auto">
                            <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Le Programme Complet
                            </h2>
                            <div className="grid gap-6">

                                <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                                    }`}>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                            <Laptop size={24} />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>Introduction</h3>
                                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Les bases du freelancing et de l'IA.</p>
                                        </div>
                                    </div>
                                </div>

                                {chapters.map((chapter, idx) => (
                                    <div key={idx} className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                                        }`}>
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700 text-[#19a89e]' : 'bg-teal-50 text-[#19a89e]'
                                                }`}>
                                                {chapter.icon}
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>{chapter.title}</h3>
                                                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{chapter.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* PRICING */}
                    <section id="pricing" className="py-24 px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                Prêt à lancer ta carrière ?
                            </h2>
                            <div className={`relative p-8 md:p-12 rounded-3xl border-2 overflow-hidden ${isDark ? 'bg-gray-800 border-[#19a89e]' : 'bg-white border-[#19a89e]'
                                }`}>
                                <div className="absolute top-0 right-0 bg-[#19a89e] text-white px-6 py-2 rounded-bl-xl font-bold">
                                    OFFRE DE LANCEMENT
                                </div>

                                <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Formation Complète DIAM</h3>
                                <div className="flex justify-center items-baseline mb-8">
                                    <span className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-[#014a74]'}`}>25.000 Fcfa</span>
                                    <span className={`ml-4 text-xl line-through ${isDark ? 'text-red-500' : 'text-red-400'}`}>50.000 Fcfa</span>
                                </div>

                                <ul className="text-left max-w-md mx-auto space-y-4 mb-10">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="text-[#19a89e]" />
                                        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Accès à vie à la formation</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="text-[#19a89e]" />
                                        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Support communautaire</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="text-[#19a89e]" />
                                        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Mises à jour gratuites</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="text-[#19a89e]" />
                                        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Certificat de fin de formation</span>
                                    </li>
                                </ul>

                                <a
                                    href="https://pay.wave.com/m/M_ci_BzrF5N5Dmt4d/c/ci/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-[#19a89e] hover:bg-[#16968c] text-white py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-teal-500/25"
                                >
                                    Payer et Rejoindre Maintenant
                                </a>
                                <p className="mt-4 text-sm text-gray-500">Paiement sécurisé via Wave</p>
                            </div>
                        </div>
                    </section>

                    <Footer isDark={isDark} />
                </div>
            </div>
        </div>
    );
};

export default Diam;
