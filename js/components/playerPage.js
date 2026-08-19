import { getPlayerById } from '../api/players.js';

/**
 @param {string} label
 @param {string|number} value
 @returns {string}
 */
function renderStatRow(label, value) {
  return `
    <div class="detail-stat-row">
      <span class="detail-stat-label">${label}</span>
      <span class="detail-stat-value">${value}</span>
    </div>
  `;
}

/**
 @param {Array<string>} appearances
 @returns {string}
 */
function renderAppearances(appearances) {
  return appearances
    .map((src) => `<img class="detail-appearance-img" src="${src}" alt="Appearance">`)
    .join('');
}

/**
 @param {Object} player
 @returns {string}
 */
function renderDetail(player) {
  return `
    <section class="detail-info">
      <a href="index.html" class="back-link">← Back to Characters</a>

      <span class="detail-number">${player.id}</span>
      <h1 class="detail-name-en">${player.nameEn}</h1>
      <p class="detail-name-jp">${player.nameJp}</p>

      <div class="detail-stats">
        ${renderStatRow('Aliases', player.aliases)}
        ${renderStatRow('Age', player.age)}
        ${renderStatRow('Height', player.height)}
        ${renderStatRow('Weight', player.weight)}
        ${renderStatRow('Status', player.status)}
        ${renderStatRow('Occupation', player.occupation)}
        ${renderStatRow('Fighting Style', player.fightingStyle)}
      </div>

      <h2 class="detail-section-title">About</h2>
      <p class="detail-about">${player.about}</p>

      <h2 class="detail-section-title">Appearances</h2>
      <div class="detail-appearances">
        ${renderAppearances(player.appearances)}
      </div>
    </section>

    <section class="detail-image-wrap">
      <img class="detail-image" src="${player.image}" alt="${player.nameEn}">
      <div class="detail-quote">
        <p class="detail-quote-jp">${player.quoteJp}</p>
        <p class="detail-quote-en">${player.quoteEn}</p>
      </div>
    </section>
  `;
}

/**
 @param {HTMLElement} container
 */
export async function renderPlayerPage(container) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    container.innerHTML = `<p class="error-message"></p>`;
    return;
  }

  try {
    const player = await getPlayerById(id);

    if (!player) {
      container.innerHTML = `<p class="error-message"></p>`;
      return;
    }

    document.title = `${player.nameEn} — Baki Character Index`;
    container.innerHTML = renderDetail(player);
  } catch (error) {
    container.innerHTML = `<p class="error-message"</p>`;
    console.error(error);
  }
}
