// Explicación: Este ejercicio tiene un contador que debería incrementarse pero no puede pasar de 10.
// Completa la función increment() para que el contador se incremente hasta un máximo de 10.

import { useState } from 'react';

export default function LimitedCounter() {
  const [count, setCount] = useState(0);

  // Completa esta función para incrementar el contador con un límite de 10
  function increment() {
    alert('Aquí va tu código');
    // Tu código debería incrementar el contador hasta un máximo de 10
  }

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
