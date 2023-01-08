import { useEffect, useState } from 'react';

const AddToLocalStorage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
};

export default AddToLocalStorage;
