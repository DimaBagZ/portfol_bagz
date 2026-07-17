"use client";

import { memo } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { getImagePath } from "@/utils/imagePaths";
import BackgroundOverlay from "./BackgroundOverlay";

const SiteBackground = () => {
  const { theme } = useTheme();

  const backgroundSrc = getImagePath(
    theme === "dark"
      ? "/images/backgrounds/portfolio-bg-dark.webp"
      : "/images/backgrounds/portfolio-bg-light.webp"
  );

  return (
    <div className="site-background" aria-hidden="true">
      <div
        className="site-background__image"
        style={{ backgroundImage: `url('${backgroundSrc}')` }}
      />
      <div className="site-background__scrim" />
      <BackgroundOverlay />
    </div>
  );
};

export default memo(SiteBackground);
