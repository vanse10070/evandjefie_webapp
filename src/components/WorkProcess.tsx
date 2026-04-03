import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, FileText, ShieldCheck, Receipt, Wallet, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
    id: string;
    label: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    points: string[];
}

const steps: ProcessStep[] = [
    {
        id: 'rdv',
        label: 'RDV',
        title: 'Prise de Contact & RDV',
        icon: <PhoneCall className="w-6 h-6" />,
        description: 'Premier échange pour comprendre votre vision, vos besoins et les objectifs de votre projet.',
        points: [
            'Évaluation gratuite des besoins spécifiques',
            'Définition du périmètre fonctionnel',
            'Conseils stratégiques et techniques initiaux'
        ]
    },
    {
        id: 'devis',
        label: 'Devis',
        title: 'Proposition & Devis',
        icon: <FileText className="w-6 h-6" />,
        description: "Établissement d'une proposition technique et financière détaillée adaptée à votre budget.",
        points: [
            'Estimation transparente des coûts de développement',
            'Planning prévisionnel et jalons de livraison',
            'Choix des technologies les plus performantes'
        ]
    },
    {
        id: 'contrat',
        label: 'Contrat',
        title: 'Signature & Engagement',
        icon: <ShieldCheck className="w-6 h-6" />,
        description: 'Formalisation de notre collaboration pour garantir la sécurité et la sérénité des deux parties.',
        points: [
            'Contrat de prestation clair et professionnel',
            'Garantie de propriété intellectuelle',
            'Engagement contractuel sur les délais'
        ]
    },
    {
        id: 'facture',
        label: 'Facture',
        title: 'Facturation Structurée',
        icon: <Receipt className="w-6 h-6" />,
        description: 'Processus de facturation simple pour un suivi financier rigoureux du projet.',
        points: [
            'Facture d\'acompte pour le démarrage immédiat',
            'Documents officiels conformes aux normes',
            'Suivi détaillé des prestations facturées'
        ]
    },
    {
        id: 'paiement',
        label: 'Paiement Local',
        title: 'Paiement Local & Flexible',
        icon: <Wallet className="w-6 h-6" />,
        description: 'Facilités de paiement adaptées au contexte local pour une collaboration simplifiée.',
        points: [
            'Acceptation Mobile Money (Orange Money, Wave, MTN)',
            'Virement bancaire (local et international)',
            'Possibilité de paiement échelonné selon le projet'
        ]
    },
    {
        id: 'suivi',
        label: 'Suivi Client',
        title: 'Livraison & Suivi Continu',
        icon: <HeartHandshake className="w-6 h-6" />,
        description: 'Accompagnement post-lancement pour assurer la performance et la pérennité de votre solution.',
        points: [
            'Maintenance corrective et évolutive incluse',
            'Formation personnalisée à la prise en main',
            'Support technique réactif et disponible'
        ]
    }
];

const WorkProcess = ({ isDark }: { isDark: boolean }) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}
                    >
                        Mon Processus de Travail
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        Une méthodologie structurée pour transformer vos idées en produits d'exception.
                    </motion.p>
                </div>

                {/* Horizontal Navigation */}
                <div className="relative mb-12">
                    {/* Line behind dots */}
                    <div className={`absolute top-[42px] left-0 right-0 h-0.5 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <motion.div 
                            className="h-full bg-[#19a89e]"
                            initial={{ width: '0%' }}
                            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    <div className="flex justify-between items-center relative z-10">
                        {steps.map((step, idx) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(idx)}
                                className="flex flex-col items-center group focus:outline-none"
                            >
                                <span className={`text-xs font-bold mb-3 transition-colors ${
                                    activeStep === idx 
                                    ? (isDark ? 'text-[#19a89e]' : 'text-[#19a89e]') 
                                    : (isDark ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-400 group-hover:text-gray-600')
                                } uppercase tracking-tighter sm:tracking-normal`}>
                                    {step.label}
                                </span>
                                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                                    activeStep === idx 
                                    ? 'bg-[#19a89e] border-[#19a89e] scale-125 shadow-[0_0_10px_rgba(25,168,158,0.5)]' 
                                    : (isDark ? 'bg-gray-800 border-gray-600 group-hover:border-gray-400' : 'bg-white border-gray-300 group-hover:border-gray-400')
                                }`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`p-8 md:p-12 rounded-3xl border ${
                                isDark 
                                ? 'bg-gray-900/60 border-gray-700 shadow-2xl' 
                                : 'bg-white border-gray-100 shadow-xl'
                            }`}
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className={`p-5 rounded-2xl ${isDark ? 'bg-[#19a89e]/10' : 'bg-[#19a89e]/5'} text-[#19a89e]`}>
                                    {steps[activeStep].icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                                        {steps[activeStep].title}
                                    </h3>
                                    <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {steps[activeStep].description}
                                    </p>
                                    
                                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                                        {steps[activeStep].points.map((point, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle2 size={20} className="text-[#19a89e] shrink-0" />
                                                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
