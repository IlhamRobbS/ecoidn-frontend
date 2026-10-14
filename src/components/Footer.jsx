import ecoidnLogo from '../assets/ecoidn.svg';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src={ecoidnLogo} alt="Ecoidn Logo" className="h-7 w-auto opacity-80" />
          <span className="text-lg font-bold tracking-wider text-white">
            ECO<span className="text-eco-blue">IDN</span>
          </span>
          <span className="text-xs text-zinc-600 border-l border-zinc-800 pl-3 ml-1">
            Industrial DePIN & Polymer Engineering
          </span>
        </div>
        <div className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} PT Ecoidn Circular Manufacturing. Cilegon Industrial Estate, Indonesia.
        </div>
      </div>
    </footer>
  );
};

export default Footer;