const removeFromLocalStorage = (name, id) => {
  let data = JSON.parse(localStorage.getItem(name));

  const itemToRemove = data.findIndex((item) => item.id === id);

  if (itemToRemove > -1) {
    console.log('removed');
    data.splice(itemToRemove, 1);
  }

  localStorage.setItem(name, JSON.stringify(data));
};

export default removeFromLocalStorage;
