import { Link } from 'react-router-dom';

const RightSide = ({ isMobile, setShowMenu, links }) => {
  return (
    <div className="w-full md:block md:w-auto ">
      <ul className=" flex flex-row gap-5 sm:flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-white ">
        {links.map((link) => {
          return (
            <li
              className="flex flex-col items-center justify-center"
              key={link.id}
              onClick={() => {
                isMobile && setShowMenu(false);
              }}
            >
              <Link to={link.link}>
                <div
                  className="flex gap-2 cursor-pointer self-center"
                  onClick={link.onClick}
                >
                  <p>{link.label}</p>
                  {link.icon}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RightSide;
