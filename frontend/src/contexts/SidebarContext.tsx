"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  isMobile: boolean;
  isHydrated: boolean;
  toggleSidebar: () => void;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Устанавливаем флаг гидратации
    setIsHydrated(true);

    // Восстанавливаем сохраненное состояние сайдбара
    const savedCollapsed = localStorage.getItem("sidebar-collapsed");
    if (savedCollapsed !== null) {
      setIsCollapsed(JSON.parse(savedCollapsed));
    }

    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Сохраняем состояние сайдбара в localStorage
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("sidebar-collapsed", JSON.stringify(isCollapsed));
    }
  }, [isCollapsed, isHydrated]);

  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const setCollapsed = useCallback((collapsed: boolean) => {
    setIsCollapsed(collapsed);
  }, []);

  const value = useMemo(
    () => ({
      isCollapsed,
      isMobile,
      isHydrated,
      toggleSidebar,
      setCollapsed,
    }),
    [isCollapsed, isMobile, isHydrated, toggleSidebar, setCollapsed]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
