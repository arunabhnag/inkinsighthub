import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const LandingPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-base flex flex-col md:flex-row relative">
      {/* Theme Toggle Overlay */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={toggleTheme}
          className="p-3 bg-surface border border-border rounded-full text-text-muted hover:text-text-primary transition-all shadow-lg"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Neha Tile */}
      <Link 
        to="/neha" 
        className="flex-1 relative group overflow-hidden border-b md:border-b-0 md:border-r border-border"
      >
        <div className="absolute inset-0 bg-accent-neha/5 group-hover:bg-accent-neha/10 transition-colors duration-500" />
        <div className="relative h-full flex flex-col justify-center p-12 md:p-24 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-[2px] bg-accent-neha mb-8" />
            <h1 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-4">
              Neha <br /> Babu Nag
            </h1>
            <p className="text-accent-neha font-mono text-xs uppercase tracking-[0.25em] mb-12">
              Service Delivery Leadership
            </p>
            <div className="flex items-center gap-3 text-text-muted group-hover:text-text-primary transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-widest">Enter Portfolio</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>
        </div>
      </Link>

      {/* Arunabh Tile */}
      <Link 
        to="/arunabh" 
        className="flex-1 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-accent-arunabh/5 group-hover:bg-accent-arunabh/10 transition-colors duration-500" />
        <div className="relative h-full flex flex-col justify-center p-12 md:p-24 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-[2px] bg-accent-arunabh mb-8" />
            <h1 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-4">
              Arunabh <br /> Nag
            </h1>
            <p className="text-accent-arunabh font-mono text-xs uppercase tracking-[0.25em] mb-12">
              Technical Writing Leadership
            </p>
            <div className="flex items-center gap-3 text-text-muted group-hover:text-text-primary transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-widest">Enter Portfolio</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>
        </div>
      </Link>

      {/* Brand Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        <div className="bg-base px-8 py-4 border border-border">
          <span className="font-display text-2xl font-semibold tracking-tighter text-text-primary">InkInsightHub</span>
        </div>
      </div>
    </div>
  );
};
