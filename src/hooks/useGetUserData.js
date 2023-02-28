import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const useGetUserData = ({ userID }) => {
  const [watchList, setWatchList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getUserData = async (watchlist) => {
      try {
        const userRef = doc(db, 'users', userID);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          console.log('yes');
          setWatchList(userDoc.data().watchlist);
          setFavorites(userDoc.data().favorites);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (userID) {
      getUserData();
    }
  }, [userID]);

  return { watchList, favorites };
};

export default useGetUserData;
