import useThemeStyles from "./customHooks/useThemeStyles";

const links = [
  { name: "Hooks", href: "/hooks-counter" },
  { name: "Redux", href: "/redux-counter" },
  { name: "Contexto global", href: "/theme" },
  { name: "Testing", href: "/test-button" },
];

function About() {
  const { textPrimary, textSecondary} = useThemeStyles();

  
  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
      <div className=" text-center max-w-2xl lg:mx-0">
        <h2 className={`text-xl font-semibold tracking-tight sm:text-7xl ${textPrimary}`}>
          Taller N° 6 de React
        </h2>
        <p className={`mt-6 text-lg  sm:text-xl ${textSecondary}`}>
          Este taller de React aborda los conceptos fundamentales del desarrollo
          de aplicaciones web con React, comenzando con el enrutamiento mediante
          React Router para la navegación entre diferentes vistas, seguido por
          la implementación de estos los siguientes temas:
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-600 sm:grid-cols-2 md:flex lg:gap-x-10 justify-center">
          {links.map((link) => (
            <a
              className="py-2.5 px-6 text-sm rounded-lg font-semibold text-indigo-500 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700"
              key={link.name}
              href={link.href}
            >
              {link.name} <span aria-hidden="true">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
