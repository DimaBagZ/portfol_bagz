"use client";

import { memo } from "react";
import { useSidebar } from "@/contexts/SidebarContext";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  const { isCollapsed, isMobile, isHydrated } = useSidebar();

  return (
    <div
      className="transition-all duration-300 min-h-screen pt-16"
      style={{
        // В десктопной версии сайдбар всегда открывается поверх контента
        // В мобильной версии контент занимает всю ширину
        // Не применяем отступы до гидратации чтобы избежать мерцания
        marginLeft: isHydrated
          ? isMobile
            ? "0px"
            : isCollapsed
            ? "80px"
            : "80px"
          : "0px",
      }}
    >
      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default memo(MainContent);
