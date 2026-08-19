/**
 * Точка входа: определяет текущую страницу и запускает нужный рендер
 */

import { renderPlayersList } from './components/playersList.js';
import { renderPlayerPage } from './components/playerPage.js';

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.getElementById('character-grid');
  const detailContainer = document.getElementById('detail-page');

  if (listContainer) {
    renderPlayersList(listContainer);
  }

  if (detailContainer) {
    renderPlayerPage(detailContainer);
  }
});
