"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from "lucide-react";
import {
  HeroSection,
  ContentSection,
  Card,
  Button,
  TranslatedText,
} from "@/components/ui";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/config/constants";
import { validateContactForm, type ContactFormData } from "@/utils/validation";
import { sendToTelegram } from "@/utils/telegram";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = useTranslations();
  const contactTexts = translations.contact;
  const { language, isHydrated } = useLanguage();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация формы
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    setIsSubmitting(true);

    try {
      // Отправка в Telegram
      const result = await sendToTelegram({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.success) {
        alert(contactTexts.notifications.success);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback: создаем email ссылку
        try {
          const response = await fetch("/api/email-fallback", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
            }),
          });

          if (response.ok) {
            const result = await response.json();
            const mailtoUrl = result.mailtoUrl;

            if (confirm(contactTexts.notifications.fallbackPrompt)) {
              window.open(mailtoUrl, "_blank");
            }
          } else {
            alert(contactTexts.notifications.error);
          }
        } catch (fallbackError) {
          console.error("Ошибка fallback:", fallbackError);
          alert(contactTexts.notifications.error);
        }
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert(contactTexts.notifications.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = CONTACT_INFO.map((info) => {
    const Icon = info.icon === "Mail" ? Mail : info.icon === "Phone" ? Phone : MapPin;
    const value =
      typeof info.value === "string"
        ? info.value
        : info.value[language] ?? info.value.en ?? info.value.ru;

    return {
      ...info,
      title: contactTexts.contactInfo[info.id],
      value,
      icon: Icon,
    };
  });

  const socialLinks = SOCIAL_LINKS.map((social) => ({
    ...social,
    icon:
      social.icon === "Github"
        ? Github
        : social.icon === "Send"
        ? Send
        : social.icon === "Linkedin"
        ? Linkedin
        : social.icon === "Mail"
        ? Mail
        : Twitter,
  }));

  return (
    <div className="min-h-screen">
      <HeroSection title={contactTexts.title} subtitle={contactTexts.subtitle} />

      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card delay={0.2} className="shadow-lg">
            <TranslatedText as="h2" className="text-2xl font-bold text-primary mb-6">
              {contactTexts.form.title}
            </TranslatedText>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <TranslatedText
                  as="label"
                  htmlFor="name"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  {contactTexts.form.name}
                </TranslatedText>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-theme rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                  placeholder={isHydrated ? contactTexts.form.namePlaceholder : ""}
                  suppressHydrationWarning
                />
              </div>

              <div>
                <TranslatedText
                  as="label"
                  htmlFor="email"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  {contactTexts.form.email}
                </TranslatedText>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-theme rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                  placeholder={isHydrated ? contactTexts.form.emailPlaceholder : ""}
                  suppressHydrationWarning
                />
              </div>

              <div>
                <TranslatedText
                  as="label"
                  htmlFor="subject"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  {contactTexts.form.subject}
                </TranslatedText>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-theme rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                  placeholder={isHydrated ? contactTexts.form.subjectPlaceholder : ""}
                  suppressHydrationWarning
                />
              </div>

              <div>
                <TranslatedText
                  as="label"
                  htmlFor="message"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  {contactTexts.form.message}
                </TranslatedText>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder={isHydrated ? contactTexts.form.messagePlaceholder : ""}
                  suppressHydrationWarning
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                    <TranslatedText>{contactTexts.form.submitting}</TranslatedText>
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    <TranslatedText>{contactTexts.form.submit}</TranslatedText>
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <Card delay={0.4} className="space-y-8">
            <div>
              <TranslatedText as="h2" className="text-2xl font-bold text-primary mb-6">
                {contactTexts.infoTitle}
              </TranslatedText>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-theme"
                    >
                      <div className="bg-primary/20 p-3 rounded-lg mr-4">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <TranslatedText as="h3" className="font-semibold text-primary">
                          {info.title}
                        </TranslatedText>
                        <TranslatedText as="p" className="text-muted">
                          {info.value}
                        </TranslatedText>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div>
              <TranslatedText as="h3" className="text-xl font-bold text-primary mb-4">
                {contactTexts.socialTitle}
              </TranslatedText>

              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-theme ${social.color}`}
                      title={social.name}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-primary/10 p-6 rounded-lg border border-primary/20"
            >
              <TranslatedText as="h3" className="text-lg font-semibold text-primary mb-3">
                {contactTexts.responseTitle}
              </TranslatedText>
              <TranslatedText as="p" className="text-muted mb-2">
                {contactTexts.responseText}
              </TranslatedText>
              <TranslatedText as="p" className="text-sm text-muted">
                {contactTexts.responseSchedule}
              </TranslatedText>
            </motion.div>
          </Card>
        </div>
      </ContentSection>
    </div>
  );
}
