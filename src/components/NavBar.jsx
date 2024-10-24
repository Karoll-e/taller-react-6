import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";
import logo from "../assets/logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Nosotros", path: "/about" },
    { name: "Contador Hooks", path: "/hooks-counter" },
    { name: "Contador Redux", path: "/redux-counter" },
    { name: "Tema", path: "/theme" },
    { name: "Boton Test", path: "/test-button" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center gap-4">
            <img alt="" src={logo} className="h-6 w-auto" />
            <h1 className="text-blue-600 font-bold">Mujeres Digitales</h1>
          </Link>
          
        </div>

        {/* boton de menu en moviles */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* navNar en escritorio */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold leading-6 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-900 hover:text-gray-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* boton cambiarTema en escritorio */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <Sun className="h-5 w-5" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>

        {/* menu en moviles */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200`}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-900 hover:bg-gray-50"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            {/* boton cambiarTema en moviles */}
            <button
              type="button"
              className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sun className="h-5 w-5 mr-2" />
              Modo oscuro
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;