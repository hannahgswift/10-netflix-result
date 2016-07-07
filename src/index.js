import netflixResult from 'netflix-result';

export default function index(movie) {
  // netflixResult(element, movie);

  var search = document.querySelector('.InputAddOn-field');
  var button = document.querySelector('.InputAddOn-item');

  function submit(movie) {
    return netflixResult(movie, search.value);

  };

  button.addEventListener('click', function () {
    submit();
  });

}
