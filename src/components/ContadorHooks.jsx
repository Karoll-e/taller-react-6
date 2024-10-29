import React, { useState, useEffect } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";

function ContadorHooks() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El contador ha cambiado a: ${contador}`);
  }, [contador]);

  const handleReset = () => {
    setContador(0);
  };

  return (
    <div className="w-full mx-auto max-w-2xl px-4 py-8 sm:py-32 lg:py-32 flex flex-col items-center gap-4 sm:gap-7">
      <div className="flex justify-center items-center gap-4 sm:gap-7 w-full">
        <button
          onClick={() => setContador((prev) => prev - 1)}
          type="button"
          className="p-2 sm:py-2.5 sm:px-6 text-sm rounded-lg font-semibold text-red-600 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700"
        >
          <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-blue-600">
          {contador}
        </p>

        <button
          onClick={() => setContador((prev) => prev + 1)}
          type="button"
          className="p-2 sm:py-2.5 sm:px-6 text-sm rounded-lg font-semibold text-green-600 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      <button
        onClick={handleReset}
        type="button"
        className="p-2 sm:py-2.5 sm:px-6 text-sm rounded-lg font-semibold text-gray-700 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700 flex items-center gap-1 sm:gap-2"
      >
        <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs sm:text-sm">Reset</span>
      </button>
    </div>
  );
}

export default ContadorHooks;
