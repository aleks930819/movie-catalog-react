import { useRef, useState } from 'react';
import { MdClose, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { useOnHoverOutside } from '../../hooks/useHoverOutside';
import { useGetGenresQuery } from '../../store';
import { useDispatch } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { Link } from 'react-router-dom';

const GenresMenu = () => {
  const [genresMenu, setGenresMenu] = useState(false);
  const genresRef = useRef(null);
  const { data: genres } = useGetGenresQuery();

  const dispatch = useDispatch();

  const closeHoverMenu = () => {
    setGenresMenu(false);
  };

  useOnHoverOutside(genresRef, closeHoverMenu);

  return (
    <div
      ref={genresRef}
      className="flex gap-2 cursor-pointer self-center relative"
      onMouseOver={() => setGenresMenu(true)}
    >
      <p>Genres</p>

      {genresMenu ? (
        <MdArrowDropUp className="text-base" />
      ) : (
        <MdArrowDropDown className="text-base" />
      )}
      {genresMenu && (
        <ul className="flex flex-col gap-2 absolute top-[20px] bg-cyan-900 w-40 pt-5 z-100 text-center text-base p-5">
          {genres?.genres?.map(({ name, id }) => (
            <Link to='/'>
              <li key={id} onClick={() => dispatch(selectGenreOrCategory(id))}>
                {name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenresMenu;
