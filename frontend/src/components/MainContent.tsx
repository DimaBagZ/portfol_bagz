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
        marginLeft: isMobile ? "0px" : isCollapsed ? "80px" : "320px",
      }}
    >
      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default memo(MainContent);
