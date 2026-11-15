"use client";

import * as React from "react";
import { PortfolioData, ThemeConfig } from "./types";
import { getThemeManifest } from "./registry";
import { defaultRohanData } from "./defaultData";

interface ThemeRendererProps {
  themeId?: string;
  data?: PortfolioData;
  config?: ThemeConfig;
  isEditorPreview?: boolean;
}

export function ThemeRenderer({
  themeId = "creative-designer",
  data = defaultRohanData,
  config,
  isEditorPreview = false,
}: ThemeRendererProps) {
  const manifest = getThemeManifest(themeId);
  const Component = manifest.component;

  const mergedConfig: ThemeConfig = {
    ...manifest.defaultConfig,
    ...config,
  };

  return (
    <div className="w-full">
      <Component
        data={data}
        config={mergedConfig}
        isEditorPreview={isEditorPreview}
      />
    </div>
  );
}
