// Explicación: Este ejercicio tiene una lista de nombres y un input que debería filtrar los nombres que coincidan con el texto ingresado.
// Completa la función filterNames() para que filtre la lista de nombres.

import { useState } from 'react';

export default function NameFilter() {
    const [filter, setFilter] = useState('');
    const names = ['Ana', 'Pedro', 'Lucía', 'Carlos', 'Marta', 'Juan'];

  // Completa esta función para filtrar los nombres según el texto ingresado
  function filterNames() {
    alert('Aquí va tu código');
    // Tu código debería filtrar los nombres en base al valor de "filter"
  }

  return (
    <div className='bg-purple-100 p-4 text-center'>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrar nombres"
      />
      <ul>
        {names
          .filter((name) => name.toLowerCase().includes(filter.toLowerCase()))
          .map((name, index) => (
            <li key={index}>{name}</li>
          ))}
      </ul>
    </div>
  );
}
