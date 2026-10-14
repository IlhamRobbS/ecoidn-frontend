import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Cpu, Droplets, Flame, Scale, ShieldCheck, 
  Recycle, Terminal, CheckCircle2, Clock, Mail, Share2 
} from 'lucide-react';

const CornerPlus = ({ className = "" }) => (
  <span className={`absolute text-zinc-600 font-mono text-xs select-none pointer-events-none ${className}`}>
    +
  </span>
);

const Home = () => {
  const { t } = useLanguage();

  const [liveDetections, setLiveDetections] = useState([
    { id: 'BOT-104', label: 'HDPE NATURAL', conf: 0.989, x: 14, y: 24, w: 130, h: 72, status: 'PASSED' },
    { id: 'BOT-105', label: 'PET CLEAR', conf: 0.994, x: 54, y: 46, w: 135, h: 80, status: 'PASSED' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveDetections((prev) =>
        prev.map((item) => ({
          ...item,
          conf: +(0.97 + Math.random() * 0.028).toFixed(3),
          x: Math.max(8, Math.min(60, item.x + (Math.random() * 8 - 4))),
          y: Math.max(15, Math.min(62, item.y + (Math.random() * 8 - 4))),
        }))
      );
    }, 950);
    return () => clearInterval(interval);
  }, []);

  const stepIcons = [Cpu, Recycle, Droplets, Flame, Scale];

  return (
    <div className="bg-eco-dark text-zinc-100 bg-blueprint-grid">
      
      {/* TOP TELEMETRY MARQUEE */}
      <div className="border-b border-zinc-800/80 bg-zinc-950/90 py-2 overflow-hidden text-[11px] font-medium tracking-wider text-zinc-400">
        <div className="animate-marquee flex gap-12 items-center">
          {[...t.ticker, ...t.ticker].map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-eco-blue" />
              <span className={idx % 2 === 1 ? "text-eco-blue font-semibold" : ""}>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto border-x border-b border-zinc-800/80 relative">
        <CornerPlus className="-top-2 -left-1.5" />
        <CornerPlus className="-top-2 -right-1.5" />

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-6 border border-zinc-800 bg-zinc-900/80 text-xs font-semibold text-eco-blue uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-eco-blue" />
                {t.hero.badge}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.08] mb-6">
                {t.hero.title1} <br />
                <span className="text-eco-blue italic font-light">{t.hero.titleHighlight}</span> <br />
                {t.hero.title2}
              </h1>

              <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-10">
                {t.hero.subtitle}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-zinc-900">
                <a
                  href="#process"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-eco-blue text-zinc-950 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white transition-colors"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#products"
                  className="px-6 py-3.5 border border-zinc-800 text-zinc-300 hover:border-eco-blue hover:text-eco-blue text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>

              {/* 3 Key Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-eco-blue">&gt;98.5%</span>
                  <span className="block text-[10px] font-semibold tracking-wider text-zinc-500 mt-0.5">{t.hero.stat1Label}</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-white">1% – 2%</span>
                  <span className="block text-[10px] font-semibold tracking-wider text-zinc-500 mt-0.5">{t.hero.stat2Label}</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-400">100% ZLD</span>
                  <span className="block text-[10px] font-semibold tracking-wider text-zinc-500 mt-0.5">{t.hero.stat3Label}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Conveyor Vision Simulation */}
          <div className="lg:col-span-5 bg-zinc-950/80 p-6 sm:p-10 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 border-b border-zinc-800 pb-3">
              <span className="flex items-center gap-2 text-eco-blue">
                <Terminal className="w-3.5 h-3.5" /> {t.hero.hudTitle}
              </span>
              <span className="text-[11px] text-emerald-400">● AUTO SORTING</span>
            </div>

            <div className="relative my-6 h-72 border border-zinc-800 bg-[#050507] overflow-hidden">
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[1px] bg-eco-blue/70 shadow-[0_0_12px_#92BBF8] z-10"
              />
              <div className="absolute inset-0 bg-blueprint-grid opacity-40" />

              {liveDetections.map((det) => (
                <motion.div
                  key={det.id}
                  animate={{ left: `${det.x}%`, top: `${det.y}%` }}
                  transition={{ type: 'spring', stiffness: 70, damping: 15 }}
                  style={{ width: det.w, height: det.h }}
                  className="absolute border border-eco-blue bg-eco-blue/10 p-1.5 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center bg-eco-blue text-zinc-950 px-1 py-0.5 text-[9px] font-mono font-bold">
                    <span>{det.label}</span>
                    <span>{(det.conf * 100).toFixed(1)}%</span>
                  </div>
                  <div className="text-[9px] font-mono text-eco-blue flex justify-between">
                    <span>{det.id}</span>
                    <span>{det.status}</span>
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[11px] text-zinc-500">
                <span>{t.hero.hudModel}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs border-t border-zinc-800 pt-4">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Wash Temp</span>
                <span className="text-white font-bold">85.0 °C (NaOH)</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Moisture Out</span>
                <span className="text-eco-blue font-bold">1.35 %</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Filter Mesh</span>
                <span className="text-white font-bold">150 µm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US */}
      <section id="about" className="max-w-7xl mx-auto border-x border-b border-zinc-800/80 relative">
        <CornerPlus className="-bottom-2 -left-1.5" />
        <CornerPlus className="-bottom-2 -right-1.5" />

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800/80">
            <span className="text-xs font-bold text-eco-blue uppercase tracking-widest">{t.about.tag}</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-6 leading-snug">
              {t.about.title}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              {t.about.p1}
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {t.about.p2}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80">
            <div className="divide-y divide-zinc-800/80">
              {t.about.cards.slice(0, 2).map((card, i) => (
                <div key={i} className="p-8 sm:p-10 hover:bg-zinc-900/30 transition-colors">
                  <span className="text-xs font-semibold text-eco-blue uppercase tracking-wider">{card.label}</span>
                  <h3 className="text-lg font-bold mt-2 mb-2 text-white">{card.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="divide-y divide-zinc-800/80 border-t sm:border-t-0 border-zinc-800/80">
              {t.about.cards.slice(2, 4).map((card, i) => (
                <div key={i} className="p-8 sm:p-10 hover:bg-zinc-900/30 transition-colors">
                  <span className="text-xs font-semibold text-eco-blue uppercase tracking-wider">{card.label}</span>
                  <h3 className="text-lg font-bold mt-2 mb-2 text-white">{card.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5-STAGE PROCESS */}
      <section id="process" className="max-w-7xl mx-auto border-x border-b border-zinc-800/80">
        <div className="p-8 sm:px-12 border-b border-zinc-800/80 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-eco-blue uppercase tracking-widest">{t.process.tag}</span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-2 tracking-tight">{t.process.title}</h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">{t.process.subtitle}</p>
        </div>

        <div className="divide-y divide-zinc-800/80">
          {t.process.steps.map((item, idx) => {
            const IconComponent = stepIcons[idx] || ShieldCheck;
            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 p-8 sm:px-12 hover:bg-zinc-900/30 transition-colors items-center gap-6">
                <div className="lg:col-span-3 flex items-center gap-4">
                  <div className="w-11 h-11 border border-eco-blue/40 bg-eco-blue/10 flex items-center justify-center text-eco-blue shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-eco-blue block">{item.step}</span>
                    <span className="text-xs text-zinc-500">{item.tech}</span>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{item.name}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY ECOIDN */}
      <section id="why-us" className="max-w-7xl mx-auto border-x border-b border-zinc-800/80">
        <div className="p-8 sm:px-12 border-b border-zinc-800/80">
          <span className="text-xs font-bold text-eco-blue uppercase tracking-widest">{t.whyUs.tag}</span>
          <h2 className="text-2xl sm:text-4xl font-bold mt-2 tracking-tight">{t.whyUs.title}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950 text-xs font-bold uppercase text-zinc-400">
                <th className="py-4 px-6 border-r border-zinc-800">{t.whyUs.colParameter}</th>
                <th className="py-4 px-6 border-r border-zinc-800">{t.whyUs.colVirgin}</th>
                <th className="py-4 px-6 border-r border-zinc-800 text-zinc-500">{t.whyUs.colTraditional}</th>
                <th className="py-4 px-6 bg-eco-blue/10 text-eco-blue font-bold">{t.whyUs.colEcoidn}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80">
              {t.whyUs.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/30">
                  <td className="py-4 px-6 font-semibold text-white border-r border-zinc-800">{row.param}</td>
                  <td className="py-4 px-6 text-zinc-300 border-r border-zinc-800 text-xs">{row.virgin}</td>
                  <td className="py-4 px-6 text-zinc-500 border-r border-zinc-800 text-xs">{row.trad}</td>
                  <td className="py-4 px-6 bg-eco-blue/5 text-eco-blue text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" /> {row.eco}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. rPELLETS SPEC */}
      <section id="products" className="max-w-7xl mx-auto border-x border-b border-zinc-800/80">
        <div className="p-8 sm:px-12 border-b border-zinc-800/80 flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <span className="text-xs font-bold text-eco-blue uppercase tracking-widest">{t.products.tag}</span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-2 tracking-tight">{t.products.title}</h2>
          </div>
          <span className="text-xs font-semibold text-eco-blue border border-eco-blue/30 px-3 py-1.5 bg-eco-blue/10">
            {t.products.standard}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {[t.products.hdpe, t.products.pet].map((prod, idx) => (
            <div key={idx} className={`p-8 sm:p-12 ${idx === 0 ? 'border-b lg:border-b-0 lg:border-r border-zinc-800/80' : ''}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-semibold text-eco-blue">{prod.sku}</span>
                  <h3 className="text-2xl font-bold mt-1">{prod.name}</h3>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-semibold bg-zinc-900 border border-zinc-700 text-zinc-300">
                  {prod.grade}
                </span>
              </div>
              <p className="text-sm text-zinc-400 mb-8 leading-relaxed">{prod.desc}</p>
              <div className="border-t border-zinc-800 text-xs divide-y divide-zinc-800/80">
                {prod.specs.map(([k, v], sIdx) => (
                  <div key={sIdx} className="py-3 flex justify-between gap-4">
                    <span className="text-zinc-500 font-medium">{k}</span>
                    <span className={sIdx === 2 ? "text-eco-blue font-bold text-right" : "text-zinc-200 font-semibold text-right"}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ZERO WASTE & ZLD */}
      <section id="zero-waste" className="max-w-7xl mx-auto border-x border-b border-zinc-800/80">
        <div className="p-8 sm:px-12 border-b border-zinc-800/80">
          <span className="text-xs font-bold text-eco-blue uppercase tracking-widest">{t.zeroWaste.tag}</span>
          <h2 className="text-2xl sm:text-4xl font-bold mt-2 mb-3 tracking-tight">{t.zeroWaste.title}</h2>
          <p className="text-sm text-zinc-400 max-w-3xl">{t.zeroWaste.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
          {t.zeroWaste.items.map((item, idx) => (
            <div key={idx} className="p-8 sm:p-10 hover:bg-zinc-900/30 transition-colors">
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-1 inline-block mb-6">
                {item.code}
              </span>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WEB3 ROADMAP */}
      <section id="web3" className="max-w-7xl mx-auto border-x border-b border-zinc-800/80 bg-zinc-950/60">
        <div className="p-8 sm:p-12 lg:p-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30">
            <Clock className="w-3.5 h-3.5" />
            <span>{t.web3.statusBadge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-2">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-eco-blue uppercase tracking-widest block mb-2">{t.web3.tag}</span>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight">{t.web3.title}</h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
                {t.web3.desc}
              </p>

              <div className="space-y-4">
                {t.web3.features.map((feat, idx) => (
                  <div key={idx} className="p-5 border border-zinc-800 bg-zinc-900/40">
                    <h4 className="text-xs text-eco-blue uppercase font-bold mb-1.5">{feat.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 border border-eco-blue/40 bg-eco-surface">
              <h3 className="text-xl font-bold text-white mb-3">{t.web3.ctaBoxTitle}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {t.web3.ctaBoxSub}
              </p>

              <div className="space-y-3 text-xs">
                <a
                  href="mailto:partnership@ecoidn.com?subject=B2B%20rPellet%20Inquiry%20%26%20Web3%20Updates"
                  className="w-full flex items-center justify-between px-5 py-3.5 bg-eco-blue text-zinc-950 font-bold hover:bg-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4" /> {t.web3.emailBtn}
                  </span>
                  <span>&rarr;</span>
                </a>

                <div className="pt-4 border-t border-zinc-800 text-zinc-400 space-y-2">
                  <div className="flex items-center justify-between py-1.5">
                    <span className="flex items-center gap-2"><Share2 className="w-3.5 h-3.5 text-eco-blue" /> Official Email:</span>
                    <span className="text-white font-medium">partnership@ecoidn.com</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span>LinkedIn / X (Twitter):</span>
                    <span className="text-eco-blue font-medium">@ecoidn_official</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span>Instagram:</span>
                    <span className="text-eco-blue font-medium">@ecoidn.id</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;