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
  // Начинаем с collapsed=true чтобы избежать мерцания при загрузке
  // Состояние будет восстановлено из localStorage после гидратации
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Восстанавливаем сохраненное состояние сайдбара
    const savedCollapsed = localStorage.getItem("sidebar-collapsed");
    const savedCollapsedValue =
      savedCollapsed !== null ? JSON.parse(savedCollapsed) : false;

    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      } else {
        // На десктопе восстанавливаем сохраненное состояние
        setIsCollapsed(savedCollapsedValue);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Устанавливаем флаг гидратации после установки начальных значений
    setIsHydrated(true);

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
