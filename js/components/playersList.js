import { getPlayers } from '../api/players.js';

function renderCard(player) {
  return `
    <article class="character-card">
      <span class="character-card-number">${player.id}</span>
      <a href="player_page.html?id=${player.id}">
        <img
          class="character-card-image"
          src="${player.image}"
          alt="${player.nameEn}"
        >
      </a>
      <div class="character-card-body">
        <h2 class="character-card-name-en">${player.nameEn}</h2>
        <p class="character-card-name-jp">${player.nameJp}</p>
        <a href="player_page.html?id=${player.id}" class="character-card-link">
          View <span class="arrow">→</span>
        </a>
      </div>
    </article>
  `;
}

export async function renderPlayersList(container) {
  try {
    const players = await getPlayers();
    container.innerHTML = players.map(renderCard).join('');
  } catch (error) {
    container.innerHTML = `<p class="error-message">Не удалось загрузить список персонажей.</p>`;
    console.error(error);
  }
}
