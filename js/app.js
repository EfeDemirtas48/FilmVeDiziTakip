const form = document.getElementById('film-form');
const list = document.getElementById('film-list');
const titleInput = document.getElementById('title');
const genreInput = document.getElementById('genre');
const dateInput = document.getElementById('date');
const posterInput = document.getElementById('poster');
const editIdInput = document.getElementById('edit-id');
const suggestionBox = document.getElementById('film-suggestions');
const preview = document.getElementById('poster-preview');

const TMDB_API_KEY = '42b5380258138a4db23405c7b3abf551';

// === Film Ekleme / Güncelleme ===
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = editIdInput.value ? Number(editIdInput.value) : Date.now();

  const film = {
    id,
    title: titleInput.value,
    genre: genreInput.value,
    date: dateInput.value,
    watched: editIdInput.value ? getFilms().find(f => f.id === id)?.watched : false,
    poster: posterInput.value
  };

  if (editIdInput.value) {
    updateFilm(film);
  } else {
    saveFilm(film);
  }

  renderFilmList(getFilms());
  form.reset();
  preview.src = 'https://via.placeholder.com/150x225?text=Poster';
  editIdInput.value = '';
});

// === Liste Üzerinde İşlemler ===
list.addEventListener('click', (e) => {
  const id = Number(e.target.dataset.id);
  let films = getFilms();

  if (e.target.classList.contains('toggle')) {
    films = films.map(f => f.id === id ? { ...f, watched: !f.watched } : f);
  } else if (e.target.classList.contains('delete')) {
    films = films.filter(f => f.id !== id);
  } else if (e.target.classList.contains('edit')) {
    const film = films.find(f => f.id === id);
    titleInput.value = film.title;
    genreInput.value = film.genre;
    dateInput.value = film.date;
    posterInput.value = film.poster;
    preview.src = film.poster;
    editIdInput.value = film.id;
  }

  localStorage.setItem('films', JSON.stringify(films));
  renderFilmList(films);
});

// === Sayfa Yüklendiğinde Listeyi Göster ===
document.addEventListener('DOMContentLoaded', () => {
  renderFilmList(getFilms());
});

// === TMDb API Canlı Öneri + Poster Otomatik Getir ===
titleInput.addEventListener('input', async () => {
  const query = titleInput.value.trim();
  if (query.length < 2) return;

  const url = `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=tr-TR`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    suggestionBox.innerHTML = '';
    const results = data.results
      .filter(item => item.media_type === "movie" || item.media_type === "tv")
      .slice(0, 10);

    results.forEach(item => {
      const name = item.title || item.name;
      const option = document.createElement('option');
      option.value = name;
      suggestionBox.appendChild(option);
    });

    if (results.length > 0 && results[0].poster_path) {
      const fullPosterURL = `https://image.tmdb.org/t/p/w500${results[0].poster_path}`;
      posterInput.value = fullPosterURL;
      preview.src = fullPosterURL;
    }
  } catch (err) {
    console.error("TMDb API hatası:", err);
  }
});

// === localStorage Fonksiyonları ===
function saveFilm(film) {
  const films = getFilms();
  films.push(film);
  localStorage.setItem('films', JSON.stringify(films));
}

function getFilms() {
  return JSON.parse(localStorage.getItem('films')) || [];
}

function updateFilm(updatedFilm) {
  const films = getFilms().map(f => f.id === updatedFilm.id ? updatedFilm : f);
  localStorage.setItem('films', JSON.stringify(films));
}

// === Listeyi Çizdir ===
function renderFilmList(films) {
  list.innerHTML = '';
  films.forEach(film => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
      <div class="card">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-start gap-3">
            <img src="${film.poster || 'https://via.placeholder.com/100x150?text=No+Image'}" 
                 onerror="this.src='https://via.placeholder.com/100x150?text=Not+Found';" 
                 class="img-thumbnail" style="width:100px;">
            <div>
              <h5 class="mb-1">${film.title}</h5>
              <p class="text-muted small">${film.genre} • ${film.date}</p>
              <span class="badge ${film.watched ? 'bg-success' : 'bg-secondary'}">
                ${film.watched ? 'İzlendi' : 'İzlenmedi'}
              </span>
            </div>
          </div>
          <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-success toggle" data-id="${film.id}">İzlendi</button>
            <button class="btn btn-outline-warning edit" data-id="${film.id}">Düzenle</button>
            <button class="btn btn-outline-danger delete" data-id="${film.id}">Sil</button>
          </div>
        </div>
      </div>
    `;
    list.appendChild(li);
  });
}
