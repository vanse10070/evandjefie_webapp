import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  isDark: boolean;
}

const FAQ: React.FC<FAQProps> = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Quel est votre délai de réalisation ?',
      answer: 'Le délai dépend de la complexité du projet. Un audit initial permet de définir un planning précis. En général, un MVP simple prend 4-6 semaines, tandis qu\'une application complète peut nécessiter 3-6 mois.',
    },
    {
      question: 'Proposez-vous une maintenance après livraison ?',
      answer: 'Oui, je propose des formules de maintenance évolutive incluse dans le contrat initial, avec support technique réactif et assistance pour les améliorations futures.',
    },
    {
      question: 'Quels sont vos tarifs ?',
      answer: 'Les tarifs sont personnalisés selon votre projet et budget. Une séance d\'audit payante (ou formulaire détaillé gratuit) permet d\'établir un devis transparent et précis.',
    },
    {
      question: 'Utilisez-vous les dernières technologies ?',
      answer: 'Absolument. Je travaille avec React, TypeScript, Node.js, Flutter et d\'autres technologies modernes. Le choix dépend toujours des besoins réels du projet.',
    },
    {
      question: 'Proposez-vous du suivi post-lancement ?',
      answer: 'Oui, je propose une période d\'accompagnement avec formation, support technique, et ajustements nécessaires pour assurer le succès de votre solution.',
    },
    {
      question: 'Comment se déroule votre processus de travail ?',
      answer: 'Audit initial → Devis détaillé → Contrat → Développement par étapes → Tests rigoureux → Livraison → Suivi post-lancement. Transparence et communication constante tout au long du projet.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
            Questions Fréquemment Posées
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Trouvez les réponses aux questions les plus courantes sur mes services et mon processus
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className={`w-full px-6 py-4 rounded-lg transition-all duration-300 text-left flex items-center justify-between ${
                  openIndex === idx
                    ? isDark
                      ? 'bg-gray-700 shadow-lg'
                      : 'bg-white shadow-lg'
                    : isDark
                    ? 'bg-gray-700/50 hover:bg-gray-700'
                    : 'bg-white hover:shadow-md'
                }`}
              >
                <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={24}
                    className={openIndex === idx ? 'text-[#19a89e]' : isDark ? 'text-gray-400' : 'text-gray-600'}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`overflow-hidden rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}
                  >
                    <p className={`px-6 py-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
