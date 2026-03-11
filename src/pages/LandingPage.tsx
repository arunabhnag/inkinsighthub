import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sun, Moon, MapPin, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { LOCALIZATION_ENABLED } from '../constants';

export const LandingPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-base flex flex-col md:flex-row relative">
      {/* Theme & Language Toggle Overlay */}
      <div className="absolute top-6 right-6 z-50 flex flex-col gap-3">
        <button 
          onClick={toggleTheme}
          className="p-3 bg-surface border border-border rounded-full text-text-muted hover:text-text-primary transition-all shadow-lg"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {LOCALIZATION_ENABLED && (
          <button 
            onClick={toggleLanguage}
            className="p-3 bg-surface border border-border rounded-full text-text-muted hover:text-text-primary transition-all shadow-lg flex items-center justify-center gap-2 min-w-[60px]"
            aria-label="Toggle Language"
          >
            <Languages size={20} />
            <span className="font-mono text-[10px] font-bold">{i18n.language === 'en' ? 'ES' : 'EN'}</span>
          </button>
        )}
      </div>

      {/* Neha Tile */}
      <Link 
        to="/neha" 
        className="flex-1 relative group overflow-hidden border-b md:border-b-0 md:border-r border-border"
      >
        <div className="absolute inset-0 bg-accent-neha/5 group-hover:bg-accent-neha/10 transition-colors duration-500" />
        <div className="relative h-full flex flex-col justify-center p-12 md:p-24 md:pr-40 lg:pr-56 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-[2px] bg-accent-neha mb-8" />
            <h1 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-4 uppercase">
              {t('landing.neha.name', { defaultValue: 'NEHA BABU NAG' }).split(' ').slice(0, 1).join(' ')} <br /> {t('landing.neha.name', { defaultValue: 'NEHA BABU NAG' }).split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-accent-neha font-mono text-xs uppercase tracking-[0.25em] mb-4">
              {t('landing.neha.role', { defaultValue: 'Service Delivery Leadership' })}
            </p>
            <div className="flex items-center gap-2 text-accent-neha/70 font-mono text-[9px] uppercase tracking-widest mb-12">
              <MapPin size={12} />
              <span className="font-bold">{t('landing.neha.residency')}</span>
            </div>
            <div className="flex items-center gap-3 text-text-muted group-hover:text-text-primary transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-widest">{t('landing.neha.enter')}</span>
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
        <div className="relative h-full flex flex-col justify-center p-12 md:p-24 md:pl-40 lg:pl-56 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-[2px] bg-accent-arunabh mb-8" />
            <h1 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-4 uppercase">
              {t('landing.arunabh.name', { defaultValue: 'ARUNABH NAG' }).split(' ').slice(0, 1).join(' ')} <br /> {t('landing.arunabh.name', { defaultValue: 'ARUNABH NAG' }).split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-accent-arunabh font-mono text-xs uppercase tracking-[0.25em] mb-4">
              {t('landing.arunabh.role', { defaultValue: 'Technical Writing Leadership' })}
            </p>
            <div className="flex items-center gap-2 text-accent-arunabh/70 font-mono text-[9px] uppercase tracking-widest mb-12">
              <MapPin size={12} />
              <span className="font-bold">{t('landing.arunabh.residency')}</span>
            </div>
            <div className="flex items-center gap-3 text-text-muted group-hover:text-text-primary transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-widest">{t('landing.arunabh.enter')}</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>
        </div>
      </Link>

      {/* Brand Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
        <div className="bg-base px-6 py-3 md:px-8 md:py-4 border border-border shadow-2xl whitespace-nowrap">
          <span className="font-display text-lg md:text-2xl font-semibold tracking-tighter text-text-primary">{t('landing.brand')}</span>
        </div>
      </div>
    </div>
  );
};
