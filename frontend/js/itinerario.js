document.addEventListener('DOMContentLoaded', () => {
  // Datos del viaje
  const datosViaje = {
    lugar: 'San Andrés',
    fechaIda: '2025-07-10',
    fechaRetorno: '2025-07-15',
    adultos: 2,
    menores: 1,
    preferencia: 'Playa',
    presupuesto: '$2.000.000'
  };

  // Actividades por día (ahora como objetos más completos)
  const actividadesPorDia = {
    Lunes: {
      actividad: '🌊 Llegada y paseo por la playa',
      lugar: 'Playa Spratt Bight',
      hora: '3:00 PM',
      direccion: 'Av. Colombia'
    },
    Martes: {
      actividad: '🚤 Tour en lancha por Johnny Cay',
      lugar: 'Muelle Casa de la Cultura',
      hora: '9:00 AM',
      direccion: 'Av. Newball'
    },
    Miércoles: {
      actividad: '🤿 Snorkel y acuario natural',
      lugar: 'Acuario West View',
      hora: '11:00 AM',
      direccion: 'Calle West View'
    },
    Viernes: {
      actividad: '🌬️ Excursión al Hoyo Soplador',
      lugar: 'Punta Sur',
      hora: '10:00 AM',
      direccion: 'Carretera Sur'
    }
  };

  // Insertar datos del viaje
  document.getElementById('lugar').textContent = datosViaje.lugar;
  document.getElementById('fechaIda').textContent = datosViaje.fechaIda;
  document.getElementById('fechaRetorno').textContent = datosViaje.fechaRetorno;
  document.getElementById('adultos').textContent = datosViaje.adultos;
  document.getElementById('menores').textContent = datosViaje.menores;
  document.getElementById('preferencia').textContent = datosViaje.preferencia;
  document.getElementById('presupuesto').textContent = datosViaje.presupuesto;

  const tabla = document.getElementById('tabla-itinerario');
  const fila1 = document.createElement('tr');
  const fila2 = document.createElement('tr');

  const diasOrden = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  diasOrden.forEach(dia => {
    const actividad = actividadesPorDia[dia];

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    if (actividad) {
      td1.innerHTML = `<strong>${actividad.actividad}</strong>`;
      td2.innerHTML = `
        📍 <strong>${actividad.lugar}</strong><br>
        ⏰ ${actividad.hora}<br>
        🧭 ${actividad.direccion}
      `;
    } else {
      td1.textContent = 'Sin actividad';
      td2.innerHTML = '—';
    }

    fila1.appendChild(td1);
    fila2.appendChild(td2);
  });

  tabla.appendChild(fila1);
  tabla.appendChild(fila2);
});
