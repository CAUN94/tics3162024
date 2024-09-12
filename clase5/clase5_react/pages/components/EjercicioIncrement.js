// Explicación: Este ejercicio tiene un botón que debería incrementar un contador cada vez que se haga clic. 
// Debes completar la función incrementCounter() para que actualice el estado del contador.

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // Completa esta función para incrementar el contador
  function incrementCounter() {
    alert('Aquí va tu código');
    // Tu código debería incrementar el valor de "count"
  }

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
}
