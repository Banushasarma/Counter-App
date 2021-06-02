import httpService from "./httpService";
import { apiUrl } from "../config.json";

function movieUrl(movieId) {
  return `${apiUrl}/movies/${movieId}`;
}
export function getMovies() {
  return httpService.get(`${apiUrl}/movies`);
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
