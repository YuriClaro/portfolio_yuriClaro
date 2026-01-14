import React from "react";

interface HighlightProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export default function Highlight({
  children,
  variant = "primary",
  className = "",
}: HighlightProps) {
  const variants = {
    primary: "text-blue-600 dark:text-blue-400 font-semibold",
    secondary: "text-purple-600 dark:text-purple-400 font-semibold",
    accent: "text-emerald-600 dark:text-emerald-400 font-semibold",
  };

  return <span className={`${variants[variant]} ${className}`}>{children}</span>;
}
