"use client";

import { memo } from "react";
import Link from "next/link";
import { Github, Send, Mail, Linkedin, Phone, MapPin } from "lucide-react";
import XLogo from "@/components/icons/XLogo";
import { useTranslations } from "@/hooks/useTranslations";
import TranslatedText from "@/components/ui/TranslatedText";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const translations = useTranslations();
  const footer = translations.footer;

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/DimaBagZ", icon: Github },
    { name: "Telegram", href: "https://t.me/DimaBagz", icon: Send },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/дмитрий-багинский-39a63738b",
      icon: Linkedin,
    },
    { name: "X", href: "https://x.com/DimaBagZ", icon: XLogo },
    { name: "Email", href: "mailto:DimaBagZ@yandex.ru", icon: Mail },
  ];

  const contactItems = [
    {
      key: "email",
      icon: Mail,
      content: (
        <a href="mailto:DimaBagZ@yandex.ru" className="footer-contact__value">
          DimaBagZ@yandex.ru
        </a>
      ),
    },
    {
      key: "phone",
      icon: Phone,
      content: (
        <a href="tel:+79997008470" className="footer-contact__value">
          +7 (999) 700-84-70
        </a>
      ),
    },
    {
      key: "telegram",
      icon: Send,
      content: (
        <a
          href="https://t.me/DimaBagz"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-contact__value"
        >
          @DimaBagz
        </a>
      ),
    },
    {
      key: "location",
      icon: MapPin,
      content: (
        <TranslatedText as="span" className="footer-contact__value">
          {footer.location}
        </TranslatedText>
      ),
    },
  ];

  return (
    <footer className="footer-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <TranslatedText as="h3" className="text-2xl font-bold mb-4 text-primary">
              {translations.header.logo}
            </TranslatedText>
            <TranslatedText as="p" className="text-muted mb-4">
              {footer.brandDescription}
            </TranslatedText>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon-btn"
                    aria-label={social.name}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <TranslatedText as="h4" className="text-lg font-semibold mb-4 text-primary">
              {footer.quickLinksTitle}
            </TranslatedText>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link">
                  <TranslatedText>{footer.quickLinks.home}</TranslatedText>
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  <TranslatedText>{footer.quickLinks.about}</TranslatedText>
                </Link>
              </li>
              <li>
                <Link href="/skills" className="footer-link">
                  <TranslatedText>{footer.quickLinks.skills}</TranslatedText>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footer-link">
                  <TranslatedText>{footer.quickLinks.projects}</TranslatedText>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  <TranslatedText>{footer.quickLinks.contact}</TranslatedText>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <TranslatedText as="h4" className="footer-contact__title">
              {footer.contactTitle}
            </TranslatedText>
            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.key} className="footer-contact__row">
                    <span className="footer-icon-btn footer-icon-btn--static" aria-hidden="true">
                      <Icon size={15} strokeWidth={2.1} />
                    </span>
                    {item.content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-theme/60 mt-8 pt-8 text-center text-muted">
          <TranslatedText as="p">
            &copy; {currentYear} Дмитрий Багинский. {footer.rights}
          </TranslatedText>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
