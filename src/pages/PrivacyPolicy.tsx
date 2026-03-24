import React, { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const PrivacyPolicy = () => {
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-32 pb-20 px-4 transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-[#19a89e]">Politique de Confidentialité</h1>
                    
                    <div className="space-y-6 text-lg leading-relaxed opacity-90">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Collecte des informations</h2>
                            <p>Nous collectons des informations lorsque vous utilisez notre formulaire de contact ou que vous nous contactez directement. Les informations collectées incluent votre nom, votre adresse e-mail et votre numéro de téléphone.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Utilisation des informations</h2>
                            <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Vous contacter par e-mail ou téléphone</li>
                                <li>Répondre à vos besoins individuels et demandes de projet</li>
                                <li>Améliorer notre service client</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Confidentialité</h2>
                            <p>Nous sommes les seuls propriétaires des informations collectées sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Protection des informations</h2>
                            <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Consentement</h2>
                            <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
                        </section>
                    </div>
                </div>
            </div>

            <ScrollToTop isDark={isDark} />
            <Footer isDark={isDark} />
        </div>
    );
};

export default PrivacyPolicy;
