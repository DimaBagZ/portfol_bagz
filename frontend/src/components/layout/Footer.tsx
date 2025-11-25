import { memo } from "react";
import Link from "next/link";
import { Github, Send, Mail } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const translations = useTranslations();
  const footer = translations.footer;

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/DimaBagZ", icon: Github },
    { name: "Telegram", href: "https://t.me/DimaBagz", icon: Send },
    { name: "Email", href: "mailto:DimaBagZ@yandex.ru", icon: Mail },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary" suppressHydrationWarning>
              {translations.header.logo}
            </h3>
            <p className="text-muted mb-4" suppressHydrationWarning>
              {footer.brandDescription}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4 text-primary"
              suppressHydrationWarning
            >
              {footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-primary transition-colors duration-200"
                  suppressHydrationWarning
                >
                  {footer.quickLinks.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted hover:text-primary transition-colors duration-200"
                  suppressHydrationWarning
                >
                  {footer.quickLinks.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted hover:text-primary transition-colors duration-200"
                  suppressHydrationWarning
                >
                  {footer.quickLinks.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-primary transition-colors duration-200"
                  suppressHydrationWarning
                >
                  {footer.quickLinks.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg font-semibold mb-4 text-primary"
              suppressHydrationWarning
            >
              {footer.contactTitle}
            </h4>
            <div className="space-y-2 text-muted">
              <p>📧 DimaBagZ@yandex.ru</p>
              <p>📱 +7 (999) 700-84-70</p>
              <p>
                ✈️{" "}
                <a
                  href="https://t.me/DimaBagz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @DimaBagz
                </a>
              </p>
              <p suppressHydrationWarning>📍 {footer.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-theme mt-8 pt-8 text-center text-muted">
          <p suppressHydrationWarning>
            &copy; {currentYear} Дмитрий Багинский. {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
