import { useEffect, useRef } from 'react';

const useCloseOutside = (handler) => {
  let ref = useRef();

  useEffect(() => {
    const closeDown = (e) => {
      if (!ref.current.contains(e.target)) {
        handler();
      }
    };

    document.body.addEventListener('click', closeDown);

    return () => {
      document.body.removeEventListener('click', closeDown);
    };
  }, [handler]);
  return ref;
};

export default useCloseOutside;
