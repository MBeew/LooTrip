document.addEventListener('DOMContentLoaded', () => {
    const achievements = [
      {
        title: "Explorador Nivel 1",
        description: "Has visitado tu primer destino",
        icon: "🧭",
        unlocked: true
      },
      {
        title: "Planificador Experto",
        description: "Has creado 5 itinerarios",
        icon: "📅",
        unlocked: false
      },
      {
        title: "Amante de la Aventura",
        description: "Has explorado 3 nuevos países",
        icon: "🌍",
        unlocked: true
      }
    ];
  
    const container = document.getElementById("achievements-container");
  
    achievements.forEach((achievement) => {
      const col = document.createElement('div');
      col.className = "col-12 col-md-4";
  
      col.innerHTML = `
        <div class="card h-100 shadow-sm ${achievement.unlocked ? '' : 'opacity-50'}">
          <div class="card-body text-center">
            <div class="display-4 mb-3">${achievement.icon}</div>
            <h5 class="card-title fw-bold">${achievement.title}</h5>
            <p class="card-text">${achievement.description}</p>
          </div>
        </div>
      `;
  
      container.appendChild(col);
    });
  });
  