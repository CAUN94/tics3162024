// Explicación: Este ejercicio tiene un botón que debería cambiar el color de fondo cada vez que se haga clic. 
// Completa la función changeBackgroundColor() para que cambie el color de fondo al azar.

import { useState } from 'react';

export default function BackgroundChanger() {
//   Definir variables del color

  // Completa esta función para cambiar el color de fondo
  function changeBackgroundColor() {
    alert('Aquí va tu código');
    // Tu código debería cambiar el valor de "color" por un color aleatorio
  }

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <button onClick={changeBackgroundColor}>Cambiar color de fondo</button>
    </div>
  );
}
