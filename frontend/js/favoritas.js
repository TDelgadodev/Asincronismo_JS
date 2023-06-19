window.onload = () => {
  const container = document.querySelector(".container");
  const favorites = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

  if (favorites.length === 0) {
    const message = document.createElement("h2");
    message.textContent = "Aún no tienes películas favoritas";
    message.style.fontSize = "22px";
    container.appendChild(message);
  } else {
    const favoritas = document.getElementById("favoritas");
    const urlBase = "http://localhost:3031/api/movies/";

    favorites.forEach(async (movieId) => {
      try {
        const response = await fetch(urlBase + movieId);
        const movie = await response.json();
        //console.log(movie.data);
        

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.data.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.data.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.data.length}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Género: ${movie.data.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);

        favoritas.appendChild(card);
      } catch (error) {
        console.log(error);
      }
    });
  }
};
