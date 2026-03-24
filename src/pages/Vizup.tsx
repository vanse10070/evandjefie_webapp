import React, { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Solution from '../components/Solution';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Vizup() {
    const { isDark, toggleTheme } = useTheme();
    const { hash } = useLocation();

    useEffect(() => {
        // Initialize smooth scrolling
        const smoothScroll = (target: string) => {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Handle initial hash navigation
        if (hash) {
            setTimeout(() => {
                smoothScroll(hash);
            }, 100);
        }

        // Handle navigation clicks
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A') {
                const href = target.getAttribute('href');
                if (href?.startsWith('#')) {
                    e.preventDefault();
                    smoothScroll(href);
                }
            }
        };

        document.addEventListener('click', handleClick);

        // Set up scroll-triggered animations
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            document.removeEventListener('click', handleClick);
        };
    }, [hash]);

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'
                } relative`}>
                {/* Global Background Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="relative h-full w-full bg-white dark:bg-gray-900">
                        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    </div>
                </div>

                <div className="relative z-10">
                    <Header isDark={isDark} toggleTheme={toggleTheme} />
                    <Hero isDark={isDark} />
                    <Problems isDark={isDark} />
                    <Solution isDark={isDark} />
                    <Pricing isDark={isDark} />
                    <About isDark={isDark} />
                    <Portfolio isDark={isDark} />
                    <FAQ isDark={isDark} />
                    <Contact isDark={isDark} />
                    <ScrollToTop isDark={isDark} />
                    <Footer isDark={isDark} />
                </div>
            </div>
        </div>
    );
}

export default Vizup;