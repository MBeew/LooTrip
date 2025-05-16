document.addEventListener('DOMContentLoaded', () => {
    const chat = document.getElementById('chat');
    const input = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
  
    function appendMessage(text, sender = 'bot') {
      const bubble = document.createElement('div');
      bubble.classList.add('ia-bubble', sender);
      bubble.textContent = text;
      chat.appendChild(bubble);
      chat.scrollTop = chat.scrollHeight;
    }
  
    function botResponse(message) {
      const lower = message.toLowerCase();
  
      if (lower.includes('hola')) {
        return '¡Hola! ¿Estás planeando un nuevo viaje? 🌍';
      } else if (lower.includes('sugerencia')) {
        return 'Te recomiendo visitar Cusco, Perú. Cultura, naturaleza y aventura en un solo lugar.';
      } else if (lower.includes('clima')) {
        return 'Puedes verificar el clima dentro de la sección del destino que elijas.';
      } else {
        return 'Lo siento, aún estoy aprendiendo. Pero puedo ayudarte a planear rutas, sugerencias o recomendaciones generales.';
      }
    }
  
    sendBtn.addEventListener('click', () => {
      const text = input.value.trim();
      if (!text) return;
  
      appendMessage(text, 'user');
      input.value = '';
  
      setTimeout(() => {
        const response = botResponse(text);
        appendMessage(response, 'bot');
      }, 500);
    });
  });
  