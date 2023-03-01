import CategoreisMenu from '../CategoriesMenu/CategoreisMenu';
import GenresMenu from '../GenresMenu/GenresMenu';
import Search from '../Search/Search';

const LeftSide = () => {
  return (
    <div className="mt-5 flex flex-col-reverse sm:flex sm:flex-row gap-8  sm:mt-0 text-white">
      <div className="flex  gap-5">
        <CategoreisMenu />
        <GenresMenu />
      </div>
      <Search />
    </div>
  );
};

export default LeftSide;
