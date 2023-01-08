const addToLocalStorage = (name, content) => {
  let data = JSON.parse(localStorage.getItem(name));

  if (!data) {
    return localStorage.setItem(name, JSON.stringify(content));
  }
  const isFound = data.some((element) => {
    if (element.id === content[0]?.id) {
      return true;
    }

    return false;
  });

  if (isFound) {
    return;
  }
  data.push(content[0]);

  localStorage.setItem(name, JSON.stringify(data));
};

export default addToLocalStorage;
