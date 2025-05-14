export function saveFilm(film) {
  const films = getFilms();
  films.push(film);
  localStorage.setItem('films', JSON.stringify(films));
}

export function getFilms() {
  return JSON.parse(localStorage.getItem('films')) || [];
}

export function updateFilm(updatedFilm) {
  const films = getFilms().map(f =>
    f.id === updatedFilm.id ? updatedFilm : f
  );
  localStorage.setItem('films', JSON.stringify(films));
}
