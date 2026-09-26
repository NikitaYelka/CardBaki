const DATA_URL = 'data/players.json';

export async function getPlayers() {
  const response = await fetch(DATA_URL);

  if (!response.ok) {
    throw new Error(`Не удалось загрузить данные персонажей: ${response.status}`);
  }

  return response.json();
}

export async function getPlayerById(id) {
  const players = await getPlayers();
  return players.find((player) => player.id === Number(id));
}
