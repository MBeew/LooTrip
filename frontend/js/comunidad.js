document.addEventListener('DOMContentLoaded', () => {
    const destinoSelect = document.getElementById('destinoSelect');
    const muro = document.getElementById('muro');
    const mensajeInput = document.getElementById('mensajeInput');
    const enviarBtn = document.getElementById('enviarBtn');
  
    // Simulador de base de datos por destino
    const mensajesPorDestino = {
      'Cancún': [
        { usuario: 'Lucía', texto: '¡Las playas son hermosas! 🌴' },
      ],
      'Madrid': [
        { usuario: 'Carlos', texto: 'No se pierdan el Museo del Prado.' },
      ],
      'Tokio': [],
      'Cusco': [],
    };
  
    const usuarioActivo = 'UsuarioDemo'; // Simula usuario actual
  
    function renderizarMensajes(destino) {
      muro.innerHTML = '';
      const mensajes = mensajesPorDestino[destino] || [];
      if (mensajes.length === 0) {
        muro.innerHTML = '<p class="text-muted">Sé el primero en comentar sobre este destino.</p>';
        return;
      }
  
      mensajes.forEach(m => {
        const div = document.createElement('div');
        div.classList.add('message');
        div.innerHTML = `<span>${m.usuario}:</span> ${m.texto}`;
        muro.appendChild(div);
      });
    }
  
    enviarBtn.addEventListener('click', () => {
      const texto = mensajeInput.value.trim();
      const destino = destinoSelect.value;
  
      if (!texto) return;
  
      // Agregar mensaje al "muro"
      mensajesPorDestino[destino].push({
        usuario: usuarioActivo,
        texto,
      });
  
      mensajeInput.value = '';
      renderizarMensajes(destino);
    });
  
    destinoSelect.addEventListener('change', () => {
      renderizarMensajes(destinoSelect.value);
    });
  
    // Inicializar
    renderizarMensajes(destinoSelect.value);
  });
  