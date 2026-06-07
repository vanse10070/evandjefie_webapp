import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail, Youtube } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/edjverse.svg';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Accueil', sectionId: 'hero' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Réalisations', sectionId: 'realizations' },
    { label: 'Étapes', sectionId: 'process' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/evan-djefie', label: 'LinkedIn' },
    { icon: Github, href: 'http://github.com/evandjefie/', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/@evandjefie1007', label: 'YouTube' },
    { icon: Mail, href: 'mailto:evanform225@gmail.com', label: 'Email' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? isDark
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={logo} alt="Edjverse Logo" className="w-full h-full object-contain text-white" />
            </div>
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#014a74]'
              }`}>
              Evan DJEFIE
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className={`hover:text-[#19a89e] transition-colors mx-4 cursor-pointer bg-transparent border-none ${isDark ? 'text-white' : 'text-gray-800'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('book-meeting')}
              className="bg-[#19a89e] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#148278] transition-colors"
            >
              Travaillons ensemble
            </button>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-[#19a89e] transition-colors ${isDark ? 'text-white' : 'text-gray-800'
                  }`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-[#19a89e] transition-colors ${isDark ? 'text-white' : 'text-gray-800'
                  }`}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isDark ? 'text-white' : 'text-gray-800'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 py-4 space-y-2 ${isDark ? 'bg-gray-800' : 'bg-white'
            } rounded-lg shadow-lg`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className={`block w-full text-left py-2 px-4 hover:text-[#19a89e] transition-colors bg-transparent border-none cursor-pointer ${isDark ? 'text-white' : 'text-gray-800'
                  }`}
              >
                {item.label}
              </button>
            ))}
            {/* Mobile CTA - Centered */}
            <div className="flex justify-center pt-2">
              <button
                onClick={() => scrollToSection('book-meeting')}
                className="bg-[#19a89e] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#148278] transition-colors w-full"
              >
                Travaillons ensemble
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;