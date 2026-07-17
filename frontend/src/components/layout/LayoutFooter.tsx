"use client";

import { memo } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Footer from "./Footer";

const LayoutFooter = () => {
  const { isCollapsed, isMobile } = useSidebar();

  return (
    <div
      className="relative transition-all duration-300"
      style={{
        marginLeft: isMobile ? "0px" : isCollapsed ? "80px" : "320px",
      }}
    >
      <Footer />
    </div>
  );
};

export default memo(LayoutFooter);
