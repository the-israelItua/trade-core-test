import data from "./genres-data.json";

let genres = [...data];

let counter = 24;

async function fetchAll() {
  return genres;
}

async function createSubGenre(values) {
  counter += 1;
  const selected = genres.find((item) => item.id === values.genreId);
  const newValue = {
    id: counter,
    name: values.name,
    isDescriptionRequired: values.isDescriptionRequired,
  };
  selected.subgenres.push(newValue);
  return newValue;
}
export { fetchAll, createSubGenre };
