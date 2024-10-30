import { useTheme } from "../ThemeContext";

export default function useThemeStyles() {
  const { isDarkTheme } = useTheme();

  return {
    background: isDarkTheme ? "bg-neutral-950" : "bg-blue-50",
    textPrimary: isDarkTheme ? "text-gray-200" : "text-gray-900",
    textSecondary: isDarkTheme ? "text-gray-300" : "text-gray-600",
    linkPrimary: isDarkTheme
      ? "bg-blue-500 text-white hover:bg-blue-400"
      : "bg-blue-600 text-white hover:bg-blue-500",
    linkFocusOutline: isDarkTheme ? "focus-visible:outline-blue-500" : "focus-visible:outline-blue-600",
    highlight: isDarkTheme ? "text-blue-400" : "text-blue-600",
    isActiveNavLink: isDarkTheme? "text-blue-400": "text-blue-600",
    isNotActiveNavLink: isDarkTheme? "text-gray-300": "text-gray-900",
    navBarLinkHover: isDarkTheme? "hover:bg-gray-800": "hover:bg-gray-100",
  };
}

