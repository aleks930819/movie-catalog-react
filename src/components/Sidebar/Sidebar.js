import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetGenresQuery } from '../../store';
import { selectGenreOrCategory } from '../features/currentGenreOrCategory';
import Movies from '../Movies/Movies';


const Sidebar = ({ isOpen }) => {
  const { data: genres } = useGetGenresQuery();

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

  //   {
  //     label: 'Comedy',
  //     value: 'comedy',
  //   },
  //   {
  //     label: 'Action',
  //     value: 'action',
  //   },

  //   {
  //     label: 'Horror',
  //     value: 'horror',
  //   },

  //   {
  //     label: 'Drama',
  //     value: 'drama',
  //   },

  //   {
  //     label: 'Sci-fi',
  //     value: 'sci-fi',
  //   },
  // ];

  return (
    <div className='flex'>
     {/* <div className={isOpen ? 'inline-flex' : 'hidden'}> */}
      <aside className="w-64  inline-flex" aria-label="Sidebar">
        <div className="px-3 py-4 overflow-y-auto  bg-cyan-900">
          <ul className="space-y-2 ">
            {categories?.map(({ label, value }) => (
              <li key={label}>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-cyan-600"
                  onClick={() => dispatch(selectGenreOrCategory(value))}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap lg:text-lg">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="pt-4 mt-4 space-y-2 border-t  border-gray-200 dark:border-gray-900">
            {genres?.genres?.map(({ name, id }) => (
              <li key={name}>
                <Link
                  href="#"
                  onClick={() => dispatch(selectGenreOrCategory(id))}
                  className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  dark:hover:bg-cyan-600 dark:text-white group"
                >
                  <span className="ml-3 lg:text-lg">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* </div> */}
   </div>
  );
};

export default Sidebar;
