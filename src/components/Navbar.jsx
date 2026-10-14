import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ecoidnLogo from '../assets/ecoidn.svg';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-eco-dark/90 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 group shrink-0">
          <img 
            src={ecoidnLogo} 
            alt="Ecoidn Logo" 
            className="h-8 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="text-lg sm:text-xl font-bold tracking-wider text-white">
            ECO<span className="text-eco-blue">IDN</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          {isHome ? (
            <>
              <a href="#about" className="hover:text-eco-blue transition-colors">{t.nav.about}</a>
              <a href="#process" className="hover:text-eco-blue transition-colors">{t.nav.process}</a>
              <a href="#why-us" className="hover:text-eco-blue transition-colors">{t.nav.whyUs}</a>
              <a href="#products" className="hover:text-eco-blue transition-colors">{t.nav.products}</a>
              <a href="#zero-waste" className="hover:text-eco-blue transition-colors">{t.nav.zeroWaste}</a>
              <a href="#web3" className="hover:text-eco-blue transition-colors flex items-center gap-1.5">
                <span>{t.nav.web3}</span>
                <span className="px-1.5 py-0.5 text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
                  R&D
                </span>
              </a>
            </>
          ) : (
            <Link to="/" className="hover:text-eco-blue transition-colors">
              &larr; {t.nav.backHome}
            </Link>
          )}
        </nav>

        {/* Right Side: Language Switcher + Live Telemetry + Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center border border-zinc-800 bg-zinc-900/90 p-0.5 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-zinc-500 mx-1.5 hidden sm:block" />
            <button
              onClick={() => toggleLanguage('id')}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                lang === 'id' ? 'bg-eco-blue text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => toggleLanguage('en')}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                lang === 'en' ? 'bg-eco-blue text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            to="/live-production"
            onClick={closeMenu}
            className="flex items-center gap-2 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider bg-eco-blue/10 text-eco-blue border border-eco-blue/30 hover:bg-eco-blue hover:text-zinc-950 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-eco-blue animate-ping" />
            <span className="hidden sm:inline">{t.nav.liveBtn}</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/60"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Sudah Bersih Tanpa //) */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-5 space-y-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">
          {isHome ? (
            <div className="flex flex-col space-y-3">
              <a href="#about" onClick={closeMenu} className="py-1.5 hover:text-eco-blue">{t.nav.about}</a>
              <a href="#process" onClick={closeMenu} className="py-1.5 hover:text-eco-blue">{t.nav.process}</a>
              <a href="#why-us" onClick={closeMenu} className="py-1.5 hover:text-eco-blue">{t.nav.whyUs}</a>
              <a href="#products" onClick={closeMenu} className="py-1.5 hover:text-eco-blue">{t.nav.products}</a>
              <a href="#zero-waste" onClick={closeMenu} className="py-1.5 hover:text-eco-blue">{t.nav.zeroWaste}</a>
              <a href="#web3" onClick={closeMenu} className="py-1.5 text-amber-400">{t.nav.web3} (R&D)</a>
            </div>
          ) : (
            <Link to="/" onClick={closeMenu} className="block py-1 text-eco-blue">
              &larr; {t.nav.backHome}
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;