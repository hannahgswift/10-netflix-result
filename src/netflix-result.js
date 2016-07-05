export default function netflixResult(element, movieTitle) {


  fetch(`http://netflixroulette.net/api/api.php?title=${movieTitle}`)

  .then((res) => res.json())
  .then((data) => {

    element.innerHTML = `
    <div class="movie">
      <div class="top-container">
        <div class="title-container">
          <h1 class="movie-title">${data.show_title}</h1>
          <h3 class="genre">${data.category}</h3>
          <h2 class="rating">${data.rating}<i class="fa fa-star" aria-hidden="true"></i></h2>
        </div>
        <div class="img-container">
          <img class="movie-poster" src="${data.poster}" alt="" class="movie-poster">
        </div>
      </div>
      <div class="bottom-container">
        <div class="movie-review">
          <h2 class="summary">Summary</h2>
          <p>For over a century, people have been living behind barricades to block out the giant Titans that htreaten to destroy the human race. When a Titan destroys his hometown, young Eren Yeager becomes determined to fight back.</p>
          <h2 class="cast">Actors</h2>
          <p>Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Kiroshi Kamiya, Keiji Fujiwara, Kisho Taniyama, Romi Park, Ryota Ohsaka.</p>
        </div>
      </div>
    </div>`;
  });
}
