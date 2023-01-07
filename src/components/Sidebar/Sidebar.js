import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
    
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

  const genres = [
    {
      label: 'Comedy',
      value: 'comedy',
    },
    {
      label: 'Action',
      value: 'action',
    },

    {
      label: 'Horror',
      value: 'horror',
    },

    {
      label: 'Drama',
      value: 'drama',
    },

    {
      label: 'Sci-fi',
      value: 'sci-fi',
    },
  ];

  return (
    <div className={isOpen ? 'block' : 'hidden'}>
      <aside className="w-64 lg:block" aria-label="Sidebar">
        <div className="px-3 py-4 overflow-y-auto  bg-cyan-900">
          <ul className="space-y-2 ">
            {categories?.map(({ label, value }) => (
              <li key={label}>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-cyan-600"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap lg:text-2xl">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="pt-4 mt-4 space-y-2 border-t  border-gray-200 dark:border-gray-900">
            {genres?.map(({ label, value }) => (
              <li key={label}>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  dark:hover:bg-cyan-600 dark:text-white group"
                >
                  <span className="ml-3 lg:text-xl">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
