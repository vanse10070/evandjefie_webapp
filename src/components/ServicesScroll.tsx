import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Palette, Zap, Server, Code } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface ServicesScrollProps {
  isDark: boolean;
}

const ServicesScroll: React.FC<ServicesScrollProps> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services: ServiceCard[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Landing Page',
      description: 'Sites modernes et performants pour votre présence en ligne',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'App Web/Mobile',
      description: 'Applications sur mesure adaptées à vos besoins métiers',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design & Branding',
      description: 'Identité visuelle cohérente et mémorable pour votre marque',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automatisation',
      description: 'Bots et workflows pour optimiser vos processus métiers',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'DevOps & Cloud',
      description: 'Infrastructure et déploiement automatisé de qualité',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Consulting Tech',
      description: 'Audit technique et recommandations stratégiques',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = scrollContainerRef.current?.querySelectorAll('.service-card');
      if (cards && cards.length > 0) {
        gsap.set(cards, { autoAlpha: 0, x: 100 });

        gsap.fromTo(
          cards,
          { autoAlpha: 0, x: 100 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="services"
      className={`py-20 px-4 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
            Mes Services
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Une gamme complète de solutions pour transformer votre vision digitale en réalité
          </p>
        </motion.div>

        {/* Netflix-style Horizontal Scroll */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="service-card flex-shrink-0 w-80 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`h-64 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-800 to-gray-700'
                      : 'bg-gradient-to-br from-white to-gray-50'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${service.color}`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`text-[#19a89e] mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 flex-grow ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="flex justify-center mt-6">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
            >
              ← Scroll →
            </motion.div>
          </div>
        </div>
      </div>

      {/* Styles for scrollbar hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ServicesScroll;
