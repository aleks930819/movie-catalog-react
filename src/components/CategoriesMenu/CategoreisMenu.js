import { useRef, useState } from 'react';
import { MdClose, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { useOnHoverOutside } from '../../hooks/useHoverOutside';
import { useDispatch } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { Link } from 'react-router-dom';

const CategoreisMenu = () => {
  const [categoriesMenu, setCategoriesMenu] = useState(false);
  const categoriesRef = useRef(null);
  const dispatch = useDispatch();

  const categories = [
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Top Rated',
      value: 'top_rated',
    },

    {
      label: 'UpComing',
      value: 'upcoming',
    },
  ];

  const closeHoverMenu = () => {
    setCategoriesMenu(false);
  };

  useOnHoverOutside(categoriesRef, closeHoverMenu);

  return (
    <div
      ref={categoriesRef}
      className="flex gap-2 cursor-pointer self-center relative"
      onMouseOver={() => setCategoriesMenu(true)}
    >
      <p>Categories</p>
      {categoriesMenu ? (
        <MdArrowDropUp className="text-base" />
      ) : (
        <MdArrowDropDown className="text-base" />
      )}

      {categoriesMenu && (
        <ul className="flex flex-col gap-2 absolute top-[20px] bg-cyan-900 w-40 pt-5 z-100 text-center text-base p-5">
          {categories?.map(({ label, value }) => (
            <Link to="/">
              <li
                key={label}
                onClick={() => dispatch(selectGenreOrCategory(value))}
              >
                {label}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoreisMenu;
