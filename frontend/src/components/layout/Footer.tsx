import { memo } from "react";
import Link from "next/link";
import { Github, Send, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/DimaBagZ", icon: Github },
    { name: "Telegram", href: "https://t.me/@DimaBagz", icon: Send },
    { name: "Email", href: "mailto:DimaBagZ@yandex.ru", icon: Mail },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Портфолио-BAGZ</h3>
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
              <p>📧 DimaBagZ@yandex.ru</p>
              <p>📱 +7 (999) 700-84-70</p>
              <p>✈️ @DimaBagz</p>
              <p>📍 Москва, Россия</p>
            </div>
          </div>
        </div>

        <div className="border-t border-theme mt-8 pt-8 text-center text-muted">
          <p>&copy; {currentYear} Дмитрий Багинский. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
