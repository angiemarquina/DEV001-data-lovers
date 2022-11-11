export const filterDirectors = (data, directors) => {
  return data.filter(film => film.director === directors);
}

export const sortYears = (data,conditions) => {
  if(conditions === "Oldest") {
    data.sort((a,b) => a.release_date - b.release_date);
  }
  if(conditions === "Most recent") {
    data.sort((a, b) => a.release_date - b.release_date);
    data.reverse();
  }
  return data;
}
