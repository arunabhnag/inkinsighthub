import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EXTRA_PROJECTS } from '../constants';
import { Navbar, Footer } from '../components/Layout';
import { SectionHeader } from '../components/UI';
import { useTranslation } from 'react-i18next';

export const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const visibleProjects = EXTRA_PROJECTS
    .filter(p => p.isVisible)
    .sort((a, b) => {
      if (a.isDefunct === b.isDefunct) return 0;
      return a.isDefunct ? 1 : -1;
    });

  return (
    <div className="bg-base min-h-screen pt-16">
      <Navbar />
      
      <main className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors font-mono text-[10px] uppercase tracking-widest mb-8"
          >
            <ArrowLeft size={14} />
            {t('nav.backToHub')}
          </Link>
          <SectionHeader 
            title={t('projectsPage.title')} 
            eyebrow={t('projectsPage.eyebrow')} 
            accentColor="var(--color-text-primary)" 
          />
          <p className="text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
            {t('projectsPage.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.path}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group block bg-surface border border-border rounded-sm overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.thumbnailUrl} 
                  alt={t(`extraProjects.${project.id}.title`, { defaultValue: project.title })}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-base/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 right-4 p-2 bg-base/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} className="text-text-primary" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-display font-semibold text-text-primary mb-3 group-hover:text-text-primary transition-colors flex items-center gap-3">
                  {project.isDefunct && (
                    <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-mono uppercase tracking-widest rounded-sm">
                      {t('projectsPage.defunct')}
                    </span>
                  )}
                  {t(`extraProjects.${project.id}.title`, { defaultValue: project.title })}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {t(`extraProjects.${project.id}.description`, { defaultValue: project.description })}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 bg-base/50 border border-border rounded-full text-[9px] font-mono text-text-muted uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted group-hover:text-text-primary transition-colors">
                  {t('projectsPage.viewProject')} →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="py-24 text-center border border-dashed border-border rounded-sm">
            <p className="text-text-muted font-mono text-xs uppercase tracking-widest">{t('projectsPage.empty')}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
