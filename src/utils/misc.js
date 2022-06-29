const findById = (array, id) => {
  return array.find((item) => item?.id === id);
};

export { findById };
