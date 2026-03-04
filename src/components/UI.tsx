import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  accentColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, eyebrow, accentColor }) => (
  <div className="mb-12">
    {eyebrow && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted block mb-3"
      >
        {eyebrow}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display font-semibold text-text-primary relative inline-block"
    >
      {title}
      <div 
        className="absolute -bottom-2 left-0 h-[2px] w-12" 
        style={{ backgroundColor: accentColor || 'var(--color-text-muted)' }}
      />
    </motion.h2>
  </div>
);

interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  accentColor: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, description, tags, accentColor }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-surface border border-border rounded-sm overflow-hidden group transition-all duration-300 hover:border-text-muted/20"
  >
    <div className="h-1 w-full" style={{ backgroundColor: accentColor }} />
    <div className="p-8">
      {subtitle && (
        <span className="font-mono text-[10px] uppercase tracking-widest mb-2 block" style={{ color: accentColor }}>
          {subtitle}
        </span>
      )}
      <h3 className="text-xl font-display font-semibold text-text-primary mb-3 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {description}
      </p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-surface-2 text-text-muted rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);
