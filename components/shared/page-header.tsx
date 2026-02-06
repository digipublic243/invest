"use client";

import { ThemeSelector } from "@/components/shared/theme-selector";

type PageHeaderProps = {
  badge?: string;
};

export default function PageHeader({
  badge = "Acces rapide aux applications",
}: PageHeaderProps) {
  return (
    <header className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-6 pt-10 sm:px-10">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-100/60 px-4 py-2 text-sm font-medium text-amber-700 shadow-sm shadow-amber-500/10 transition-all dark:border-amber-200/20 dark:bg-amber-400/10 dark:text-amber-200">
          {badge}
        </div>
        <ThemeSelector />
      </div>
    </header>
  );
}
