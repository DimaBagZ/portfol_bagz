import { memo } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/username", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/username", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/username", icon: Twitter },
    { name: "Email", href: "mailto:email@example.com", icon: Mail },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Bagiskij</h3>
            <p className="text-muted mb-4">
              Fullstack разработчик, создающий современные веб-приложения
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
            <h4 className="text-lg font-semibold mb-4 text-primary">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-primary transition-colors duration-200"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted hover:text-primary transition-colors duration-200"
                >
                  О себе
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted hover:text-primary transition-colors duration-200"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-primary transition-colors duration-200"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Контакты</h4>
            <div className="space-y-2 text-muted">
              <p>📧 email@example.com</p>
              <p>📱 +7 (999) 123-45-67</p>
              <p>📍 Москва, Россия</p>
            </div>
          </div>
        </div>

        <div className="border-t border-theme mt-8 pt-8 text-center text-muted">
          <p>&copy; {currentYear} Bagiskij. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
