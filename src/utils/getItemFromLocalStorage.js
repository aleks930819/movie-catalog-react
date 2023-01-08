const getItemFromLocalStorage = (name) => {
  let data = JSON.parse(localStorage.getItem(name));

  return data;
};

export default getItemFromLocalStorage;
