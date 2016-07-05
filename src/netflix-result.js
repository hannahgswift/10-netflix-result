export default function netflixResult(element, movieTitle) {


  fetch(`http://netflixroulette.net/api/api.php?title=${movieTitle}`);

  .then((res) => res.json())
  .then((data) => {

    let x = document.querySelector('.movie-title');
    x.innerHTML = `<h1>${data.show_title}</h1>`
  })

  )



}
