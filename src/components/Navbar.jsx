import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ecoidnLogo from '../assets/ecoidn.svg';
import { Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-eco-dark/95 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="/" onClick={closeMenu} className="flex items-center gap-2.5 group shrink-0">
          <img 
            src={ecoidnLogo} 
            alt="Ecoidn Logo" 
            className="h-8 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="text-lg sm:text-xl font-bold tracking-wider text-white">
            ECO<span className="text-eco-blue">IDN</span>
          </span>
        </a>

        {/* Desktop Navigation (Grouped Dropdowns) */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
          
          {/* Dropdown 1: Company / Perusahaan */}
          <div className="relative group h-20 flex items-center">
            <button className="flex items-center gap-1.5 hover:text-eco-blue transition-colors">
              {t.nav.company} <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-20 left-0 hidden group-hover:flex flex-col bg-zinc-950 border border-zinc-800 py-2 min-w-[220px] shadow-2xl">
              <a href="/#about" className="px-5 py-2.5 hover:bg-zinc-900 hover:text-eco-blue">{t.nav.about}</a>
              <a href="/#why-us" className="px-5 py-2.5 hover:bg-zinc-900 hover:text-eco-blue">{t.nav.whyUs}</a>
              <a href="/#zero-waste" className="px-5 py-2.5 hover:bg-zinc-900 hover:text-eco-blue">{t.nav.zeroWaste}</a>
            </div>
          </div>

          {/* Dropdown 2: Operations / Operasional */}
          <div className="relative group h-20 flex items-center">
            <button className="flex items-center gap-1.5 hover:text-eco-blue transition-colors">
              {t.nav.operations} <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-20 left-0 hidden group-hover:flex flex-col bg-zinc-950 border border-zinc-800 py-2 min-w-[220px] shadow-2xl">
              <a href="/#sourcing" className="px-5 py-2.5 hover:bg-zinc-900 text-emerald-400">{t.nav.sourcing}</a>
              <a href="/#process" className="px-5 py-2.5 hover:bg-zinc-900 hover:text-eco-blue">{t.nav.process}</a>
            </div>
          </div>

          {/* Standalone Link: Catalog */}
          <a href="/#products" className="hover:text-eco-blue transition-colors h-20 flex items-center">
            {t.nav.products}
          </a>

          {/* Standalone Link: Web3 & Contact */}
          <a href="/#web3" className="hover:text-eco-blue transition-colors h-20 flex items-center gap-1.5">
            <span>{t.nav.contactWeb3}</span>
            <span className="px-1.5 py-0.5 text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded hidden xl:inline-block">R&D</span>
          </a>

        </nav>

        {/* Right Actions: Language Switcher + Live Telemetry + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Language Switcher */}
          <div className="flex items-center border border-zinc-800 bg-zinc-900/90 p-0.5 text-xs font-semibold shrink-0">
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

          {/* Live IoT Button */}
          <a
            href="/live-production"
            onClick={closeMenu}
            className="flex items-center gap-2 px-3 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-eco-blue/10 text-eco-blue border border-eco-blue/30 hover:bg-eco-blue hover:text-zinc-950 transition-all shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-eco-blue animate-ping" />
            <span className="hidden sm:inline">{t.nav.liveBtn}</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
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

      {/* Mobile Menu (Consistent Full Navigation) */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-5 text-xs font-semibold uppercase tracking-wider text-zinc-300 shadow-2xl h-screen overflow-y-auto pb-32">
          
          <div className="mb-6">
            <span className="text-[10px] text-zinc-600 block mb-3">{t.nav.company}</span>
            <div className="flex flex-col space-y-3 pl-2">
              <a href="/#about" onClick={closeMenu} className="hover:text-eco-blue">{t.nav.about}</a>
              <a href="/#why-us" onClick={closeMenu} className="hover:text-eco-blue">{t.nav.whyUs}</a>
              <a href="/#zero-waste" onClick={closeMenu} className="hover:text-eco-blue">{t.nav.zeroWaste}</a>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-[10px] text-zinc-600 block mb-3">{t.nav.operations}</span>
            <div className="flex flex-col space-y-3 pl-2">
              <a href="/#sourcing" onClick={closeMenu} className="text-emerald-400">{t.nav.sourcing}</a>
              <a href="/#process" onClick={closeMenu} className="hover:text-eco-blue">{t.nav.process}</a>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-[10px] text-zinc-600 block mb-3">Katalog & Fasilitas</span>
            <div className="flex flex-col space-y-3 pl-2">
              <a href="/#products" onClick={closeMenu} className="hover:text-eco-blue">{t.nav.products}</a>
              <a href="/#web3" onClick={closeMenu} className="hover:text-eco-blue flex items-center gap-2">
                {t.nav.web3} <span className="px-1.5 py-0.5 text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">R&D</span>
              </a>
              <a href="/#web3" onClick={closeMenu} className="text-white font-bold">{t.nav.contact}</a>
            </div>
          </div>
          
        </div>
      )}
    </header>
  );
};

export default Navbar;