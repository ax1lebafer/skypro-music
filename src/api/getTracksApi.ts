const hostGet = "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all/";

export async function getTracks() {
  const response = await fetch(hostGet, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data.data;
}
