import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Bienvenido a la pagina de{" "}
          <span className="text-blue-600">Inicio</span>{" "}
          <span className="hidden sm:inline">👋</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto md:text-xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            to="/about"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Más acerca de nosotros
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
