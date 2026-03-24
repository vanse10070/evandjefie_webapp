import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail, Youtube, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/edjverse.svg';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
  ];

  const offers = [
    { label: 'Edjverse', href: '/edjverse' },
    { label: 'ViZup', href: '/vizup' },
    { label: 'DIAM', href: '/diam' },
    { label: 'AssistCabinet', href: '/cabinet' },
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`hover:text-[#19a89e] transition-colors mx-4 ${isDark ? 'text-white' : 'text-gray-800'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Offers Dropdown */}
            <div className="relative group mx-4">
              <button className={`hover:text-[#19a89e] transition-colors flex items-center ${isDark ? 'text-white' : 'text-gray-800'
                }`}>
                Offres
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className={`absolute left-0 mt-0 w-48 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${isDark ? 'bg-gray-800' : 'bg-white'
                }`}>
                {offers.map((offer) => (
                  <Link
                    key={offer.label}
                    to={offer.href}
                    className={`block px-4 py-2 first:rounded-t-lg last:rounded-b-lg hover:text-[#19a89e] transition-colors ${isDark ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'
                      }`}
                  >
                    {offer.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
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
          <div className={`md:hidden mt-4 py-4 ${isDark ? 'bg-gray-800' : 'bg-white'
            } rounded-lg shadow-lg`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block py-2 px-4 hover:text-[#19a89e] transition-colors ${isDark ? 'text-white' : 'text-gray-800'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Offers */}
            <div className="border-t" style={{ borderColor: isDark ? '#4b5563' : '#e5e7eb' }}>
              <button
                onClick={() => setIsOffersOpen(!isOffersOpen)}
                className={`w-full text-left py-2 px-4 hover:text-[#19a89e] transition-colors flex items-center justify-between ${isDark ? 'text-white' : 'text-gray-800'
                  }`}
              >
                Offres
                <ChevronDown className={`w-4 h-4 transition-transform ${isOffersOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOffersOpen && (
                <div className={`pl-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  {offers.map((offer) => (
                    <Link
                      key={offer.label}
                      to={offer.href}
                      className={`block py-2 px-4 hover:text-[#19a89e] transition-colors ${isDark ? 'text-white' : 'text-gray-800'
                        }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsOffersOpen(false);
                      }}
                    >
                      {offer.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;