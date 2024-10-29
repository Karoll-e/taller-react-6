import { Link } from "react-router-dom";
import useThemeStyles from "./customHooks/useThemeStyles";

function Home() {
  const { textPrimary, textSecondary, linkPrimary, linkFocusOutline, highlight } = useThemeStyles();

  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
      <div className="text-center">
        <h1 className={`text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl ${textPrimary}`}>
          Bienvenido a la página de{" "}
          <span className={highlight}>Inicio</span> <span className="hidden sm:inline">👋</span>
        </h1>

        <p className={`mt-6 text-lg leading-8 max-w-xl mx-auto md:text-xl ${textSecondary}`}>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            to="/about"
            className={`rounded-md px-6 py-3 text-sm font-semibold shadow-sm ${linkPrimary} ${linkFocusOutline}`}
          >
            Más acerca de nosotros
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;