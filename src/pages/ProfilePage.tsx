import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, Mail, Linkedin, Calendar } from 'lucide-react';
import { Profile } from '../constants';
import { Navbar, Footer } from '../components/Layout';
import { SectionHeader, Card } from '../components/UI';

interface ProfilePageProps {
  profile: Profile;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ profile }) => {
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
              {profile.name}
            </h1>
            <p className="text-2xl md:text-3xl font-display italic text-text-secondary mb-8 leading-relaxed">
              {profile.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#consultation" 
                className="px-8 py-3 rounded-sm font-mono text-xs uppercase tracking-widest transition-all"
                style={{ backgroundColor: profile.accentColor, color: 'var(--color-base)' }}
              >
                Consultation
              </a>
              <a 
                href="#resume" 
                className="px-8 py-3 rounded-sm border border-border font-mono text-xs uppercase tracking-widest text-text-primary hover:bg-white/5 transition-all"
              >
                View Resume
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
                src={`https://picsum.photos/seed/${profile.id}/800/1000`} 
                alt={profile.name}
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
            </div>
            {/* Floating Stats/Badge */}
            <div className="absolute -bottom-6 -right-6 bg-surface-2 p-6 border border-border rounded-sm hidden md:block">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Experience</p>
              <p className="text-2xl font-display font-semibold text-text-primary">12+ Years</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio / About */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <SectionHeader title="The Approach" eyebrow="Leadership Philosophy" accentColor={profile.accentColor} />
        <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
          {profile.bio}
        </p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 md:px-12 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Selected Work" eyebrow="Portfolio" accentColor={profile.accentColor} />
          <div className="grid md:grid-cols-2 gap-8">
            {profile.projects.map((project) => (
              <Card 
                key={project.id}
                title={project.title}
                subtitle={`${project.category} · ${project.year}`}
                description={project.description}
                tags={project.tags}
                accentColor={profile.accentColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers (Arunabh only) */}
      {profile.whitepapers && (
        <section id="whitepapers" className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="Insights & Research" eyebrow="Whitepapers" accentColor={profile.accentColor} />
            <div className="grid md:grid-cols-3 gap-8">
              {profile.whitepapers.map((paper) => (
                <motion.div 
                  key={paper.id}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-surface border border-border rounded-sm"
                >
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-4 block">{paper.date}</span>
                  <h3 className="text-xl font-display font-semibold text-text-primary mb-4">{paper.title}</h3>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">{paper.excerpt}</p>
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
          <SectionHeader title="Career Trajectory" eyebrow="Resume" accentColor={profile.accentColor} />
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* HTML Resume Summary */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-surface p-8 border border-border rounded-sm">
                <h4 className="font-display text-xl font-semibold text-text-primary mb-4">Core Competencies</h4>
                <ul className="space-y-3">
                  {['Strategic Planning', 'Stakeholder Management', 'Process Optimization', 'Team Leadership', 'Risk Mitigation'].map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-text-secondary text-sm">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: profile.accentColor }} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface p-8 border border-border rounded-sm">
                <h4 className="font-display text-xl font-semibold text-text-primary mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Master of Business Administration</p>
                    <p className="text-text-muted text-xs">University of Technology · 2012</p>
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">B.S. in Computer Science</p>
                    <p className="text-text-muted text-xs">State Engineering College · 2009</p>
                  </div>
                </div>
              </div>
              <a 
                href={profile.resumeUrl} 
                download 
                className="flex items-center justify-center gap-3 w-full py-4 bg-surface-2 border border-border text-text-primary font-mono text-xs uppercase tracking-widest hover:bg-surface transition-all"
              >
                <Download size={16} />
                Download PDF Resume
              </a>
            </div>

            {/* Embedded PDF Preview */}
            <div className="lg:col-span-2">
              <div className="aspect-[1/1.4] bg-surface-2 border border-border rounded-sm overflow-hidden relative group">
                <iframe 
                  src={`${profile.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`} 
                  className="w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity"
                  title="Resume Preview"
                />
                <div className="absolute inset-0 pointer-events-none border-4 border-border/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="Let's Connect" eyebrow="Consultation" accentColor={profile.accentColor} />
          <p className="text-xl text-text-secondary mb-12 font-light">
            Available for strategic consulting, leadership coaching, and speaking engagements. 
            Reach out to discuss how we can drive excellence in your organisation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:contact@inkinsighthub.com" className="p-8 bg-surface border border-border rounded-sm hover:border-text-muted/20 transition-all group">
              <Mail size={24} className="mx-auto mb-4 text-text-muted group-hover:text-text-primary transition-colors" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Email</p>
            </a>
            <a href="#" className="p-8 bg-surface border border-border rounded-sm hover:border-text-muted/20 transition-all group">
              <Linkedin size={24} className="mx-auto mb-4 text-text-muted group-hover:text-text-primary transition-colors" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">LinkedIn</p>
            </a>
            <a href="#" className="p-8 bg-surface border border-border rounded-sm hover:border-text-muted/20 transition-all group">
              <Calendar size={24} className="mx-auto mb-4 text-text-muted group-hover:text-text-primary transition-colors" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Book a Call</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
