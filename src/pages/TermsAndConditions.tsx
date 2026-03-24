import React, { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const TermsAndConditions = () => {
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-32 pb-20 px-4 transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-[#19a89e]">Termes et Conditions</h1>
                    
                    <div className="space-y-6 text-lg leading-relaxed opacity-90">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptation des conditions</h2>
                            <p>En accédant et en utilisant ce site web, vous acceptez d'être lié par les présentes conditions d'utilisation, toutes les lois et réglementations applicables, et vous acceptez d'être responsable du respect de toutes les lois locales applicables.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Utilisation du contenu</h2>
                            <p>Le contenu de ce site web (textes, images, designs, logos) est protégé par le droit d'auteur et appartient à EDJVERSE, sauf mention contraire. Toute reproduction, distribution ou utilisation non autorisée du contenu est strictement interdite.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Services et Offres</h2>
                            <p>Les services et tarifs mentionnés sur le site sont fournis à titre indicatif et peuvent être modifiés sans préavis. Un contrat spécifique sera établi pour chaque prestation de service.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Limitation de responsabilité</h2>
                            <p>Les informations contenues sur ce site sont fournies "telles quelles". Evan DJEFIE ne donne aucune garantie, expresse ou implicite, et décline par la présente toute autre garantie, y compris, sans limitation, les garanties ou conditions implicites de qualité marchande, d'adéquation à un usage particulier, ou de non-violation de la propriété intellectuelle ou autre violation des droits.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Modifications des conditions</h2>
                            <p>Nous nous réservons le droit de réviser les présentes conditions d'utilisation à tout moment et sans préavis. En utilisant ce site web, vous acceptez d'être lié par la version alors en vigueur des présentes conditions d'utilisation.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Droit applicable</h2>
                            <p>Toute réclamation relative au site web de EDJVERSE sera régie par les lois de la Côte d'Ivoire, sans égard à ses dispositions en matière de conflit de lois.</p>
                        </section>
                    </div>
                </div>
            </div>

            <ScrollToTop isDark={isDark} />
            <Footer isDark={isDark} />
        </div>
    );
};

export default TermsAndConditions;
