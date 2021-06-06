import httpService from "./httpService";

function movieUrl(movieId) {
  return `/movies/${movieId}`;
}
export function getMovies() {
  return httpService.get(`/movies`);
}

export function getMovie(movieId) {
  return httpService.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  const body = { ...movie };
  delete body._id;
  if (movie._id) return httpService.put(movieUrl(movie._id), body);

  return httpService.post(movieUrl(movie._id), body);
}

export function deleteMovie(movieId) {
  return httpService.delete(movieUrl(movieId));
}
