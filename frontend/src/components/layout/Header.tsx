"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "@/contexts/SidebarContext";
import { ThemeToggle } from "@/components/features/theme";
import { LanguageSwitcher } from "@/components/features/language";
import { NAVIGATION } from "@/config/constants";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/hooks/useLanguage";
import { TranslatedText } from "@/components/ui";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCollapsed, toggleSidebar } = useSidebar();
  const translations = useTranslations();
  const { isHydrated } = useLanguage();

  const navigation = NAVIGATION;

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-theme fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            DB.dev
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-muted hover:text-primary transition-colors duration-200"
                suppressHydrationWarning
              >
                <TranslatedText>{translations.header.nav[item.key]}</TranslatedText>
              </Link>
            ))}
            <button
              className="p-2 rounded-md text-muted hover:text-primary hover:bg-muted transition-colors duration-200"
              onClick={toggleSidebar}
              title={
                isHydrated
                  ? isCollapsed
                    ? translations.header.buttons.expandSidebar
                    : translations.header.buttons.collapseSidebar
                  : ""
              }
              suppressHydrationWarning
            >
              {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>

          {/* Mobile buttons */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-md text-muted hover:text-primary hover:bg-muted"
              onClick={toggleSidebar}
              title={isHydrated ? translations.header.buttons.openProfile : ""}
              suppressHydrationWarning
            >
              <User size={24} />
            </button>
            <button
              className="p-2 rounded-md text-muted hover:text-primary hover:bg-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 bg-card border-t border-theme">
              <div className="px-3">
                <LanguageSwitcher />
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 text-muted hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  suppressHydrationWarning
                >
                  <TranslatedText>{translations.header.nav[item.key]}</TranslatedText>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Убираем memo, чтобы компонент перерендеривался при изменении языка через контекст
export default Header;
