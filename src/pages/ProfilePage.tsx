import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, Mail, Linkedin, Calendar } from 'lucide-react';
import { Profile } from '../constants';
import { Navbar, Footer } from '../components/Layout';
import { SectionHeader, Card } from '../components/UI';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  profile: Profile;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ profile }) => {
  const { t } = useTranslation();
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-base min-h-screen pt-16">
      <Navbar profileId={profile.id} name={profile.name} accentColor={profile.accentColor} />

      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-[3px] mb-8" style={{ backgroundColor: profile.accentColor }} />
            <h1 className="text-5xl md:text-7xl font-display font-light text-text-primary mb-6 leading-tight">
              {t(`profiles.${profile.id}.name`, { defaultValue: profile.name })}
            </h1>
            <p className="text-2xl md:text-3xl font-display italic text-text-secondary mb-8 leading-relaxed">
              {t(`profiles.${profile.id}.tagline`)}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#consultation" 
                onClick={(e) => scrollToSection(e, 'consultation')}
                className="px-8 py-3 rounded-sm font-mono text-xs uppercase tracking-widest transition-all"
                style={{ backgroundColor: profile.accentColor, color: 'var(--color-base)' }}
              >
                {t('nav.consultation')}
              </a>
              <a 
                href="#resume" 
                onClick={(e) => scrollToSection(e, 'resume')}
                className="px-8 py-3 rounded-sm border border-border font-mono text-xs uppercase tracking-widest text-text-primary hover:bg-white/5 transition-all"
              >
                {t('hero.viewResume')}
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-surface rounded-sm overflow-hidden border border-border relative">
              <img 
                src={profile.imageUrl} 
                alt={profile.name}
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  // Fallback to placeholder if local image is missing
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${profile.id}/800/1000`;
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
            </div>
            {/* Floating Stats/Badge */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-surface-2 p-4 md:p-6 border border-border rounded-sm block">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">{t('hero.experience')}</p>
              <p className="text-xl md:text-2xl font-display font-semibold text-text-primary">{t('hero.years')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio / About */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <SectionHeader title={t('sections.approach')} eyebrow={t('sections.philosophy')} accentColor={profile.accentColor} />
        <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
          {t(`profiles.${profile.id}.bio`)}
        </p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 md:px-12 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={t('sections.selectedWork')} eyebrow={t('nav.portfolio')} accentColor={profile.accentColor} />
          <div className="grid md:grid-cols-2 gap-8">
            {profile.projects.map((project) => (
              <Card 
                key={project.id}
                title={t(`profiles.${profile.id}.projects.${project.id}.title`)}
                subtitle={`${t(`profiles.${profile.id}.projects.${project.id}.category`)} · ${project.year}`}
                description={t(`profiles.${profile.id}.projects.${project.id}.description`)}
                tags={project.tags}
                accentColor={profile.accentColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers and Blogs */}
      {profile.whitepapers && (
        <section id="whitepapers" className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title={t('sections.insights')} eyebrow={t('nav.whitepapers')} accentColor={profile.accentColor} />
            <div className="grid md:grid-cols-3 gap-8">
              {profile.whitepapers.map((paper) => (
                <motion.div 
                  key={paper.id}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-surface border border-border rounded-sm"
                >
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-4 block">{paper.date}</span>
                  <h3 className="text-xl font-display font-semibold text-text-primary mb-4">
                    {t(`profiles.${profile.id}.whitepapers.${paper.id}.title`)}
                  </h3>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    {t(`profiles.${profile.id}.whitepapers.${paper.id}.excerpt`)}
                  </p>
                  <div className="flex gap-4">
                    {paper.mediumUrl && (
                      <a href={paper.mediumUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {paper.pdfUrl && (
                      <a href={paper.pdfUrl} className="text-text-muted hover:text-text-primary transition-colors">
                        <FileText size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resume Section */}
      <section id="resume" className="py-24 px-6 md:px-12 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={t('sections.career')} eyebrow={t('nav.resume')} accentColor={profile.accentColor} />
          
          <div className="mb-12">
            <a 
              href={profile.resumeUrl} 
              download 
              className="inline-flex items-center gap-3 px-8 py-4 bg-surface-2 border border-border text-text-primary font-mono text-xs uppercase tracking-widest hover:bg-surface transition-all rounded-sm"
            >
              <Download size={16} />
              {t('sections.downloadResume')}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.resumeSections.filter(s => s.isVisible).map((section) => (
              <div 
                key={section.id} 
                className={`bg-surface p-8 border border-border rounded-sm ${
                  section.layout === 'summary' || section.id === 'experience' ? 'md:col-span-2' : ''
                }`}
              >
                <h4 className="font-display text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                  <div className="w-8 h-[1px]" style={{ backgroundColor: profile.accentColor }} />
                  {t(`profiles.${profile.id}.resumeSections.${section.id}.title`)}
                </h4>
                
                {section.layout === 'bullets' ? (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t(`profiles.${profile.id}.resumeSections.${section.id}.items`, { returnObjects: true }) instanceof Array && 
                      (t(`profiles.${profile.id}.resumeSections.${section.id}.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-text-secondary text-sm">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: profile.accentColor }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : section.layout === 'summary' ? (
                  <p className="text-text-secondary leading-relaxed max-w-4xl">
                    {t(`profiles.${profile.id}.resumeSections.${section.id}.content`)}
                  </p>
                ) : (
                  <div className="space-y-8">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="relative pl-8 border-l border-border/50">
                        <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full" style={{ backgroundColor: profile.accentColor }} />
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                          <h5 className="text-text-primary font-semibold text-lg">
                            {t(`profiles.${profile.id}.resumeSections.${section.id}.items.${item.id}.primary`)}
                          </h5>
                          {item.secondary && (
                            <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest bg-base px-2 py-1 rounded-sm border border-border">
                              {t(`profiles.${profile.id}.resumeSections.${section.id}.items.${item.id}.secondary`)}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-text-secondary text-sm leading-relaxed max-w-4xl">
                            {t(`profiles.${profile.id}.resumeSections.${section.id}.items.${item.id}.description`)}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title={t('sections.connect')} eyebrow={t('nav.consultation')} accentColor={profile.accentColor} />
          <p className="text-xl text-text-secondary mb-12 font-light">
            {t('consultation.description')}
          </p>
          <div className={`grid ${profile.showBookACall ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
            <a href={`mailto:${profile.email}`} className="p-8 bg-surface border border-border rounded-sm hover:border-text-muted/20 transition-all group">
              <Mail size={24} className="mx-auto mb-4 text-text-muted group-hover:text-text-primary transition-colors" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">{t('consultation.email')}</p>
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-8 bg-surface border border-border rounded-sm hover:border-text-muted/20 transition-all group">
              <Linkedin size={24} className="mx-auto mb-4 text-text-muted group-hover:text-text-primary transition-colors" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">{t('consultation.linkedin')}</p>
            </a>
            {profile.showBookACall && (
              <a href="#" className="p-8 bg-surface border border-border rounded-sm hover:border-text-muted/20 transition-all group">
                <Calendar size={24} className="mx-auto mb-4 text-text-muted group-hover:text-text-primary transition-colors" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">{t('consultation.bookCall')}</p>
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer profile={profile} />
    </div>
  );
};
