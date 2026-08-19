/**
 * API-слой: загрузка данных персонажей из data/players.json
 */

const DATA_URL = 'data/players.json';

/**
 * Загружает и возвращает список всех персонажей.
 * @returns {Promise<Array>}
 */
export async function getPlayers() {
  const response = await fetch(DATA_URL);

  if (!response.ok) {
    throw new Error(`Не удалось загрузить данные персонажей: ${response.status}`);
  }

  return response.json();
}

/**
 * Возвращает одного персонажа по id.
 * @param {number|string} id
 * @returns {Promise<Object|undefined>}
 */
export async function getPlayerById(id) {
  const players = await getPlayers();
  return players.find((player) => player.id === Number(id));
}
