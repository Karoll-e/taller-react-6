import { Link, NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png";
import { useTheme } from "./ThemeContext";
import useThemeStyles from "./customHooks/useThemeStyles";

function NavBar() {
  const { toggleTheme, isToggleDark } = useTheme();
  const {
    textPrimary,
    textSecondary,
    isActiveNavLink,
    isNotActiveNavLink,
    navBarLinkHover,
  } = useThemeStyles();

  const navigation = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Nosotros", path: "/about" },
    { name: "Contador Hooks", path: "/hooks-counter" },
    { name: "Contador Redux", path: "/redux-counter" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center gap-4">
            <img alt="" src={logo} className="h-6 w-auto" />
            <h1 className={`font-bold ${textPrimary}`}>Mujeres Digitales</h1>
          </Link>
        </div>

        {/* navNar */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold leading-6 ${
                  isActive
                    ? `${isActiveNavLink}`
                    : `${isNotActiveNavLink} hover:${navBarLinkHover}`
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* boton cambiarTema */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className={`rounded-md p-2 ${textSecondary} ${navBarLinkHover}`}
            onClick={toggleTheme}
          >
            {isToggleDark ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
