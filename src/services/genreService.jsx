import httpService from "./httpService";

export function getGenres() {
  return httpService.get(`/genres`);
}

// const genreService = {
//   getGenres,
// };
// export default genreService;
