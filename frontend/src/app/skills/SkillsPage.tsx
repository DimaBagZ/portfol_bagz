"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Cloud,
  Layers,
  Monitor,
  Server,
  Smartphone,
} from "lucide-react";
import {
  HeroSection,
  ContentSection,
  Card,
  Button,
  TranslatedText,
} from "@/components/ui";
import { skillsShowcaseGroups } from "@/data/skillsShowcase";
import type { SkillsShowcaseGroupId } from "@/data/skillsShowcase";
import { useTranslations } from "@/hooks/useTranslations";

const groupIcons: Record<SkillsShowcaseGroupId, typeof Layers> = {
  product: Layers,
  web: Monitor,
  backend: Server,
  mobile: Smartphone,
  devops: Cloud,
  ai: Bot,
};

export default function SkillsPage() {
  const translations = useTranslations();
  const page = translations.skillsPage;

  return (
    <div className="min-h-screen">
      <HeroSection title={page.pageTitle} subtitle={page.pageSubtitle} />

      <ContentSection>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-muted text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <TranslatedText>{page.sidebarNote}</TranslatedText>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsShowcaseGroups.map((group, index) => {
            const Icon = groupIcons[group.id];
            const content = page.groups[group.id];

            return (
              <Card key={group.id} delay={0.08 * index} className="h-full">
                <div className="flex items-start gap-3 mb-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                    <Icon size={22} />
                  </span>
                  <div>
                    <TranslatedText as="h2" className="text-xl font-bold text-primary">
                      {content.title}
                    </TranslatedText>
                    <TranslatedText as="p" className="text-sm text-muted mt-1">
                      {content.description}
                    </TranslatedText>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {content.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <TranslatedText>{item}</TranslatedText>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {group.stack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/projects" size="lg" className="group">
            <span className="flex items-center">
              <TranslatedText>{page.ctaProjects}</TranslatedText>
              <ArrowRight size={18} className="ml-2" />
            </span>
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            <TranslatedText>{page.ctaContact}</TranslatedText>
          </Button>
        </div>
      </ContentSection>
    </div>
  );
}
