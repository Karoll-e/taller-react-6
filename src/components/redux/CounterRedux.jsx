import React from "react";
import { connect } from "react-redux";
import { Minus, Plus, RotateCcw } from "lucide-react";
import useThemeStyles from "../customHooks/useThemeStyles";

function Counter({ count, increment, decrement, reset }) {
  const { textPrimary, textSecondary, highlight } = useThemeStyles();

  return (
    <div className="w-full mx-auto max-w-2xl px-4 py-8 sm:py-32 lg:py-32 flex flex-col items-center gap-4 sm:gap-7">
      <div className="flex justify-center items-center gap-4 sm:gap-7 w-full">
        <button
          onClick={decrement}
          className="p-2 sm:py-2.5 sm:px-6 text-sm rounded-lg font-semibold text-red-600 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700"
        >
          <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <p
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${textPrimary}`}
        >
          {count}
        </p>
        <button
          onClick={increment}
          className="p-2 sm:py-2.5 sm:px-6 text-sm rounded-lg font-semibold text-green-600 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
      <button
        onClick={reset}
        type="button"
        className="p-2 sm:py-2.5 sm:px-6 text-sm rounded-lg font-semibold text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700 flex items-center gap-1 sm:gap-2"
      >
        <RotateCcw className={`h-4 w-4 sm:h-5 sm:w-5 ${highlight}`} />
        <span className={`text-xs sm:text-sm ${textSecondary}`}>Reiniciar</span>
      </button>
      <div className={`space-y-4 ${textSecondary}`}>
        <p className="mt-6 text-lg  sm:text-xl text-center">
          Este componente contador está construido usando Redux para manejar el
          estado global, utilizando connect.
        </p>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
