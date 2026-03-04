import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowLeft, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  profileId?: 'neha' | 'arunabh';
  name?: string;
  accentColor?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ profileId, name, accentColor }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = profileId ? [
    { name: 'Portfolio', href: `#portfolio` },
    { name: 'Resume', href: `#resume` },
    { name: 'Consultation', href: `#consultation` },
    ...(profileId === 'arunabh' ? [{ name: 'Whitepapers', href: `#whitepapers` }] : [])
  ] : [];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base/90 backdrop-blur-md border-b border-border h-16 flex items-center px-6 md:px-12 justify-between">
      <div className="flex items-center gap-4">
        {!isHome && (
          <Link to="/" className="text-text-muted hover:text-text-primary transition-colors">
            <ArrowLeft size={18} />
          </Link>
        )}
        <Link to={profileId ? `/${profileId}` : '/'} className="font-display text-xl font-semibold tracking-tight text-text-primary">
          {name || 'InkInsightHub'}
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-secondary hover:text-text-primary transition-colors relative group"
          >
            {link.name}
            <span 
              className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: accentColor }}
            />
          </a>
        ))}
        
        <button 
          onClick={toggleTheme}
          className="p-2 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {!isHome && (
          <Link to="/" className="text-[9px] font-mono text-text-muted uppercase tracking-widest border border-border px-2 py-1 rounded-sm hover:border-text-muted/30">
            Switch View
          </Link>
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="flex items-center gap-4 md:hidden">
        <button 
          onClick={toggleTheme}
          className="p-2 text-text-muted hover:text-text-primary transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-surface border-b border-border p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono uppercase tracking-[0.2em] text-text-secondary"
              >
                {link.name}
              </a>
            ))}
            <Link to="/" onClick={() => setIsOpen(false)} className="text-xs font-mono text-text-muted uppercase tracking-widest">
              Back to Hub
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer: React.FC = () => (
  <footer className="py-12 px-6 md:px-12 border-t border-border bg-base">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h3 className="font-display text-xl font-semibold text-text-primary mb-2">InkInsightHub</h3>
        <p className="text-text-muted text-xs font-mono uppercase tracking-widest">© 2026 · Professional Leadership Portfolios</p>
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-text-muted hover:text-text-primary transition-colors font-mono text-xs uppercase tracking-widest">LinkedIn</a>
        <a href="#" className="text-text-muted hover:text-text-primary transition-colors font-mono text-xs uppercase tracking-widest">Medium</a>
        <a href="#" className="text-text-muted hover:text-text-primary transition-colors font-mono text-xs uppercase tracking-widest">Email</a>
      </div>
    </div>
  </footer>
);
