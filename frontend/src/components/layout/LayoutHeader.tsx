"use client";

import { memo } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Header from "./Header";

const LayoutHeader = () => {
  const { isCollapsed, isMobile } = useSidebar();

  return (
    <div
      className="transition-all duration-300"
      style={{
        marginLeft: isMobile ? "0px" : isCollapsed ? "80px" : "320px",
      }}
    >
      <Header />
    </div>
  );
};

export default memo(LayoutHeader);
