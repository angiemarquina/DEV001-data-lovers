export const filterDirectors = (data, directors) =>{
  return data.filter(film => film.director === directors)
}
