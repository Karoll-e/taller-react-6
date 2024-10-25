import React, { useState, useEffect } from 'react'; 

function ContadorHooks() {
    const [contador, setContador] = useState(0);
  
    useEffect(() => {
      console.log(`El contador ha cambiado a: ${contador}`);
    }, [contador]);
  
    return (
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
        <h2 className="text-xl font-bold mb-4">Contador con Hooks</h2>
        <p className="text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl md:text-7xl">{contador}</p>
        <div className="space-x-2">
          <button 
            onClick={() => setContador(prev => prev + 1)}
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Incrementar
          </button>
          <button 
            onClick={() => setContador(prev => prev - 1)}
            className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Decrementar
          </button>
        </div>
      </div>
    );
  }
  
  export default ContadorHooks;