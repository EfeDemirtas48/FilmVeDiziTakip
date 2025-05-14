export function renderFilmList(films) {
  const list = document.getElementById('film-list');
  list.innerHTML = '';

  films.forEach(film => {
    const li = document.createElement('li');
    li.className = 'list-group-item';

    li.innerHTML = `
      <div class="card">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-start gap-3">
            <img 
              src="${film.poster || 'https://via.placeholder.com/100x150?text=No+Image'}" 
              onerror="this.onerror=null; this.src='https://via.placeholder.com/100x150?text=Not+Found';"
              class="img-thumbnail" 
              style="width: 100px; height: auto;" 
              alt="${film.title}">
            <div>
              <h5 class="card-title mb-1">${film.title}</h5>
              <p class="card-text small text-muted">${film.genre} • ${film.date}</p>
              <span class="badge ${film.watched ? 'bg-success' : 'bg-secondary'}">
                ${film.watched ? 'İzlendi' : 'İzlenmedi'}
              </span>
            </div>
          </div>
          <div class="btn-group btn-group-sm" role="group">
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
